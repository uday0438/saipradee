export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export interface ChapterDescriptor {
  id: string;
  label: string;
  shortTitle: string;
}

export const INVITATION_CHAPTERS: ChapterDescriptor[] = [
  { id: 'intro', label: '01. Welcome & Temple Reveal', shortTitle: 'Welcome' },
  { id: 'sacred-invite', label: '02. Sacred Invitation', shortTitle: 'Invitation' },
  { id: 'celebrations', label: '03. Wedding Celebrations', shortTitle: 'Events' },
  { id: 'temple-couple', label: '04. Varmala Mandapam', shortTitle: 'Mandapam' },
  { id: 'couple', label: '05. Meet the Bride & Groom', shortTitle: 'Couple' },
  { id: 'grand-temple', label: '06. Grand Temple Gopuram', shortTitle: 'Sanctum' },
  { id: 'grand-invitation', label: '07. Venue Details & RSVP', shortTitle: 'Details & RSVP' },
  { id: 'countdown-gallery', label: '08. Countdown & Memories', shortTitle: 'Countdown' },
  { id: 'closing', label: '09. Final Blessings', shortTitle: 'Blessings' },
];

export function calculateCountdown(targetIso: string, nowMs: number = Date.now()): CountdownParts {
  let targetMs = new Date(targetIso).getTime();
  if (Number.isNaN(targetMs)) {
    // Robust manual parser for cross-browser support
    const cleaned = targetIso.replace(/[Zz]/, '').split(/[T ]/);
    if (cleaned.length >= 2) {
      const dateParts = cleaned[0].split('-').map(Number);
      const timeParts = cleaned[1].split(/[:+]/).map(Number);
      targetMs = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0] || 0, timeParts[1] || 0).getTime();
    }
  }

  if (Number.isNaN(targetMs)) {
    targetMs = Date.now() + 4 * 86400 * 1000;
  }

  let diffMs = targetMs - nowMs;
  let isPast = false;

  // If in the past, cycle forward to the next wedding anniversary or count live elapsed
  if (diffMs <= 0) {
    const targetDate = new Date(targetMs);
    const currentDate = new Date(nowMs);
    targetDate.setFullYear(currentDate.getFullYear() + (currentDate > targetDate ? 1 : 0));
    diffMs = targetDate.getTime() - nowMs;
    if (diffMs <= 0) {
      diffMs = Math.abs(targetMs - nowMs);
      isPast = true;
    }
  }

  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast };
}

export function padTwoDigits(value: number): string {
  const clamped = Math.max(0, Math.floor(value));
  return clamped < 10 ? `0${clamped}` : String(clamped);
}

export function buildWhatsAppUrl(message: string, phone?: string): string {
  const cleanPhone = (phone ?? '').replace(/[^\d]/g, '');
  const encoded = encodeURIComponent(message);
  if (cleanPhone.length > 0) {
    return `https://wa.me/${cleanPhone}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

export function buildGoogleMapsUrl(venueQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueQuery)}`;
}
