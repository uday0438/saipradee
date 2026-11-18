import React from 'react';
import { motion } from 'motion/react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Language selection"
      className="fixed top-4 right-4 z-50 flex items-center bg-[#1D1819]/92 backdrop-blur-md border border-[#D6A64B] rounded-full p-1 shadow-[0_8px_25px_rgba(0,0,0,0.5)] select-none"
    >
      <div className="flex items-center gap-1">
        <div className="pl-2 pr-1 text-[#F2D27A] hidden xs:block sm:block">
          <Languages className="w-4 h-4 text-[#F2D27A]" />
        </div>

        {/* English Button */}
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`relative px-3 py-1.5 rounded-full text-xs font-display tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
            language === 'en'
              ? 'bg-gradient-to-r from-[#650C18] to-[#8C1423] text-[#FFF8E8] shadow-md border border-[#D6A64B]/80'
              : 'text-[#FFF8E8]/75 hover:text-[#FFF8E8]'
          }`}
        >
          {language === 'en' && (
            <motion.div
              layoutId="langActive"
              className="absolute inset-0 rounded-full border border-[#D6A64B]/60"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">English</span>
        </button>

        {/* Telugu Button */}
        <button
          type="button"
          onClick={() => setLanguage('te')}
          aria-pressed={language === 'te'}
          className={`relative px-3 py-1.5 rounded-full text-xs font-display tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
            language === 'te'
              ? 'bg-gradient-to-r from-[#650C18] to-[#8C1423] text-[#FFF8E8] shadow-md border border-[#D6A64B]/80'
              : 'text-[#FFF8E8]/75 hover:text-[#FFF8E8]'
          }`}
        >
          {language === 'te' && (
            <motion.div
              layoutId="langActive"
              className="absolute inset-0 rounded-full border border-[#D6A64B]/60"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 text-[13px]">తెలుగు</span>
        </button>
      </div>
    </div>
  );
};
