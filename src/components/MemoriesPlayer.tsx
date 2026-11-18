import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Pause, Play, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingAudio } from '../utils/carnaticAudio';
import { weddingData } from '../data/weddingData';

interface MemoriesPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FallingLeaf {
  id: number;
  symbol: string;
  left: number; // percentage 0 - 100
  duration: number; // seconds
  delay: number; // seconds
  size: number; // px
  rotation: number;
  swayDistance: number;
}

const LOVE_LEAF_SYMBOLS = ['❤️', '💖', '💕', '🌸', '🍃', '🍁', '✨', '🌹', '🤍'];

export const MemoriesPlayer: React.FC<MemoriesPlayerProps> = ({ isOpen, onClose }) => {
  const { isTelugu } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const images = weddingData.memories;

  // Generate 28 natural falling leaves/love symbols with varied physics
  const fallingLeaves: FallingLeaf[] = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      symbol: LOVE_LEAF_SYMBOLS[i % LOVE_LEAF_SYMBOLS.length],
      left: Math.random() * 96 + 2,
      duration: Math.random() * 5 + 6, // 6 to 11s float
      delay: Math.random() * 8, // staggered starts
      size: Math.floor(Math.random() * 14 + 18), // 18px to 32px
      rotation: Math.floor(Math.random() * 360),
      swayDistance: (Math.random() - 0.5) * 80,
    }));
  }, []);

  // When opened, gently ensure music plays
  useEffect(() => {
    if (isOpen) {
      weddingAudio.start().catch(() => {});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Slideshow automatic progression every 3.8s
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3800);
    return () => window.clearInterval(interval);
  }, [isOpen, isPlaying, images.length]);

  // Keyboard navigation (Arrow keys + Esc)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Cherished Memories Slideshow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl overflow-hidden select-none"
      >
        {/* Soft Blurred Ambient Background of Current Image */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt=""
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.25, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-cover blur-3xl scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85" />
        </div>

        {/* Falling Love Symbols & Winter Leaves Animation */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
          {fallingLeaves.map((leaf) => (
            <motion.div
              key={leaf.id}
              initial={{
                y: '-8vh',
                x: `${leaf.left}vw`,
                rotate: leaf.rotation,
                opacity: 0,
              }}
              animate={{
                y: '108vh',
                x: [
                  `${leaf.left}vw`,
                  `calc(${leaf.left}vw + ${leaf.swayDistance}px)`,
                  `calc(${leaf.left}vw - ${leaf.swayDistance * 0.7}px)`,
                  `calc(${leaf.left}vw + ${leaf.swayDistance * 0.4}px)`,
                ],
                rotate: leaf.rotation + 360,
                opacity: [0, 0.9, 0.9, 0],
              }}
              transition={{
                duration: leaf.duration,
                delay: leaf.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                fontSize: `${leaf.size}px`,
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              className="drop-shadow-[0_2px_8px_rgba(255,200,200,0.6)]"
            >
              {leaf.symbol}
            </motion.div>
          ))}
        </div>

        {/* Top Header Bar */}
        <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-2 text-[#F2D27A]">
            <Heart className="w-5 h-5 fill-[#E74C3C] text-[#E74C3C] animate-pulse" />
            <span className="font-script text-2xl sm:text-3xl tracking-wide text-[#FFF8E8]">
              {isTelugu ? 'ప్రదీప్ & సాయి శ్రీ' : 'Pradeep & Sai Sree'}
            </span>
            <span className="hidden sm:inline text-xs font-display tracking-widest text-[#D6A64B] uppercase ml-2">
              {isTelugu ? '· మధుర జ్ఞాపకాలు' : '· Cherished Memories'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-display tracking-widest text-[#FFF8E8]/80 bg-white/10 px-3 py-1 rounded-full border border-white/20">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close memories slideshow"
              className="p-2 sm:p-2.5 rounded-full bg-white/15 text-white border border-white/25 hover:bg-[#8C1423] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Photo Frame */}
        <div className="relative z-20 w-full max-w-4xl h-[72vh] sm:h-[78vh] flex items-center justify-center p-3 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.04, y: -10 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-full max-w-full rounded-2xl overflow-hidden border-2 sm:border-[3px] border-[#D6A64B] shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-[#110B0C]"
            >
              <img
                src={currentImage}
                alt={`Pradeep & Sai Sree memory ${currentIndex + 1}`}
                className="max-h-[68vh] sm:max-h-[74vh] w-auto max-w-full object-contain mx-auto"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            aria-label="Previous photograph"
            className="absolute left-2 sm:left-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/60 text-[#FFF8E8] border border-[#D6A64B]/60 hover:bg-[#650C18] hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            aria-label="Next photograph"
            className="absolute right-2 sm:right-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/60 text-[#FFF8E8] border border-[#D6A64B]/60 hover:bg-[#650C18] hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Floating Slideshow Controls & Thumbnails */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 flex flex-col items-center gap-2.5 px-4 pointer-events-auto">
          {/* Play/Pause + Timeline Dot Indicators */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#D6A64B]/50 shadow-xl max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="p-1.5 rounded-full bg-[#650C18] text-[#F2D27A] hover:bg-[#8C1423] transition-colors cursor-pointer shrink-0"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[220px] sm:max-w-md py-1">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to photo ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer shrink-0 ${
                    idx === currentIndex
                      ? 'w-6 bg-[#F2D27A] shadow-sm'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
