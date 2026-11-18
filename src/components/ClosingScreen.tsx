import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoldParticles, ResilientWeddingImage } from './TempleOrnaments';

interface ClosingScreenProps {
  onReplay?: () => void;
  onShare?: () => void;
  onOpenMemories: () => void;
  onOpenSpecial?: () => void;
}

export const ClosingScreen: React.FC<ClosingScreenProps> = ({ onOpenMemories, onOpenSpecial }) => {
  const { data, isTelugu } = useLanguage();
  const { couple, closingBlessing, artwork } = data;

  return (
    <section
      id="closing"
      aria-label="Final Wedding Blessings"
      className="relative w-full min-h-[96vh] overflow-hidden flex flex-col items-center justify-start bg-[#FFF8E8]"
    >
      {/* Full-Screen Golden Temple & Sacred Hills Finale Artwork */}
      <div className="absolute inset-0 z-0">
        <ResilientWeddingImage
          src={artwork.templeHillsFinale}
          alt="Golden South Indian temple gopuram surrounded by terracotta sacred hills"
          fallbackTitle={`${couple.brideFull} & ${couple.groomFull}`}
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8E8] via-[#FFF8E8]/50 to-transparent" />
      </div>

      <GoldParticles count={20} tone="gold" />

      {/* Blessings Card */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 pt-10 sm:pt-14 pb-48 sm:pb-60 max-w-xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#FFF8E8]/90 backdrop-blur-sm border-2 border-[#D6A64B] rounded-2xl px-6 py-6 sm:px-9 sm:py-7 text-center shadow-[0_18px_50px_rgba(101,12,24,0.18)]"
        >
          <p className="font-display text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#8C1423]">
            {isTelugu ? 'శుభం భవతు' : 'Shubham Bhavatu'}
          </p>

          <p className="mt-3 font-serif-body text-base sm:text-xl text-[#4A0812] leading-relaxed">
            {closingBlessing}
          </p>

          <div className="my-4 flex items-center justify-center gap-3">
            <span className="font-display text-xl sm:text-3xl font-semibold tracking-wider text-[#650C18]">
              {couple.brideFull}
            </span>
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#8C1423] fill-[#8C1423]" aria-label="and" />
            <span className="font-display text-xl sm:text-3xl font-semibold tracking-wider text-[#650C18]">
              {couple.groomFull}
            </span>
          </div>

          <p className="font-script text-2xl sm:text-3xl text-[#8F621B]">
            {isTelugu ? 'ప్రేమతో మరియు గౌరవంతో, మా కుటుంబాలు' : 'With love and regards, Our Families'}
          </p>

          {/* Action buttons: "See Love Memories🫶" + "👀" */}
          <div className="mt-6 pt-5 border-t border-[#D6A64B]/40 flex items-center justify-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={onOpenMemories}
              aria-label="See Love Memories🫶"
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#650C18] via-[#8C1423] to-[#650C18] text-[#FFF8E8] border-2 border-[#D6A64B] font-display text-sm sm:text-base font-semibold tracking-wide shadow-[0_10px_28px_rgba(101,12,24,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span className="gold-shimmer-text font-bold">
                {isTelugu ? 'మధుర జ్ఞాపకాలు చూడండి🫶' : 'See Love Memories🫶'}
              </span>
            </button>

            {/* 👀 Button */}
            <button
              type="button"
              onClick={onOpenSpecial}
              aria-label="Open special portraits"
              title="Sneak peek portraits 👀"
              className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#2A1D20] via-[#4A0812] to-[#2A1D20] text-[#FFF8E8] border-2 border-[#D6A64B] shadow-[0_10px_28px_rgba(101,12,24,0.35)] hover:scale-110 active:scale-95 hover:border-[#F2D27A] transition-all duration-300 cursor-pointer text-xl shrink-0"
            >
              <span className="group-hover:scale-125 transition-transform inline-block">👀</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Made by Urs Uday at the bottom left corner */}
      <div className="absolute bottom-3 left-4 z-30 pointer-events-none select-none">
        <p className="font-serif-body text-[11px] sm:text-xs tracking-wider text-[#650C18] bg-[#FFF8E8]/85 px-3 py-1 rounded-full border border-[#D6A64B]/60 shadow-xs backdrop-blur-sm">
          {isTelugu ? 'రూపకల్పన: ఉదయ్' : 'made by urs uday'}
        </p>
      </div>
    </section>
  );
};
