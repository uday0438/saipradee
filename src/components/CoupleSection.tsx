import React from 'react';
import { motion } from 'motion/react';
import { Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoldParticles, ResilientWeddingImage } from './TempleOrnaments';

interface CoupleSectionProps {
  onOpenPortrait: () => void;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ onOpenPortrait }) => {
  const { data, isTelugu } = useLanguage();
  const { couple } = data;

  return (
    <section
      id="couple"
      aria-label="Couple Introduction"
      className="relative w-full overflow-hidden flex flex-col bg-[#FFF8E8]"
    >
      <GoldParticles count={12} tone="gold" />

      {/* Deep Maroon Scalloped Header */}
      <div className="relative z-10 shrink-0 bg-gradient-to-b from-[#650C18] to-[#8C1423] py-8 sm:py-10 px-4 text-center border-y-4 border-[#D6A64B] shadow-lg">
        <p className="font-display text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#FFF1D1]/85">
          {isTelugu ? 'రెండు కుటుంబాలు · ఒకే పవిత్ర బంధం' : 'Two Families · One Sacred Bond'}
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-[#F2D27A] mt-0.5 drop-shadow">
          {isTelugu ? 'వధూవరుల పరిచయం' : 'Meet the Bride & Groom'}
        </h2>
      </div>

      {/* Hidden SVG Definitions for Heart ClipPath */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="couple-heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0.2 C 0.56 0.08, 0.68 0.02, 0.8 0.02 C 0.93 0.02, 1.0 0.12, 1.0 0.28 C 1.0 0.50, 0.76 0.72, 0.5 0.96 C 0.24 0.72, 0.0 0.50, 0.0 0.28 C 0.0 0.12, 0.07 0.02, 0.2 0.02 C 0.32 0.02, 0.44 0.08, 0.5 0.2 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Main Content Area: Heart-Shaped Couple Photograph + Bride & Groom Family Details */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-8 py-12 sm:py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Heart-Shaped Love Frame Couple Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex justify-center"
          >
            <button
              type="button"
              onClick={onOpenPortrait}
              aria-label="Enlarge bride and groom wedding portrait"
              className="group relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#650C18]"
            >
              {/* Outer Golden Heart Border & Glow */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_16px_32px_rgba(101,12,24,0.32)]"
              >
                <defs>
                  <linearGradient id="goldHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F2D27A" />
                    <stop offset="50%" stopColor="#D6A64B" />
                    <stop offset="100%" stopColor="#8F621B" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 20 C 56 8, 68 2, 80 2 C 93 2, 100 12, 100 28 C 100 50, 76 72, 50 96 C 24 72, 0 50, 0 28 C 0 12, 7 2, 20 2 C 32 2, 44 8, 50 20 Z"
                  fill="#FFF1D1"
                  stroke="url(#goldHeartGrad)"
                  strokeWidth="3.2"
                />
              </svg>

              {/* Heart-Clipped Photo */}
              <div
                style={{ clipPath: 'url(#couple-heart-clip)' }}
                className="w-[93%] h-[93%] overflow-hidden"
              >
                <img
                  src={couple.portraitImage}
                  alt={couple.portraitAlt}
                  className="w-full h-full object-cover object-[center_32%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Expand Badge on Heart Tip */}
              <span className="absolute bottom-4 right-8 p-1.5 rounded-full bg-[#650C18]/85 text-[#FFF8E8] shadow-md opacity-85 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </button>
          </motion.div>

          {/* Right: Bride & Groom Family Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="md:col-span-7 flex flex-col gap-3.5 sm:gap-4 text-center md:text-left"
          >
            <div className="bg-[#FFF1D1]/70 border border-[#D6A64B] rounded-xl p-4 sm:p-5 flex items-center gap-4 text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#D6A64B] shadow-md bg-[#FFF8E8]">
                <img
                  src={couple.brideFace}
                  alt={couple.brideFull}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-display text-[11px] tracking-[0.24em] uppercase text-[#8C1423]">
                  {isTelugu ? 'వధువు' : 'The Bride'}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-wider text-[#650C18] mt-0.5">
                  {couple.brideFull}
                </h3>
                <p className="mt-1 font-serif-body text-sm sm:text-base text-[#4A0812]">
                  {isTelugu ? 'కుమార్తె: ' : 'D/o '}
                  <span className="font-semibold">{couple.brideParents}</span>
                </p>
              </div>
            </div>

            <div className="bg-[#FFF1D1]/70 border border-[#D6A64B] rounded-xl p-4 sm:p-5 flex items-center gap-4 text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#D6A64B] shadow-md bg-[#FFF8E8]">
                <img
                  src={couple.groomFace}
                  alt={couple.groomFull}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-display text-[11px] tracking-[0.24em] uppercase text-[#087BC1]">
                  {isTelugu ? 'వరుడు' : 'The Groom'}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-wider text-[#650C18] mt-0.5">
                  {couple.groomFull}
                </h3>
                <p className="mt-1 font-serif-body text-sm sm:text-base text-[#4A0812]">
                  {isTelugu ? 'కుమారుడు: ' : 'Son of '}
                  <span className="font-semibold">{couple.groomParents}</span>
                </p>
              </div>
            </div>

            <p className="font-serif-body italic text-base text-[#650C18]/90 leading-relaxed px-1">
              “{couple.story}”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
