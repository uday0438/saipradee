import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Expand, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BananaLeafLotusCrown, ResilientWeddingImage } from './TempleOrnaments';

interface EventsSectionProps {
  onOpenPhoto: (imageSrc: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenPhoto }) => {
  const { data, isTelugu } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>('wedding');
  const events = data.events;
  const visibleEvents = events.filter((e) => e.id === selectedId);

  return (
    <section
      id="celebrations"
      aria-label="Wedding Celebrations"
      className="relative w-full overflow-hidden bg-[#FFF8E8] pt-6 sm:pt-10 pb-14 sm:pb-20"
    >
      {/* Subtle lead text matching 00:10 */}
      <div className="text-center px-4 mb-2">
        <p className="font-serif-body italic text-base sm:text-xl text-[#8C1423]">
          {isTelugu ? 'కల్యాణ శుభకార్య వివరాలు' : 'On the following auspicious events'}
        </p>
      </div>

      {/* Top Banana Leaf, Kalash & Lotus Temple Arch Crown matching 00:10 - 00:15 */}
      <div className="relative z-20">
        <BananaLeafLotusCrown />
      </div>

      {/* Traditional Maroon & Gold Temple Frame enclosing the Event Cards */}
      <div className="relative z-10 px-3 sm:px-8">
        <div className="relative max-w-5xl mx-auto rounded-2xl p-2.5 sm:p-4 bg-gradient-to-br from-[#650C18] via-[#8C1423] to-[#650C18] border-[3px] border-[#D6A64B] shadow-[0_18px_48px_rgba(101,12,24,0.22)]">
          <div className="bg-[#FFF8E8] rounded-xl border-2 border-[#D6A64B] p-4 sm:p-7">
            {/* Wedding & Reception Event Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter wedding celebrations"
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-5 mb-6 border-b border-[#D6A64B]/45"
            >
              {events.map((evt) => {
                const isActive = selectedId === evt.id;
                return (
                  <button
                    key={evt.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedId(evt.id)}
                    className={`px-4 sm:px-6 py-2 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#650C18] text-[#FFF8E8] border-2 border-[#D6A64B] shadow-md font-semibold'
                        : 'bg-[#FFF1D1] text-[#650C18] border border-[#D6A64B]/60 hover:bg-[#F7E3B5]'
                    }`}
                  >
                    {evt.title.replace(' Ceremony', '')}
                  </button>
                );
              })}
            </div>

            {/* Event Cards matching 00:12 - 00:15: Left Framed Photo | Right Title, Details & Blue View Location Button */}
            <div className="space-y-8 sm:space-y-10">
              {visibleEvents.map((evt, idx) => (
                <motion.article
                  key={evt.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center ${
                    idx > 0 ? 'pt-8 border-t border-[#D6A64B]/35' : ''
                  }`}
                >
                  {/* Left Photograph */}
                  <div className="md:col-span-5 flex justify-center">
                    <button
                      type="button"
                      onClick={() => onOpenPhoto(evt.image)}
                      aria-label={`View ${evt.title} photograph`}
                      className="group relative w-full max-w-[300px] sm:max-w-none aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#D6A64B] shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087BC1]"
                    >
                      <ResilientWeddingImage
                        src={evt.image}
                        alt={evt.imageAlt}
                        fallbackTitle={evt.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 right-2 p-1.5 rounded-full bg-[#1D1819]/75 text-white opacity-85 group-hover:opacity-100">
                        <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </button>
                  </div>

                  {/* Right Event Details */}
                  <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="font-serif-body italic text-sm sm:text-base text-[#8C1423]">
                      {evt.subtitle}
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#4A0812] tracking-wide mt-0.5">
                      {evt.title}
                    </h2>

                    <div className="mt-3 space-y-1.5 text-sm sm:text-base font-serif-body text-[#4A0812]">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Calendar className="w-4 h-4 text-[#B88635] shrink-0" aria-hidden="true" />
                        <span>{evt.date}</span>
                        <span aria-hidden="true">·</span>
                        <Clock className="w-4 h-4 text-[#B88635] shrink-0" aria-hidden="true" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPin className="w-4 h-4 text-[#8C1423] shrink-0" aria-hidden="true" />
                        <span>{evt.venue}</span>
                      </div>
                    </div>

                    <p className="mt-3 font-serif-body text-base text-[#5C232B] leading-relaxed max-w-md">
                      {evt.description}
                    </p>

                    {/* Signature Small Royal Blue "View Location" Button matching 00:12 - 00:15 */}
                    <a
                      href={evt.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#087BC1] text-white font-display text-xs tracking-wider uppercase shadow hover:bg-[#06639C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087BC1]"
                    >
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{isTelugu ? 'స్థానం చూడండి' : 'View Location'}</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
