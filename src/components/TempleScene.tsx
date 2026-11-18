import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  GoldParticles,
  LineArtGopuram,
  ResilientWeddingImage,
  TraditionalPeacock,
} from './TempleOrnaments';

export const TempleCoupleScene: React.FC = () => {
  const { data, isTelugu } = useLanguage();
  const { artwork, couple } = data;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.02, 1.06]);
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -30]);

  return (
    <section
      id="temple-couple"
      ref={sectionRef}
      aria-label="Sacred Varmala Mandapam"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-[#FFF8E8] px-4 py-16 sm:py-24"
    >
      <GoldParticles count={16} tone="gold" />

      {/* Decorative Cream Clouds at top corners matching 00:16 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-6 w-32 sm:w-48 h-12 rounded-full bg-[#F5E1B0]/65 blur-md"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-8 w-36 sm:w-52 h-14 rounded-full bg-[#F5E1B0]/65 blur-md"
      />

      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="relative z-20 w-full max-w-4xl flex flex-col items-center"
      >
        <div className="flex flex-col items-center mb-4">
          <p className="font-serif-body text-4xl sm:text-5xl font-bold text-[#8C1423] tracking-wide drop-shadow-sm">
            కళ్యాణ వైభోగమే
          </p>
          <p className="font-script text-2xl sm:text-3xl text-[#B88635] mt-1">
            Kalyana Vaibhogame
          </p>
        </div>

        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-[3px] border-[#D6A64B] shadow-[0_18px_50px_rgba(101,12,24,0.18)] bg-[#FFF1D1]">
          <ResilientWeddingImage
            src={artwork.coupleVarmala}
            alt="Traditional South Indian bride and groom exchanging jasmine and rose garlands before a golden temple gopuram"
            fallbackTitle={`${couple.brideFull} & ${couple.groomFull}`}
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#FFF8E8]/60" />
        </div>

        <p className="mt-4 font-display text-xs sm:text-sm tracking-[0.22em] uppercase text-[#650C18] text-center">
          {isTelugu ? 'రెండు హృదయాలు · ఒకే కల్యాణ మాల · నిత్య దీవెనలు' : 'Two Souls · One Sacred Garland · Eternal Blessings'}
        </p>
      </motion.div>
    </section>
  );
};

export const GrandTempleShowcaseScene: React.FC = () => {
  const { data } = useLanguage();
  const { templeBannerTitle, templeBannerSubtitle } = data;

  return (
    <section
      id="grand-temple"
      aria-label="Grand Temple Architecture"
      className="relative w-full min-h-[65vh] sm:min-h-[80vh] overflow-hidden flex items-stretch justify-between bg-[#1D1819]"
    >
      {/* Background: Real Gandi Anjaneya Swamy Temple & Red Cliffs */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/gandi_temple_bg.jpg"
          alt="Gandi Anjaneya Swamy Temple against sacred red cliffs"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle royal vignettes to ensure elegant contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1819]/85 via-black/25 to-[#FFF8E8]/35" />
      </div>

      {/* Left Deep Red Vertical Ornamental Side Panel matching video */}
      <div
        aria-hidden="true"
        className="relative z-10 w-7 sm:w-16 md:w-24 shrink-0 bg-gradient-to-b from-[#650C18]/90 via-[#8C1423]/90 to-[#650C18]/90 border-r-2 border-[#D6A64B] flex flex-col items-center justify-between py-14 shadow-xl"
      >
        <div className="w-2.5 h-2.5 rotate-45 bg-[#D6A64B]" />
        <div className="w-px flex-1 my-4 bg-[#D6A64B]/45" />
        <div className="w-3 h-3 rotate-45 border border-[#D6A64B]" />
        <div className="w-px flex-1 my-4 bg-[#D6A64B]/45" />
        <div className="w-2.5 h-2.5 rotate-45 bg-[#D6A64B]" />
      </div>

      {/* Central Content Area over Temple Photo */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end px-3 sm:px-8 pt-20 pb-10 sm:pb-14 overflow-hidden">
        <GoldParticles count={16} tone="gold" />

        {/* Bottom Peacocks flanking the Maroon & Gold Temple Banner matching video 00:26-00:27 */}
        <div className="relative z-20 w-full max-w-4xl flex items-end justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <TraditionalPeacock className="w-14 h-16 sm:w-24 sm:h-28 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" />
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1 mx-2 sm:mx-6 mb-2 bg-gradient-to-r from-[#650C18]/95 via-[#8C1423]/95 to-[#650C18]/95 border-2 border-[#D6A64B] rounded-xl px-4 py-3.5 sm:py-5 text-center shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm"
          >
            <h2 className="font-display text-base sm:text-2xl md:text-3xl font-semibold tracking-[0.18em] text-[#F2D27A] uppercase drop-shadow-md">
              {templeBannerTitle}
            </h2>
            <p className="mt-1 font-serif-body text-xs sm:text-sm tracking-[0.2em] uppercase text-[#FFF8E8] drop-shadow-sm font-medium">
              {templeBannerSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <TraditionalPeacock flip className="w-14 h-16 sm:w-24 sm:h-28 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" />
          </motion.div>
        </div>
      </div>

      {/* Right Deep Red Vertical Ornamental Side Panel */}
      <div
        aria-hidden="true"
        className="relative z-10 w-7 sm:w-16 md:w-24 shrink-0 bg-gradient-to-b from-[#650C18]/90 via-[#8C1423]/90 to-[#650C18]/90 border-l-2 border-[#D6A64B] flex flex-col items-center justify-between py-14 shadow-xl"
      >
        <div className="w-2.5 h-2.5 rotate-45 bg-[#D6A64B]" />
        <div className="w-px flex-1 my-4 bg-[#D6A64B]/45" />
        <div className="w-3 h-3 rotate-45 border border-[#D6A64B]" />
        <div className="w-px flex-1 my-4 bg-[#D6A64B]/45" />
        <div className="w-2.5 h-2.5 rotate-45 bg-[#D6A64B]" />
      </div>
    </section>
  );
};
