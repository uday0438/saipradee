import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldParticles, ResilientWeddingImage } from './TempleOrnaments';

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const { couple, artwork } = weddingData;
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end start'],
  });

  // Matches 00:00 -> 00:03: Temple rises smoothly from bottom peek to full monumental view anchored at bottom-0
  const templeY = useTransform(scrollYProgress, [0, 0.42, 1], ['68%', '0%', '0%']);
  const templeScale = useTransform(scrollYProgress, [0, 0.42, 1], [0.92, 1, 1.04]);
  const namesOpacity = useTransform(scrollYProgress, [0, 0.22, 0.42], [1, 0.65, 0]);
  const namesY = useTransform(scrollYProgress, [0, 0.42], [0, -60]);

  return (
    <section
      id="intro"
      ref={stageRef}
      aria-label="Wedding Invitation Opening and Temple Reveal"
      className="relative w-full h-[175vh] bg-gradient-to-b from-[#2B6EC2] via-[#4C91DE] to-[#7BB7F2] text-white"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Drifting White Clouds on left and right matching video 00:00 */}
        <motion.div
          aria-hidden="true"
          initial={{ x: -30, opacity: 0.7 }}
          animate={{ x: 0, opacity: 0.92 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="pointer-events-none absolute -left-16 top-16 sm:top-20 w-56 sm:w-80 h-28 rounded-full bg-white/75 blur-xl"
        />
        <motion.div
          aria-hidden="true"
          initial={{ x: 30, opacity: 0.7 }}
          animate={{ x: 0, opacity: 0.92 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="pointer-events-none absolute -right-16 top-24 sm:top-28 w-64 sm:w-96 h-32 rounded-full bg-white/75 blur-xl"
        />

        <GoldParticles count={16} tone="light" />

        {/* Center Names Lockup matching 00:00 */}
        <motion.div
          style={{ opacity: namesOpacity, y: namesY }}
          className="relative z-20 flex flex-col items-center text-center px-6 -mt-14 sm:-mt-20 max-w-2xl"
        >
          <p className="font-display text-xs sm:text-sm tracking-[0.34em] uppercase text-[#FFF8E8]/90 mb-4">
            A Wedding Invitation
          </p>

          <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-[0.16em] text-white drop-shadow-[0_3px_14px_rgba(8,50,108,0.35)]">
            {couple.groomShort}
          </h1>

          <span className="my-2 font-display text-xs sm:text-sm tracking-[0.36em] uppercase text-[#FFF1D1]">
            WEDS
          </span>

          <h2 className="font-display text-5xl sm:text-7xl font-semibold tracking-[0.16em] text-white drop-shadow-[0_3px_14px_rgba(8,50,108,0.35)]">
            {couple.brideShort}
          </h2>

          <p className="mt-4 font-display text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#FFF8E8]/90">
            Are Getting Married · With the blessings of our families
          </p>
        </motion.div>

        {/* Continuous Parallax Temple Gopuram rising seamlessly from bottom peek to full screen (00:00 -> 00:03) */}
        <motion.div
          style={{ y: templeY, scale: templeScale }}
          className="pointer-events-none absolute bottom-0 inset-x-0 z-10 flex justify-center origin-bottom"
        >
          <div className="relative w-full max-w-6xl h-[86vh] sm:h-[92vh] [mask-image:radial-gradient(ellipse_68%_88%_at_50%_78%,black_48%,transparent_94%)]">
            <ResilientWeddingImage
              src={artwork.templeGopuram}
              alt="Grand colorful South Indian temple gopuram surrounded by lush green trees and royal blue sky"
              fallbackTitle="South Indian Temple Gopuram"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
