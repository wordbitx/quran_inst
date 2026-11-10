// Course icons — ditto copy of the icons in the client's own reference design
// ("Our Specialities" grid, 2 rows x 7), in the same deep-blue premium style.
//
// How each icon was made:
// - RECREATED as SVG: open books, letter blocks, praying hands, mosques,
//   graduation cap, handshake (see below).
// - KEPT as faithful text renderings (only sized to the reference size):
//   Tajweed (تجويد) and Basic Arabic Learning (أخلاق) — same Arabic text,
//   never redrawn.
// - Six Kalimas: recreated as a big white "6" in a solid blue circle, as in
//   the reference (previously it rendered as a small plain "6").
// - Seerah (محمد ﷺ) is NOT in this map on purpose: it falls back to the
//   original icon in data.ts, left exactly as it was, pending the user's
//   exact instruction on the ﷺ rendering.
// - Islamic Manners & Ethics handshake: CROPPED from the client's reference
//   image (public/icons/handshake.png, transparent PNG) — the hand-drawn SVG
//   versions did not read as a handshake, so the client's own icon is used.
//
// This map overrides course.icon at the two render sites (CourseCard and the
// course page). data.ts is left untouched.

const OPEN_BOOK = `<svg viewBox="0 0 24 24" fill="none"><path d="M12 6.2C10.6 4.7 8.2 3.9 5.6 4.1c-1.2.1-2.3.3-3.1.6v12.4c.8-.3 1.9-.5 3.1-.6 2.6-.2 5 .6 6.4 2.1 1.4-1.5 3.8-2.3 6.4-2.1 1.2.1 2.3.3 3.1.6V4.7c-.8-.3-1.9-.5-3.1-.6-2.6-.2-5 .6-6.4 2.1z" fill="#0b3d91"/><path d="M12 6.2c1.4-1.5 3.8-2.3 6.4-2.1 1.2.1 2.3.3 3.1.6v12.4c-.8-.3-1.9-.5-3.1-.6-2.6-.2-5 .6-6.4 2.1V6.2z" fill="#2f6fd0" opacity=".45"/><path d="M12 6.2v12.4" stroke="#8fb4ea" stroke-width=".6"/><path d="M4.9 7.3c1.3-.2 2.8 0 4.1.7M4.9 9.7c1.3-.2 2.8 0 4.1.7M4.9 12.1c1.3-.2 2.8 0 4.1.7" stroke="#fff" stroke-width=".7" stroke-linecap="round" opacity=".9"/><path d="M15 8c1.3-.7 2.8-.9 4.1-.7M15 10.4c1.3-.7 2.8-.9 4.1-.7M15 12.8c1.3-.7 2.8-.9 4.1-.7" stroke="#fff" stroke-width=".7" stroke-linecap="round" opacity=".9"/></svg>`;

const NAZRA_BOOK = `<svg viewBox="0 0 24 24" fill="none"><path d="M12 6.2C10.6 4.7 8.2 3.9 5.6 4.1c-1.2.1-2.3.3-3.1.6v12.4c.8-.3 1.9-.5 3.1-.6 2.6-.2 5 .6 6.4 2.1 1.4-1.5 3.8-2.3 6.4-2.1 1.2.1 2.3.3 3.1.6V4.7c-.8-.3-1.9-.5-3.1-.6-2.6-.2-5 .6-6.4 2.1z" fill="#0b3d91"/><path d="M12 6.2c1.4-1.5 3.8-2.3 6.4-2.1 1.2.1 2.3.3 3.1.6v12.4c-.8-.3-1.9-.5-3.1-.6-2.6-.2-5 .6-6.4 2.1V6.2z" fill="#2f6fd0" opacity=".45"/><path d="M12 6.2v12.4" stroke="#8fb4ea" stroke-width=".6"/><path d="M4.9 7.3c1.3-.2 2.8 0 4.1.7M4.9 9.7c1.3-.2 2.8 0 4.1.7M4.9 12.1c1.3-.2 2.8 0 4.1.7" stroke="#fff" stroke-width=".7" stroke-linecap="round" opacity=".9"/><path d="M15 8c1.3-.7 2.8-.9 4.1-.7M15 10.4c1.3-.7 2.8-.9 4.1-.7M15 12.8c1.3-.7 2.8-.9 4.1-.7" stroke="#fff" stroke-width=".7" stroke-linecap="round" opacity=".9"/><path d="M10.8 18.4h2.4v3.4l-1.2-1-1.2 1z" fill="#e0231c"/></svg>`;

