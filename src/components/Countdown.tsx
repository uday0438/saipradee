import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { calculateCountdown, padTwoDigits } from '../utils/weddingUtils';

interface CountdownProps {
  targetIso: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetIso }) => {
  const { isTelugu } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(() => calculateCountdown(targetIso));

  // High-precision live update: polls Date.now() every 250ms so second ticks are instantaneous
  useEffect(() => {
    setTimeLeft(calculateCountdown(targetIso));
    const timer = window.setInterval(() => {
      setTimeLeft(calculateCountdown(targetIso));
    }, 250);
    return () => window.clearInterval(timer);
  }, [targetIso]);

  const units = [
    { label: isTelugu ? 'రోజులు' : 'Days', value: padTwoDigits(timeLeft.days) },
    { label: isTelugu ? 'గంటలు' : 'Hours', value: padTwoDigits(timeLeft.hours) },
    { label: isTelugu ? 'నిమిషాలు' : 'Minutes', value: padTwoDigits(timeLeft.minutes) },
    { label: isTelugu ? 'సెకన్లు' : 'Seconds', value: padTwoDigits(timeLeft.seconds) },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Real-time pulsing badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#650C18]/10 border border-[#D6A64B]/60 mb-4 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C1423] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C1423]" />
        </span>
        <span className="font-display text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#650C18] font-semibold">
          {isTelugu ? 'లైవ్ కౌంట్‌డౌన్' : 'Real-Time Live Countdown'}
        </span>
      </div>

      {/* 4 Counter Units */}
      <div
        aria-label="Wedding Countdown in Real Time"
        className="grid grid-cols-4 gap-2.5 sm:gap-5 max-w-lg w-full mx-auto"
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center bg-[#FFF8E8] border-2 border-[#D6A64B] rounded-2xl py-3.5 px-2 sm:py-5 sm:px-4 shadow-[0_8px_25px_rgba(101,12,24,0.12)] relative overflow-hidden"
          >
            {/* Top gold shimmer bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F2D27A] via-[#D6A64B] to-[#8F621B]" />

            <div className="h-8 sm:h-12 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={unit.value}
                  initial={{ y: -10, opacity: 0.6 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="font-display text-2xl sm:text-4xl font-bold text-[#650C18] tabular-nums leading-none tracking-tight"
                >
                  {unit.value}
                </motion.span>
              </AnimatePresence>
            </div>

            <span className="mt-1 text-[10px] sm:text-xs font-serif-body uppercase tracking-[0.2em] text-[#7A4B12] font-semibold">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
