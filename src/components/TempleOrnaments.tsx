import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const GoldParticles: React.FC<{ count?: number; tone?: 'light' | 'gold' }> = ({
  count = 18,
  tone = 'gold',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const nodes = Array.from(container.children) as HTMLElement[];
    const ctx = gsap.context(() => {
      nodes.forEach((node, idx) => {
        const duration = 5 + (idx % 5) * 1.4;
        const delay = (idx % 7) * 0.45;
        gsap.fromTo(
          node,
          {
            y: 16,
            opacity: 0.18,
            scale: 0.75,
          },
          {
            y: -36,
            opacity: 0.8,
            scale: 1.15,
            duration,
            delay,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [count]);

  const fillClass = tone === 'light' ? 'bg-[#FFF8E8]' : 'bg-[#D6A64B]';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-10"
    >
      {Array.from({ length: count }).map((_, idx) => {
        const left = `${(idx * 37 + 11) % 94 + 3}%`;
        const top = `${(idx * 53 + 9) % 86 + 6}%`;
        const size = idx % 3 === 0 ? 'w-2 h-2' : idx % 2 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1';
        return (
          <span
            key={idx}
            style={{ left, top }}
            className={`absolute rounded-full ${size} ${fillClass} shadow-[0_0_8px_rgba(214,166,75,0.65)]`}
          />
        );
      })}
    </div>
  );
};

export const SacredKalashEmblem: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
    <circle cx="40" cy="40" r="37" stroke="#D6A64B" strokeWidth="1.2" strokeDasharray="3 3" />
    {/* Mango leaves */}
    <path d="M40 16 C35 23, 27 25, 22 22 C28 29, 34 31, 40 28 Z" fill="#3D7E3A" stroke="#D6A64B" strokeWidth="0.9" />
    <path d="M40 16 C45 23, 53 25, 58 22 C52 29, 46 31, 40 28 Z" fill="#3D7E3A" stroke="#D6A64B" strokeWidth="0.9" />
    <path d="M40 12 C37 19, 37 25, 40 29 C43 25, 43 19, 40 12 Z" fill="#4D9448" stroke="#D6A64B" strokeWidth="0.9" />
    {/* Coconut */}
    <circle cx="40" cy="29" r="7" fill="#8C4E22" stroke="#D6A64B" strokeWidth="1.1" />
    {/* Brass Kalash pot */}
    <path
      d="M31 35 H49 L46 41 C54 45, 55 58, 48 64 H32 C25 58, 26 45, 34 41 Z"
      fill="url(#kalashGold)"
      stroke="#8F621B"
      strokeWidth="1.2"
    />
    {/* Swastik / auspicious tilak dot */}
    <circle cx="40" cy="52" r="2.2" fill="#8C1423" />
    <defs>
      <linearGradient id="kalashGold" x1="28" y1="35" x2="52" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F2D27A" />
        <stop offset="0.5" stopColor="#D6A64B" />
        <stop offset="1" stopColor="#A67422" />
      </linearGradient>
    </defs>
  </svg>
);

export const MarigoldToranGarland: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none w-full overflow-hidden select-none">
    <svg viewBox="0 0 1200 108" preserveAspectRatio="none" className="w-full h-14 sm:h-20 md:h-24 animate-sway-gentle">
      {/* Five scalloped marigold & jasmine garlands */}
      {[0, 240, 480, 720, 960].map((x, idx) => (
        <g key={idx} transform={`translate(${x}, 0)`}>
          <path
            d="M0 0 Q120 74 240 0"
            fill="none"
            stroke="#2E6F32"
            strokeWidth="5"
          />
          {[22, 46, 72, 98, 120, 142, 168, 194, 218].map((px, j) => {
            const t = px / 240;
            const py = 4 * t * (1 - t) * 37;
            const isJasmine = j % 3 === 1;
            return (
              <g key={j}>
                <circle
                  cx={px}
                  cy={py + 4}
                  r={isJasmine ? 7 : 10}
                  fill={isJasmine ? '#FFF8E8' : j % 2 === 0 ? '#E88B14' : '#F4B41A'}
                  stroke="#B88635"
                  strokeWidth="1"
                />
                {j === 4 && (
                  <g>
                    <line x1={px} y1={py + 12} x2={px} y2={py + 46} stroke="#FFF8E8" strokeWidth="3" strokeDasharray="4 3" />
                    <circle cx={px} cy={py + 52} r="7" fill="#8C1423" stroke="#D6A64B" strokeWidth="1.5" />
                  </g>
                )}
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  </div>
);

export const TemplePillarSide: React.FC<{ side: 'left' | 'right' }> = ({ side }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none hidden sm:flex flex-col justify-between h-full w-20 md:w-28 lg:w-36 shrink-0 select-none ${
      side === 'right' ? 'scale-x-[-1]' : ''
    }`}
  >
    <svg viewBox="0 0 140 800" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id="pillarStone" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#087BC1" />
          <stop offset="28%" stopColor="#3DA0DA" />
          <stop offset="55%" stopColor="#FFF1D1" />
          <stop offset="82%" stopColor="#E6B85C" />
          <stop offset="100%" stopColor="#B88635" />
        </linearGradient>
        <linearGradient id="pillarGold" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E9C878" />
          <stop offset="50%" stopColor="#D6A64B" />
          <stop offset="100%" stopColor="#9E6E1E" />
        </linearGradient>
      </defs>
      {/* Ornate vertical temple column */}
      <rect x="8" y="0" width="96" height="800" fill="url(#pillarStone)" stroke="#B88635" strokeWidth="2" />
      <rect x="18" y="20" width="76" height="760" fill="none" stroke="#8C1423" strokeWidth="1.5" opacity="0.6" />
      {/* Carved lotus capital */}
      <path d="M0 30 H122 L112 78 H10 Z" fill="url(#pillarGold)" stroke="#650C18" strokeWidth="1.5" />
      <path d="M12 78 Q56 105 100 78 Z" fill="#8C1423" stroke="#D6A64B" strokeWidth="1.2" />
      {/* Carved ornamental medallions */}
      {[180, 320].map((cy) => (
        <g key={cy}>
          <rect x="26" y={cy - 44} width="60" height="88" rx="30" fill="#FFF8E8" stroke="#D6A64B" strokeWidth="2" />
          <circle cx="56" cy={cy} r="18" fill="#8C1423" stroke="#D6A64B" strokeWidth="1.5" />
          <circle cx="56" cy={cy} r="8" fill="#D6A64B" />
        </g>
      ))}
      {/* Sculpted golden temple guardian arch figure */}
      <g transform="translate(22, 420)">
        <path d="M4 210 V64 Q34 10 64 64 V210 Z" fill="#650C18" stroke="#D6A64B" strokeWidth="2.5" />
        {/* Crown */}
        <polygon points="34,26 24,48 44,48" fill="#F2D27A" stroke="#8F621B" strokeWidth="1" />
        {/* Head & Halo */}
        <circle cx="34" cy="64" r="14" fill="#D6A64B" opacity="0.35" />
        <circle cx="34" cy="64" r="9" fill="#E8C06A" stroke="#8F621B" strokeWidth="1" />
        {/* Robed torso */}
        <path d="M22 76 L46 76 L50 132 L18 132 Z" fill="#D6A64B" stroke="#8F621B" strokeWidth="1" />
        <path d="M18 132 L50 132 L54 195 L14 195 Z" fill="#F2D27A" stroke="#8F621B" strokeWidth="1" />
        {/* Lotus pedestal */}
        <path d="M10 195 H58 L50 210 H18 Z" fill="#087BC1" stroke="#D6A64B" strokeWidth="1.2" />
      </g>
      {/* Plinth base */}
      <path d="M0 725 H122 V796 H0 Z" fill="url(#pillarGold)" stroke="#650C18" strokeWidth="1.5" />
    </svg>
  </div>
);

export const BananaLeafLotusCrown: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none w-full max-w-5xl mx-auto select-none px-3 sm:px-6">
    <svg viewBox="0 0 1000 112" preserveAspectRatio="xMidYMax meet" className="w-full h-16 sm:h-24 md:h-28">
      {/* Connecting marigold & jasmine garland swags */}
      <path d="M90 88 Q250 112 405 78" fill="none" stroke="#2E6F32" strokeWidth="4" />
      <path d="M595 78 Q750 112 910 88" fill="none" stroke="#2E6F32" strokeWidth="4" />
      {[140, 195, 250, 305, 360, 640, 695, 750, 805, 860].map((cx, idx) => (
        <circle
          key={cx}
          cx={cx}
          cy={94 - Math.abs(cx - 500) * 0.02 + (idx % 2 === 0 ? 4 : -2)}
          r={idx % 2 === 0 ? 7 : 5}
          fill={idx % 2 === 0 ? '#F4B41A' : '#FFF8E8'}
          stroke="#B88635"
          strokeWidth="1"
        />
      ))}

      {/* Left Banana Leaves & Kalash Lotus */}
      <g transform="translate(0, 4)">
        <path d="M18 100 Q38 24 128 12 Q94 58 34 100 Z" fill="#2F7D32" stroke="#D6A64B" strokeWidth="1.5" />
        <path d="M46 102 Q88 38 176 30 Q126 74 62 102 Z" fill="#43A047" stroke="#D6A64B" strokeWidth="1.5" />
        <path d="M68 64 H114 L108 74 C122 80, 122 102, 110 108 H72 C60 102, 60 80, 74 74 Z" fill="#D6A64B" stroke="#650C18" strokeWidth="1.5" />
        <path d="M91 34 C81 48, 79 60, 91 64 C103 60, 101 48, 91 34 Z" fill="#F06292" stroke="#8C1423" strokeWidth="1.1" />
        <path d="M91 64 C73 60, 62 48, 68 40 C77 44, 85 54, 91 64 Z" fill="#F48FB1" stroke="#8C1423" strokeWidth="1.1" />
        <path d="M91 64 C109 60, 120 48, 114 40 C105 44, 97 54, 91 64 Z" fill="#F48FB1" stroke="#8C1423" strokeWidth="1.1" />
      </g>

      {/* Center Temple Mandapam Arch Crown */}
      <g transform="translate(310, 0)">
        <path
          d="M15 108 C45 58, 118 22, 190 10 C262 22, 335 58, 365 108 Z"
          fill="#087BC1"
          stroke="#D6A64B"
          strokeWidth="3"
        />
        <path
          d="M52 108 C80 70, 134 40, 190 30 C246 40, 300 70, 328 108 Z"
          fill="#FFF8E8"
          stroke="#D6A64B"
          strokeWidth="2.5"
        />
        <circle cx="190" cy="12" r="10" fill="#D6A64B" stroke="#650C18" strokeWidth="1.5" />
        <circle cx="190" cy="70" r="22" fill="#8C1423" stroke="#D6A64B" strokeWidth="2" />
        <path d="M190 54 L199 70 L190 86 L181 70 Z" fill="#D6A64B" />
      </g>

      {/* Right Banana Leaves & Kalash Lotus */}
      <g transform="translate(1000, 4) scale(-1, 1)">
        <path d="M18 100 Q38 24 128 12 Q94 58 34 100 Z" fill="#2F7D32" stroke="#D6A64B" strokeWidth="1.5" />
        <path d="M46 102 Q88 38 176 30 Q126 74 62 102 Z" fill="#43A047" stroke="#D6A64B" strokeWidth="1.5" />
        <path d="M68 64 H114 L108 74 C122 80, 122 102, 110 108 H72 C60 102, 60 80, 74 74 Z" fill="#D6A64B" stroke="#650C18" strokeWidth="1.5" />
        <path d="M91 34 C81 48, 79 60, 91 64 C103 60, 101 48, 91 34 Z" fill="#F06292" stroke="#8C1423" strokeWidth="1.1" />
        <path d="M91 64 C73 60, 62 48, 68 40 C77 44, 85 54, 91 64 Z" fill="#F48FB1" stroke="#8C1423" strokeWidth="1.1" />
        <path d="M91 64 C109 60, 120 48, 114 40 C105 44, 97 54, 91 64 Z" fill="#F48FB1" stroke="#8C1423" strokeWidth="1.1" />
      </g>
    </svg>
  </div>
);

export const GoldenTempleSkyline: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 z-10 select-none overflow-hidden">
    <svg viewBox="0 0 1200 130" preserveAspectRatio="none" className="w-full h-20 sm:h-28 opacity-90">
      {/* Side Mandapam Walls */}
      <rect x="0" y="96" width="1200" height="34" fill="#B88635" opacity="0.35" />
      {/* Left Gopuram Silhouette */}
      <polygon points="110,130 135,58 175,58 200,130" fill="#D6A64B" opacity="0.4" />
      <rect x="140" y="42" width="30" height="16" rx="4" fill="#F2D27A" opacity="0.5" />
      {/* Center Temple Gopuram Silhouette */}
      <polygon points="520,130 562,28 638,28 680,130" fill="#D6A64B" opacity="0.45" />
      <rect x="572" y="12" width="56" height="18" rx="6" fill="#F2D27A" opacity="0.55" />
      {/* Right Gopuram Silhouette */}
      <polygon points="1000,130 1025,58 1065,58 1090,130" fill="#D6A64B" opacity="0.4" />
      <rect x="1030" y="42" width="30" height="16" rx="4" fill="#F2D27A" opacity="0.5" />
    </svg>
  </div>
);

export const LineArtGopuram: React.FC<{ className?: string }> = ({ className = 'w-64 h-auto' }) => (
  <svg viewBox="0 0 260 360" fill="none" className={className} aria-hidden="true">
    {/* Kalash finials on top */}
    {[86, 108, 130, 152, 174].map((x) => (
      <g key={x}>
        <line x1={x} y1="18" x2={x} y2="34" stroke="#9E6E1E" strokeWidth="2" />
        <circle cx={x} cy="26" r="4" fill="#D6A64B" stroke="#650C18" strokeWidth="1" />
      </g>
    ))}
    {/* Crown barrel vault (Shala shikhara) */}
    <path d="M68 58 Q130 22 192 58 L184 78 H76 Z" fill="#F5DF9E" stroke="#8F621B" strokeWidth="1.8" />
    <ellipse cx="130" cy="54" rx="14" ry="18" fill="#D6A64B" stroke="#650C18" strokeWidth="1.5" />
    {/* 7 Carved Dravidian tiers */}
    {[0, 1, 2, 3, 4, 5, 6].map((tier) => {
      const topY = 78 + tier * 34;
      const halfW = 54 + tier * 10;
      const left = 130 - halfW;
      const width = halfW * 2;
      return (
        <g key={tier}>
          <rect
            x={left}
            y={topY}
            width={width}
            height="30"
            fill={tier % 2 === 0 ? '#FFF1D1' : '#F3DA99'}
            stroke="#8F621B"
            strokeWidth="1.4"
          />
          {/* Central window */}
          <rect x="119" y={topY + 6} width="22" height="18" rx="3" fill="#650C18" stroke="#D6A64B" strokeWidth="1.2" />
          {/* Side niche pilaster ribs */}
          {[-3, -2, -1, 1, 2, 3].map((rib) => {
            const rx = 130 + rib * (halfW / 3.6);
            return (
              <rect
                key={rib}
                x={rx - 4}
                y={topY + 4}
                width="8"
                height="22"
                fill="#D6A64B"
                opacity="0.65"
                stroke="#8F621B"
                strokeWidth="0.8"
              />
            );
          })}
        </g>
      );
    })}
    {/* Grand Entrance Portal */}
    <rect x="26" y="316" width="208" height="40" fill="#E8C675" stroke="#650C18" strokeWidth="1.8" />
    <rect x="104" y="320" width="52" height="36" fill="#650C18" stroke="#D6A64B" strokeWidth="1.5" />
  </svg>
);

export const TraditionalPeacock: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = 'w-24 h-28',
}) => (
  <svg
    viewBox="0 0 120 140"
    fill="none"
    className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}
    aria-hidden="true"
  >
    {/* Tail fan feathers */}
    <path d="M20 125 Q8 65 55 32 Q80 65 44 125 Z" fill="#D6A64B" stroke="#650C18" strokeWidth="1.4" />
    {[
      [26, 72],
      [38, 54],
      [54, 46],
      [34, 92],
      [48, 76],
    ].map(([cx, cy], idx) => (
      <g key={idx}>
        <circle cx={cx} cy={cy} r="7" fill="#087BC1" stroke="#FFF8E8" strokeWidth="1.2" />
        <circle cx={cx} cy={cy} r="3" fill="#650C18" />
      </g>
    ))}
    {/* Peacock body & neck */}
    <path
      d="M52 125 C50 100, 68 88, 76 68 C82 54, 78 36, 86 30 C92 26, 98 30, 95 36 C88 46, 92 68, 84 90 C78 106, 74 118, 72 125 Z"
      fill="#F2D27A"
      stroke="#650C18"
      strokeWidth="1.6"
    />
    {/* Crest */}
    <path d="M88 28 L83 16 M91 27 L91 14 M94 28 L99 17" stroke="#D6A64B" strokeWidth="1.4" />
    <circle cx="83" cy="15" r="2" fill="#D6A64B" />
    <circle cx="91" cy="13" r="2" fill="#D6A64B" />
    <circle cx="99" cy="16" r="2" fill="#D6A64B" />
    {/* Beak & Eye */}
    <polygon points="96,32 106,34 96,37" fill="#8C1423" />
    <circle cx="90" cy="32" r="1.8" fill="#650C18" />
  </svg>
);

export const HangingBellsCanopy: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none w-full select-none">
    <svg viewBox="0 0 1200 104" preserveAspectRatio="none" className="w-full h-14 sm:h-20">
      {/* Maroon scalloped canopy */}
      <path
        d="M0 0 H1200 V46 Q1050 86 900 46 Q750 86 600 46 Q450 86 300 46 Q150 86 0 46 Z"
        fill="#650C18"
        stroke="#D6A64B"
        strokeWidth="3"
      />
      {/* Hanging golden bells & pearl strands */}
      {[120, 260, 420, 600, 780, 940, 1080].map((x, idx) => {
        const len = idx % 2 === 0 ? 46 : 34;
        return (
          <g key={x} transform={`translate(${x}, 48)`}>
            <line x1="0" y1="0" x2="0" y2={len} stroke="#D6A64B" strokeWidth="2" strokeDasharray="3 3" />
            <path
              d={`M-9 ${len + 14} Q-7 ${len} 0 ${len} Q7 ${len} 9 ${len + 14} Z`}
              fill="#F2D27A"
              stroke="#8F621B"
              strokeWidth="1.2"
            />
            <circle cx="0" cy={len + 17} r="2.8" fill="#8C1423" stroke="#D6A64B" strokeWidth="1" />
          </g>
        );
      })}
    </svg>
  </div>
);

export interface ResilientWeddingImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ResilientWeddingImage: React.FC<ResilientWeddingImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Sacred Wedding Moment',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#650C18] via-[#8C1423] to-[#4A0812] text-[#FFF8E8] p-6 text-center ${className}`}
      >
        <SacredKalashEmblem className="w-14 h-14 mb-3 opacity-90" />
        <p className="font-display text-sm tracking-wider uppercase text-[#F2D27A]">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