const SURAH_BOOK = `<svg viewBox="0 0 24 24" fill="none"><path d="M12 6.2C10.6 4.7 8.2 3.9 5.6 4.1c-1.2.1-2.3.3-3.1.6v12.4c.8-.3 1.9-.5 3.1-.6 2.6-.2 5 .6 6.4 2.1 1.4-1.5 3.8-2.3 6.4-2.1 1.2.1 2.3.3 3.1.6V4.7c-.8-.3-1.9-.5-3.1-.6-2.6-.2-5 .6-6.4 2.1z" fill="#0b3d91"/><path d="M12 6.2c1.4-1.5 3.8-2.3 6.4-2.1 1.2.1 2.3.3 3.1.6v12.4c-.8-.3-1.9-.5-3.1-.6-2.6-.2-5 .6-6.4 2.1V6.2z" fill="#2f6fd0" opacity=".45"/><path d="M12 6.2v12.4" stroke="#8fb4ea" stroke-width=".6"/><path d="M4.9 7.3c1.3-.2 2.8 0 4.1.7M4.9 9.7c1.3-.2 2.8 0 4.1.7M4.9 12.1c1.3-.2 2.8 0 4.1.7" stroke="#fff" stroke-width=".7" stroke-linecap="round" opacity=".9"/><path d="M15 8c1.3-.7 2.8-.9 4.1-.7M15 10.4c1.3-.7 2.8-.9 4.1-.7M15 12.8c1.3-.7 2.8-.9 4.1-.7" stroke="#fff" stroke-width=".7" stroke-linecap="round" opacity=".9"/><path d="M7.6 8.6l.45 1.05 1.05.45-1.05.45L7.6 11.6l-.45-1.05-1.05-.45 1.05-.45z" fill="#fff"/><path d="M10.8 17.8h2.4v4.4l-1.2-1.1-1.2 1.1z" fill="#e0231c"/></svg>`;

const NOORANI_BLOCKS = `<svg viewBox="0 0 24 24"><rect x="9" y="2.5" width="6" height="6" rx="1.3" fill="#0b3d91"/><rect x="4.5" y="10.5" width="6" height="6" rx="1.3" fill="#1e63c8"/><rect x="13.5" y="10.5" width="6" height="6" rx="1.3" fill="#0b3d91"/><text x="12" y="7" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.4" font-weight="800" fill="#fff">A</text><text x="7.5" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.4" font-weight="800" fill="#fff">a</text><text x="16.5" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.4" font-weight="800" fill="#fff">3</text></svg>`;

const PRAYING_HANDS = `<svg viewBox="0 0 24 24"><g fill="#0b3d91"><rect x="6.1" y="7" width="1.55" height="6" rx=".78"/><rect x="7.85" y="4.8" width="1.55" height="8" rx=".78"/><rect x="9.6" y="3.6" width="1.55" height="9.2" rx=".78"/><rect x="11.35" y="5.2" width="1.55" height="7.6" rx=".78"/><path d="M5.9 11.5c-.5 1.9-.4 3.9.3 5.7l1.6 3.6c.2.5.6.9 1.2.9h3V12z"/></g><g fill="#1e63c8"><rect x="11.1" y="5.2" width="1.55" height="7.6" rx=".78"/><rect x="12.85" y="3.6" width="1.55" height="9.2" rx=".78"/><rect x="14.6" y="4.8" width="1.55" height="8" rx=".78"/><rect x="16.35" y="7" width="1.55" height="6" rx=".78"/><path d="M18.1 11.5c.5 1.9.4 3.9-.3 5.7l-1.6 3.6c-.2.5-.6.9-1.2.9h-3V12z"/></g><path d="M12 12.4V21" stroke="#fff" stroke-width=".5" opacity=".6"/></svg>`;

const SALAH_MOSQUE = `<svg viewBox="0 0 24 24"><rect x="3.6" y="9" width="1.7" height="12" fill="#0b3d91"/><path d="M3.5 9.2a1.1 1.1 0 0 1 2.2 0z" fill="#0b3d91"/><circle cx="4.45" cy="7.3" r=".55" fill="#0b3d91"/><rect x="3.3" y="12.6" width="2.3" height=".8" fill="#0b3d91"/><path d="M6.8 15.6c0-3.4 2.3-5.9 5.2-5.9s5.2 2.5 5.2 5.9z" fill="#0b3d91"/><path d="M12.9 3.4a1.5 1.5 0 1 0-1.2 2.4 1.2 1.2 0 1 1 1.2-2.4z" fill="#0b3d91"/><rect x="11.7" y="6" width=".6" height="3.7" fill="#0b3d91"/><rect x="6" y="15.6" width="12" height="5.4" fill="#0b3d91"/><path d="M8.2 21v-2.6a1.1 1.1 0 0 1 2.2 0V21z" fill="#fff"/><path d="M10.9 21v-2.6a1.1 1.1 0 0 1 2.2 0V21z" fill="#fff"/><path d="M13.6 21v-2.6a1.1 1.1 0 0 1 2.2 0V21z" fill="#fff"/></svg>`;

