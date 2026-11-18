import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface SpecialPhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SPECIAL_PHOTOS = [
  {
    id: 'vivaha-ceremony',
    title: 'Sacred Vivaha Ceremony',
    subtitle: 'Pradeep & Sai Sree at the Sacred Fire',
    src: '/special/special_01.jpg',
    alt: 'Pradeep in ivory sherwani and turban with Sai Sree in red bridal lehenga and floral garlands at the wedding mandap',
  },
  {
    id: 'reception-elegance',
    title: 'Grand Reception Portrait',
    subtitle: 'Pradeep & Sai Sree in Royal Attire',
    src: '/special/special_02.jpg',
    alt: 'Pradeep in black three-piece suit with Sai Sree in pink silk saree on ornate golden sofa with rose garlands',
  },
];

export const SpecialPhotosModal: React.FC<SpecialPhotosModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation (Arrow keys + Esc)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % SPECIAL_PHOTOS.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + SPECIAL_PHOTOS.length) % SPECIAL_PHOTOS.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPhoto = SPECIAL_PHOTOS[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Special Wedding Photographs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 select-none overflow-hidden"
        onClick={onClose}
      >
        {/* Soft Ambient Glow of current image */}
        <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt=""
            className="w-full h-full object-cover blur-3xl scale-110"
          />
        </div>

        {/* Modal Window Container */}
        <div
          className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#FFF8E8] border-2 border-[#D6A64B] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#2A050A] via-[#4A0812] to-[#2A050A] text-[#FFF8E8] border-b border-[#D6A64B]/60">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F2D27A] animate-pulse" />
              <div>
                <h3 className="font-display text-sm sm:text-base font-semibold tracking-wider text-[#F2D27A]">
                  {currentPhoto.title}
                </h3>
                <p className="font-serif-body text-[11px] sm:text-xs text-[#FFF8E8]/80">
                  {currentPhoto.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-display text-xs tracking-widest text-[#F2D27A] bg-black/30 px-2.5 py-1 rounded-full border border-[#D6A64B]/40">
                {currentIndex + 1} / {SPECIAL_PHOTOS.length}
              </span>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close photo view"
                className="p-1.5 sm:p-2 rounded-full bg-white/10 text-[#FFF8E8] hover:bg-[#8C1423] border border-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Photo Frame */}
          <div className="relative flex-1 min-h-[50vh] max-h-[68vh] sm:max-h-[72vh] bg-[#12080A] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto.src}
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="max-h-[64vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            </AnimatePresence>

            {/* Previous Arrow */}
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + SPECIAL_PHOTOS.length) % SPECIAL_PHOTOS.length)}
              aria-label="Previous photograph"
              className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 text-[#FFF8E8] border border-[#D6A64B]/70 hover:bg-[#650C18] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#F2D27A]" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % SPECIAL_PHOTOS.length)}
              aria-label="Next photograph"
              className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 text-[#FFF8E8] border border-[#D6A64B]/70 hover:bg-[#650C18] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#F2D27A]" />
            </button>
          </div>

          {/* Bottom Tabs / Selector Bar */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 bg-[#FFF8E8] border-t border-[#D6A64B]/40">
            {SPECIAL_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-display tracking-wider transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'bg-[#650C18] text-[#FFF8E8] border border-[#D6A64B] shadow-sm font-semibold'
                    : 'bg-[#FFF1D1] text-[#650C18] border border-[#D6A64B]/40 hover:bg-[#D6A64B]/20'
                }`}
              >
                <span>{idx === 0 ? '💍 Wedding' : '👑 Reception'}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
