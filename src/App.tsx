import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Pause, Play, Share2 } from 'lucide-react';
import { weddingData } from './data/weddingData';
import { INVITATION_CHAPTERS } from './utils/weddingUtils';
import { weddingAudio } from './utils/carnaticAudio';
import { IntroScreen } from './components/IntroScreen';
import { InvitationCard } from './components/InvitationCard';
import { EventsSection } from './components/EventsSection';
import {
  GrandTempleShowcaseScene,
  TempleCoupleScene,
} from './components/TempleScene';
import { CoupleSection } from './components/CoupleSection';
import { WeddingDetails } from './components/WeddingDetails';
import { CountdownGalleryScene } from './components/CountdownGalleryScene';
import { ClosingScreen } from './components/ClosingScreen';
import { MusicPlayer } from './components/MusicPlayer';
import { GalleryLightbox } from './components/Gallery';
import { MemoriesPlayer } from './components/MemoriesPlayer';
import { SpecialPhotosModal } from './components/SpecialPhotosModal';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';

function WeddingAppContent() {
  const { data } = useLanguage();
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [autoScrolling, setAutoScrolling] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [memoriesOpen, setMemoriesOpen] = useState(false);
  const [specialPhotosOpen, setSpecialPhotosOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toastTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  }, []);

  const scrollToChapter = useCallback((id: string) => {
    setAutoScrolling(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleEnterInvitation = useCallback(async () => {
    scrollToChapter('sacred-invite');
    if (!musicPlaying) {
      const started = await weddingAudio.start(data.musicTrackUrl);
      if (started) setMusicPlaying(true);
    }
  }, [data.musicTrackUrl, musicPlaying, scrollToChapter]);

  const handleToggleMusic = useCallback(async () => {
    if (musicPlaying) {
      weddingAudio.stop();
      setMusicPlaying(false);
    } else {
      const started = await weddingAudio.start(data.musicTrackUrl);
      setMusicPlaying(started);
    }
  }, [data.musicTrackUrl, musicPlaying]);

  const handleReplay = useCallback(() => {
    setAutoScrolling(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleShare = useCallback(async () => {
    const shareUrl = window.location.href;
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: data.shareTitle,
          text: data.shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${data.shareText} ${shareUrl}`);
      showToast('Invitation link copied to share');
    } catch {
      showToast('Copy the URL from your address bar to share');
    }
  }, [data.shareText, data.shareTitle, showToast]);

  const openPhotoBySrc = useCallback((src: string) => {
    const foundIndex = data.gallery.findIndex((g) => g.src === src);
    setLightboxIndex(foundIndex >= 0 ? foundIndex : 0);
  }, [data.gallery]);

  // Optional ?autostart=1 scrolls straight to sacred-invite on load for verification
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      window.setTimeout(() => {
        const el = document.getElementById('sacred-invite');
        el?.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
      }, 150);
    }
    const chapter = params.get('chapter');
    if (chapter) {
      window.setTimeout(() => {
        const el = document.getElementById(chapter);
        el?.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
      }, 150);
    }
  }, []);

  // Smooth continuous film auto-scroll mode (reproduces the continuous 41s video glide)
  useEffect(() => {
    if (!autoScrolling) {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      return;
    }

    let lastTime = performance.now();
    const step = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 2) {
        setAutoScrolling(false);
        return;
      }
      window.scrollBy(0, (dt / 1000) * 145);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [autoScrolling]);

  useEffect(() => {
    return () => {
      weddingAudio.stop();
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#FFF8E8] overflow-x-clip">
      {/* Top-Right Language Switcher: English | తెలుగు */}
      <LanguageToggle />

      {/* Floating Bottom-Right Control Bar: 3 Symbols Only (Play/Pause Film, Music On/Off, Share), reduced by 20% */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-[#1D1819]/90 backdrop-blur-md border border-[#D6A64B]/80 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        {/* 1. Play / Pause Auto-scroll Symbol */}
        <button
          type="button"
          onClick={() => setAutoScrolling((prev) => !prev)}
          aria-label={autoScrolling ? 'Pause automatic invitation scroll' : 'Auto-scroll invitation film'}
          aria-pressed={autoScrolling}
          className="p-2.5 rounded-full bg-[#2A1D20] text-[#FFF8E8] border border-[#D6A64B]/60 shadow hover:bg-[#650C18] transition-colors cursor-pointer shrink-0"
        >
          {autoScrolling ? (
            <Pause className="w-4 h-4 text-[#F2D27A]" aria-hidden="true" />
          ) : (
            <Play className="w-4 h-4 text-[#F2D27A] translate-x-0.5" aria-hidden="true" />
          )}
        </button>

        {/* 2. Music Player Symbol */}
        <MusicPlayer isPlaying={musicPlaying} onToggle={handleToggleMusic} />

        {/* 3. Share Symbol */}
        <button
          type="button"
          onClick={handleShare}
          aria-label="Share wedding invitation"
          className="p-2.5 rounded-full bg-[#2A1D20] text-[#FFF8E8] border border-[#D6A64B]/60 shadow hover:bg-[#650C18] transition-colors cursor-pointer shrink-0"
        >
          <Share2 className="w-4 h-4 text-[#F2D27A]" aria-hidden="true" />
        </button>
      </div>

      {/* Continuous Seamless Video-Matched Invitation Journey (00:00 -> 00:41) */}
      <IntroScreen onEnter={handleEnterInvitation} />
      <InvitationCard />
      <EventsSection onOpenPhoto={openPhotoBySrc} />
      <TempleCoupleScene />
      <CoupleSection onOpenPortrait={() => openPhotoBySrc(data.couple.portraitImage)} />
      <GrandTempleShowcaseScene />
      <WeddingDetails onShare={handleShare} />
      <CountdownGalleryScene onOpenGallery={(idx) => setLightboxIndex(idx)} />
      <ClosingScreen
        onOpenMemories={() => setMemoriesOpen(true)}
        onOpenSpecial={() => setSpecialPhotosOpen(true)}
      />

      {/* Full-screen Memories Slideshow with Falling Love & Leaves */}
      <MemoriesPlayer isOpen={memoriesOpen} onClose={() => setMemoriesOpen(false)} />

      {/* Special 2-Photo Modal for 👀 button */}
      <SpecialPhotosModal isOpen={specialPhotosOpen} onClose={() => setSpecialPhotosOpen(false)} />

      {/* Photo Lightbox Modal */}
      <GalleryLightbox
        photos={data.gallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelect={(idx) => setLightboxIndex(idx)}
      />

      {/* Subtle Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#1D1819] text-[#FFF8E8] border border-[#D6A64B] font-display text-xs tracking-wider uppercase shadow-xl"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <WeddingAppContent />
    </LanguageProvider>
  );
}