const GRAD_CAP = `<svg viewBox="0 0 24 24"><path d="M7.5 10.2v4.6c0 1.6 2 2.9 4.5 2.9s4.5-1.3 4.5-2.9v-4.6l-4.5 1.9z" fill="#0b3d91"/><path d="M12 3.2 22.5 8 12 12.8 1.5 8z" fill="#0b3d91"/><path d="M12 3.2 17.2 5.6 12 8 6.8 5.6z" fill="#2f6fd0" opacity=".5"/><circle cx="12" cy="7.7" r=".7" fill="#fff"/><path d="M3.2 8.6v5.2" stroke="#0b3d91" stroke-width="1" stroke-linecap="round"/><circle cx="3.2" cy="14.8" r=".9" fill="#0b3d91"/><path d="M20.8 8.6v5.2" stroke="#0b3d91" stroke-width="1" stroke-linecap="round"/><circle cx="20.8" cy="14.8" r=".9" fill="#0b3d91"/></svg>`;

const TAFSEER_SKYLINE = `<svg viewBox="0 0 24 24"><rect x="3.2" y="9.5" width="1.5" height="11.5" fill="#0b3d91"/><path d="M3 9.7a1.15 1.15 0 0 1 2.3 0z" fill="#0b3d91"/><circle cx="4.15" cy="7.9" r=".5" fill="#0b3d91"/><rect x="19.3" y="9.5" width="1.5" height="11.5" fill="#0b3d91"/><path d="M19.1 9.7a1.15 1.15 0 0 1 2.3 0z" fill="#0b3d91"/><circle cx="20.05" cy="7.9" r=".5" fill="#0b3d91"/><path d="M5.8 16.2c0-1.9 1.1-3.2 2.5-3.2s2.5 1.3 2.5 3.2z" fill="#0b3d91"/><path d="M13.2 16.2c0-1.9 1.1-3.2 2.5-3.2s2.5 1.3 2.5 3.2z" fill="#0b3d91"/><path d="M8.6 16.2c0-3.2 1.5-5.4 3.4-5.4s3.4 2.2 3.4 5.4z" fill="#0b3d91"/><path d="M12.8 8.2a1.3 1.3 0 1 0-1 2.1 1 1 0 1 1 1-2.1z" fill="#0b3d91"/><rect x="11.7" y="9.8" width=".6" height="1" fill="#0b3d91"/><rect x="2.5" y="16.2" width="19" height="4.8" fill="#0b3d91"/><path d="M5 21v-2.2a1 1 0 0 1 2 0V21z" fill="#fff"/><path d="M8.6 21v-2.2a1 1 0 0 1 2 0V21z" fill="#fff"/><path d="M12.2 21v-2.2a1 1 0 0 1 2 0V21z" fill="#fff"/><path d="M15.8 21v-2.2a1 1 0 0 1 2 0V21z" fill="#fff"/></svg>`;

/** Icon HTML by course slug. Absent slugs fall back to course.icon in data.ts. */
export const COURSE_ICONS: Record<string, string> = {
  "quran-translation": OPEN_BOOK,
  "noorani-qaida": NOORANI_BLOCKS,
  "masnoon-duas": PRAYING_HANDS,
  "salah-namaz": SALAH_MOSQUE,
  "islamic-studies": GRAD_CAP,
  "hifz-ul-quran": OPEN_BOOK,
  "tajweed": `<span style="font-size:28px;line-height:1;color:#0b3d91">تجويد</span>`,
  "quran-reading-nazra": NAZRA_BOOK,
  "selected-surah-memorization": SURAH_BOOK,
  "six-kalimas": `<span style="display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background:#0b3d91;color:#fff;font-size:34px;font-weight:800;line-height:1">6</span>`,
  "basic-arabic-learning": `<span style="font-size:24px;line-height:1;color:#0b3d91">أخلاق</span>`,
  "quran-tafseer": TAFSEER_SKYLINE,
  // seerah: intentionally absent — falls back to the original محمد ﷺ icon in data.ts
  "islamic-manners-ethics": `<img src="/icons/handshake.png" alt="" class="h-11 w-11 object-contain" />`,
};

/** Resolve the icon HTML for a course (override first, original icon as fallback). */
export function courseIcon(slug: string, fallback: string): string {
  return COURSE_ICONS[slug] ?? fallback;
}
