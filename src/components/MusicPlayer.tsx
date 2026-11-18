import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause wedding instrumental music' : 'Play wedding instrumental music'}
      aria-pressed={isPlaying}
      className={`p-2.5 rounded-full text-xs font-display tracking-wider uppercase transition-all duration-200 border shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A64B] shrink-0 ${
        isPlaying
          ? 'bg-[#650C18] text-[#FFF8E8] border-[#D6A64B] hover:bg-[#8C1423]'
          : 'bg-[#1D1819]/85 text-[#FFF8E8] border-[#D6A64B]/70 hover:bg-[#650C18]'
      }`}
    >
      {isPlaying ? <Volume2 className="w-4 h-4 text-[#F2D27A]" /> : <VolumeX className="w-4 h-4 text-[#D6A64B]" />}
    </button>
  );
};
