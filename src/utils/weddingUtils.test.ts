import test from 'node:test';
import assert from 'node:assert/strict';
import {
  INVITATION_CHAPTERS,
  buildGoogleMapsUrl,
  buildWhatsAppUrl,
  calculateCountdown,
  padTwoDigits,
} from './weddingUtils';

test('calculateCountdown returns exact days, hours, minutes, seconds for future timestamp', () => {
  const target = '2026-11-22T09:30:00Z';
  const now = new Date('2026-11-20T07:15:10Z').getTime();
  const result = calculateCountdown(target, now);

  assert.equal(result.isPast, false);
  assert.equal(result.days, 2);
  assert.equal(result.hours, 2);
  assert.equal(result.minutes, 14);
  assert.equal(result.seconds, 50);
});

test('calculateCountdown handles past and invalid dates gracefully', () => {
  const past = calculateCountdown('2026-11-10T00:00:00Z', new Date('2026-11-17T00:00:00Z').getTime());
  assert.deepEqual(past, { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });

  const invalid = calculateCountdown('not-a-date', Date.now());
  assert.deepEqual(invalid, { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
});

test('padTwoDigits formats single and multi-digit numbers cleanly', () => {
  assert.equal(padTwoDigits(0), '00');
  assert.equal(padTwoDigits(5), '05');
  assert.equal(padTwoDigits(23), '23');
  assert.equal(padTwoDigits(-3), '00');
});

test('INVITATION_CHAPTERS defines all 9 continuous video chapters in exact sequence', () => {
  assert.equal(INVITATION_CHAPTERS.length, 9);
  assert.equal(INVITATION_CHAPTERS[0].id, 'intro');
  assert.equal(INVITATION_CHAPTERS[2].id, 'celebrations');
  assert.equal(INVITATION_CHAPTERS[8].id, 'closing');
});

test('buildWhatsAppUrl and buildGoogleMapsUrl encode parameters accurately', () => {
  const waNoPhone = buildWhatsAppUrl('Hello Rahul & Kiran');
  assert.equal(waNoPhone, 'https://wa.me/?text=Hello%20Rahul%20%26%20Kiran');

  const waWithPhone = buildWhatsAppUrl('RSVP Yes', '+91 98765-43210');
  assert.equal(waWithPhone, 'https://wa.me/919876543210?text=RSVP%20Yes');

  const maps = buildGoogleMapsUrl('Tarimela Village');
  assert.equal(maps, 'https://www.google.com/maps/search/?api=1&query=Tarimela%20Village');
});
