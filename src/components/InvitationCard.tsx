import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import {
  GoldParticles,
  MarigoldToranGarland,
  SacredKalashEmblem,
  TemplePillarSide,
} from './TempleOrnaments';

export const InvitationCard: React.FC = () => {
  const { couple, sacredInvocation, invitationLead, invitationMessage } = weddingData;

  return (
    <section
      id="sacred-invite"
      aria-label="Sacred Wedding Invitation"
      className="relative w-full overflow-hidden flex flex-col bg-[#FFF8E8] text-[#4A0812]"
    >
      <GoldParticles count={14} tone="gold" />

      {/* Top Hanging Marigold & Jasmine Toran Garlands matching 00:04 - 00:06 */}
      <div className="relative z-20 w-full shrink-0 -mt-1">
        <MarigoldToranGarland />
      </div>

      {/* Main Continuous Row: Left Temple Pillar | Cream-Gold Invitation Frame | Right Temple Pillar */}
      <div className="relative z-10 flex items-stretch justify-between px-2 sm:px-0 py-10 sm:py-16">
        <div className="hidden sm:block self-stretch">
          <TemplePillarSide side="left" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center px-2 sm:px-6"
        >
          <div className="relative w-full max-w-xl bg-[#FFF8E8]/95 border-2 border-[#D6A64B] rounded-2xl px-5 py-8 sm:px-10 sm:py-12 text-center shadow-[0_14px_40px_rgba(184,134,53,0.16)]">
            {/* Inner Gold Hairline Frame */}
            <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#D6A64B]/55" />

            <div className="relative z-10 flex flex-col items-center">
              <SacredKalashEmblem className="w-12 h-12 sm:w-14 sm:h-14 mb-2" />

              <p className="font-display text-xs sm:text-sm tracking-[0.26em] text-[#8F621B] font-semibold">
                {sacredInvocation}
              </p>

              <p className="mt-3 font-serif-body text-[15px] sm:text-lg italic text-[#650C18]/85 max-w-md">
                {invitationLead}
              </p>

              <h2 className="mt-1 font-script text-5xl sm:text-6xl gold-shimmer-text leading-tight">
                Invite
              </h2>

              <p className="mt-2 font-serif-body text-[15px] sm:text-lg text-[#4A0812] leading-relaxed max-w-md">
                {invitationMessage}
              </p>

              {/* Ornamental gold divider */}
              <div className="my-4 flex items-center gap-3 w-48">
                <span className="h-px flex-1 bg-[#D6A64B]" />
                <span className="w-2.5 h-2.5 rotate-45 bg-[#8C1423] border border-[#D6A64B]" />
                <span className="h-px flex-1 bg-[#D6A64B]" />
              </div>

              <div className="flex flex-col items-center">
                <p className="font-display text-4xl sm:text-5xl font-semibold tracking-[0.18em] gold-shimmer-text">
                  {couple.groomShort}
                </p>

                {/* Love / Heart Shape with "weds" inside matching user request */}
                <div className="my-2 sm:my-3 relative flex items-center justify-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full drop-shadow-[0_6px_16px_rgba(101,12,24,0.4)]"
                    >
                      <defs>
                        <linearGradient id="wedsHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8C1423" />
                          <stop offset="50%" stopColor="#650C18" />
                          <stop offset="100%" stopColor="#4A0812" />
                        </linearGradient>
                        <linearGradient id="wedsHeartStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F2D27A" />
                          <stop offset="50%" stopColor="#E7C271" />
                          <stop offset="100%" stopColor="#B88635" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 50 20 C 56 8, 68 2, 80 2 C 93 2, 100 12, 100 28 C 100 50, 76 72, 50 96 C 24 72, 0 50, 0 28 C 0 12, 7 2, 20 2 C 32 2, 44 8, 50 20 Z"
                        fill="url(#wedsHeartGrad)"
                        stroke="url(#wedsHeartStroke)"
                        strokeWidth="3.2"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center -translate-y-1 font-script text-2xl sm:text-3xl text-[#F2D27A] drop-shadow-md font-semibold tracking-wider">
                      weds
                    </span>
                  </div>
                </div>

                <p className="font-display text-4xl sm:text-5xl font-semibold tracking-[0.18em] gold-shimmer-text">
                  {couple.brideShort}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="hidden sm:block self-stretch">
          <TemplePillarSide side="right" />
        </div>
      </div>
    </section>
  );
};
