import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { Countdown } from './Countdown';
import { GoldParticles, ResilientWeddingImage } from './TempleOrnaments';

interface CountdownGallerySceneProps {
  onOpenGallery: (index: number) => void;
}

export const CountdownGalleryScene: React.FC<CountdownGallerySceneProps> = () => {
  const { weddingTargetIso } = weddingData;

  return (
    <section
      id="countdown-gallery"
      aria-label="Wedding Countdown"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-[#FFF8E8] px-4 py-16 sm:py-24 text-center"
    >
      <GoldParticles count={12} tone="gold" />

      {/* Embossed subtle lotus corner line-art */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute top-6 left-2 w-28 sm:w-44 text-[#D6A64B]/25"
      >
        <circle cx="40" cy="40" r="65" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M20 90 Q60 20 120 40 Q80 90 20 90 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute bottom-6 right-2 w-28 sm:w-44 text-[#D6A64B]/25"
      >
        <circle cx="160" cy="160" r="65" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M180 110 Q140 180 80 160 Q120 110 180 110 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-script text-4xl sm:text-5xl text-[#8C1423] mb-5"
        >
          Counting the Days
        </motion.h2>

        <Countdown targetIso={weddingTargetIso} />
      </div>
    </section>
  );
};
