import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, Share2 } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { buildWhatsAppUrl } from '../utils/weddingUtils';
import { GoldParticles, GoldenTempleSkyline, HangingBellsCanopy } from './TempleOrnaments';

interface WeddingDetailsProps {
  onShare: () => void;
}

export const WeddingDetails: React.FC<WeddingDetailsProps> = ({ onShare }) => {
  const { weddingCeremony, reception, whatsappNumber, rsvpMessage } = weddingData;
  const whatsappUrl = buildWhatsAppUrl(rsvpMessage, whatsappNumber);

  return (
    <section
      id="grand-invitation"
      aria-label="Wedding Ceremony and Reception Details"
      className="relative w-full overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#650C18] via-[#8C1423] to-[#650C18] pb-20 sm:pb-28"
    >
      <GoldParticles count={16} tone="gold" />
      <GoldenTempleSkyline />

      {/* Top Scalloped Maroon Canopy with Hanging Golden Bells matching 00:28 - 00:31 */}
      <div className="relative z-20 shrink-0">
        <HangingBellsCanopy />
      </div>

      {/* Central Arched Cream Invitation Panel */}
      <div className="relative z-20 flex items-center justify-center px-3 sm:px-8 pt-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#FFF8E8] border-[3px] border-[#D6A64B] rounded-t-[3rem] rounded-b-2xl px-4 py-7 sm:px-10 sm:py-10 shadow-[0_20px_55px_rgba(24,2,6,0.45)] text-center"
        >
          <div className="pointer-events-none absolute inset-2 rounded-t-[2.5rem] rounded-b-xl border border-[#D6A64B]/60" />

          <div className="relative z-10">
            <h2 className="font-script text-4xl sm:text-5xl text-[#8C1423]">
              Will You Join Us?
            </h2>
            <p className="font-display text-[10px] sm:text-xs tracking-[0.26em] uppercase text-[#8F621B] mt-1">
              Wedding Ceremony &amp; Reception Details
            </p>

            {/* Two-Column Ceremony + Reception Schedule */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center">
              {/* Wedding Ceremony */}
              <div className="bg-[#FFF1D1]/70 border border-[#D6A64B]/70 rounded-xl p-4 sm:p-5">
                <h3 className="font-display text-sm sm:text-base font-semibold tracking-[0.18em] text-[#650C18] uppercase">
                  {weddingCeremony.title}
                </h3>
                <div className="my-2 h-px w-20 mx-auto bg-[#D6A64B]" />
                <p className="font-serif-body text-sm sm:text-base text-[#4A0812]">
                  <span className="font-semibold">Date:</span> {weddingCeremony.date}
                </p>
                <p className="font-serif-body text-sm sm:text-base text-[#4A0812] mt-0.5">
                  <span className="font-semibold">Time:</span> {weddingCeremony.time}
                </p>
                <p className="font-serif-body text-sm sm:text-base text-[#4A0812] mt-0.5">
                  <span className="font-semibold">Venue:</span> {weddingCeremony.venue}
                </p>
              </div>

              {/* Reception */}
              <div className="bg-[#FFF1D1]/70 border border-[#D6A64B]/70 rounded-xl p-4 sm:p-5">
                <h3 className="font-display text-sm sm:text-base font-semibold tracking-[0.18em] text-[#650C18] uppercase">
                  {reception.title}
                </h3>
                <div className="my-2 h-px w-20 mx-auto bg-[#D6A64B]" />
                <p className="font-serif-body text-sm sm:text-base text-[#4A0812]">
                  <span className="font-semibold">Date:</span> {reception.date}
                </p>
                <p className="font-serif-body text-sm sm:text-base text-[#4A0812] mt-0.5">
                  <span className="font-semibold">Time:</span> {reception.time}
                </p>
                <p className="font-serif-body text-sm sm:text-base text-[#4A0812] mt-0.5">
                  <span className="font-semibold">Venue:</span> {reception.venue}
                </p>
              </div>
            </div>

            {/* Interactive Actions: Google Maps Directions, WhatsApp RSVP, Share */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={reception.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#087BC1] text-white font-display text-xs tracking-wider uppercase shadow hover:bg-[#06639C] transition-colors whitespace-nowrap shrink-0"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>View Location</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#650C18] text-[#FFF8E8] border border-[#D6A64B] font-display text-xs tracking-wider uppercase shadow hover:bg-[#8C1423] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#F2D27A]" aria-hidden="true" />
                <span>RSVP on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onShare}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF1D1] text-[#650C18] border border-[#D6A64B] font-display text-xs tracking-wider uppercase hover:bg-[#F5DF9E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Share2 className="w-3.5 h-3.5 text-[#8C1423]" aria-hidden="true" />
                <span>Share Invite</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
