import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryPhoto } from '../data/weddingData';
import { ResilientWeddingImage } from './TempleOrnaments';

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photos,
  activeIndex,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.stopPropagation();
        onSelect((activeIndex - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        e.stopPropagation();
        onSelect((activeIndex + 1) % photos.length);
      }
    };
    window.addEventListener('keydown', handleKey, true);
    return () => window.removeEventListener('keydown', handleKey, true);
  }, [activeIndex, onClose, onSelect, photos.length]);

  if (activeIndex === null || !photos[activeIndex]) return null;
  const current = photos[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery photo: ${current.caption}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A050A]/92 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FFF8E8] border-2 border-[#D6A64B] p-3 sm:p-5 rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="font-display text-sm sm:text-base tracking-wider uppercase text-[#650C18]">
            {current.caption}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="p-2 rounded-full bg-[#650C18] text-[#FFF8E8] hover:bg-[#8C1423] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-[#D6A64B]/70 bg-[#FFF1D1] max-h-[65vh] flex items-center justify-center">
          <ResilientWeddingImage
            src={current.src}
            alt={current.alt}
            fallbackTitle={current.caption}
            className="w-full max-h-[65vh] object-contain"
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onSelect((activeIndex - 1 + photos.length) % photos.length)}
            aria-label="Previous gallery photo"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#650C18] text-[#FFF8E8] text-xs font-display tracking-wider uppercase hover:bg-[#8C1423] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <span className="text-sm font-serif-body text-[#650C18] tabular-nums">
            {activeIndex + 1} / {photos.length}
          </span>

          <button
            type="button"
            onClick={() => onSelect((activeIndex + 1) % photos.length)}
            aria-label="Next gallery photo"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#650C18] text-[#FFF8E8] text-xs font-display tracking-wider uppercase hover:bg-[#8C1423] transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
