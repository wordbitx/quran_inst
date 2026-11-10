// Course icons — CLEAN HAND-DRAWN SVG VECTORS, recreated as-it-is from the
// client's own reference design ("Our Specialities" grid in
// WhatsApp_Image_2026-11-09_at_2.25.26_PM.jpeg). Every icon is inline SVG,
// so it stays razor-sharp at any size — no raster images anywhere.
//
// The earlier cropped PNGs were pixelated (raster lifted from the poster),
// so they were deleted and replaced by these vectors. data.ts is untouched.
// - 11 pictorial icons are pure SVG shapes in deep navy (currentColor) with
//   red (#E0231C) accents for ribbons/crescents.
// - Tajweed, Basic Arabic Learning and Seerah are Arabic calligraphy rendered
//   as SVG <text> (vector text, not an image). Seerah (محمد ﷺ) is kept
//   exactly as the user confirmed it.
// - Six Kalimas is the big white "6" in a navy circle, as in the reference.

const NAVY = "currentColor";
const RED = "#E0231C";
const WHITE = "#ffffff";

/** Open book, glossy — Quran Translation. */
const BOOK_GLOSSY = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 14c-5-4-13-5-22-2v35c9-3 17-2 22 2 5-4 13-5 22-2V12c-9-3-17-2-22 2z"/><path d="M32 14v35" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M13 21h13M13 27h13M13 33h13M38 21h13M38 27h13M38 33h13" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".85" fill="none"/><path d="M11 15c5-2 11-2 16 0" stroke="${WHITE}" stroke-width="2" stroke-linecap="round" opacity=".35" fill="none"/></svg>`;

/** Letter blocks with A / a / 3 — Noorani Qaida. */
const LETTER_BLOCKS = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><rect x="21" y="5" width="22" height="19" rx="4"/><rect x="7" y="28" width="22" height="19" rx="4"/><rect x="35" y="28" width="22" height="19" rx="4"/><text x="32" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">A</text><text x="18" y="43" text-anchor="middle" font-size="13" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">a</text><text x="46" y="43" text-anchor="middle" font-size="13" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">3</text></svg>`;

/** Praying hands — Masnoon Duas. Two mirrored hands, fingertips meeting. */
const PRAYING_HANDS = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M30 7c-4.5 3.5-7.5 10-9 17-1.4 7-1.8 15-.4 23 .8 4.4 2.2 8 4.4 11h5V7z"/><path d="M34 7c4.5 3.5 7.5 10 9 17 1.4 7 1.8 15 .4 23-.8 4.4-2.2 8-4.4 11h-5V7z"/><path d="M25.5 15v34M28.5 11v42M38.5 15v34M35.5 11v42" stroke="${WHITE}" stroke-width="1.3" opacity=".55" fill="none"/><rect x="19" y="52" width="13" height="8" rx="2.5"/><rect x="32" y="52" width="13" height="8" rx="2.5"/></svg>`;

/** Mosque with dome, crescent and minaret — Salah (Namaz). */
const MOSQUE = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path fill="${RED}" d="M34 1.2A5 5 0 1 0 34 10.8 6.5 6.5 0 0 1 34 1.2z"/><circle cx="32" cy="12.5" r="1.8"/><path d="M32 15c-9 0-15 6-15 14v3h30v-3c0-8-6-14-15-14z"/><path d="M17 32h30v16H17z"/><rect x="50" y="20" width="7" height="30" rx="1.5"/><path d="M49 20a4.5 4.5 0 0 1 9 0z"/><rect x="48.5" y="30" width="10" height="2.6" rx="1.3"/><path d="M7 48h50v10H7z"/><path d="M28 58V47a4 4 0 0 1 8 0v11z" fill="${WHITE}"/><path d="M21 41v-3a3 3 0 0 1 6 0v3zM37 41v-3a3 3 0 0 1 6 0v3z" fill="${WHITE}"/></svg>`;

/** Graduation cap — Islamic Studies. */
const GRAD_CAP = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 8 60 21 32 34 4 21z"/><path d="M20 28.5V39c0 5 5.4 8.5 12 8.5S44 44 44 39V28.5L32 35z"/><path d="M60 21v15" stroke="${NAVY}" stroke-width="2.6" fill="none"/><circle cx="60" cy="40" r="3.6"/><path d="M32 14.5 50 22" stroke="${WHITE}" stroke-width="1.6" stroke-linecap="round" opacity=".6" fill="none"/></svg>`;

/** Open book, plain with page lines — Hifz-ul-Quran. */
const BOOK_PLAIN = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 13c-6-4-14-5-23-2v36c9-3 17-2 23 2 6-4 14-5 23-2V11c-9-3-17-2-23 2z"/><path d="M32 13v36" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M12 20h14M12 26h14M12 32h14M38 20h14M38 26h14M38 32h14" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".85" fill="none"/><path d="M9 9c8-2.4 15-2.4 23 1 8-3.4 15-3.4 23-1v4c-8-2.4-15-2.4-23 1-8-3.4-15-3.4-23-1z" opacity=".9"/></svg>`;

/** Arabic calligraphy — Tajweed. */
const TAJWEED_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="41" text-anchor="middle" font-size="25" font-weight="700" fill="${NAVY}" font-family="'Noto Sans Arabic', 'Noto Naskh Arabic', serif" textLength="52" lengthAdjust="spacingAndGlyphs">تجويد</text></svg>`;

/** Open book with small red ribbon — Quran Reading (Nazra). */
const BOOK_RIBBON_SMALL = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 13c-5-4-13-5-22-2v35c9-3 17-2 22 2 5-4 13-5 22-2V11c-9-3-17-2-22 2z"/><path d="M32 13v35" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M13 20h13M13 26h13M13 32h13M38 20h13M38 26h13M38 32h13" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".85" fill="none"/><path d="M29.5 44h5v13l-2.5-2.6L29.5 57z" fill="${RED}"/></svg>`;

/** Open book with white star and long red ribbon — Selected Surah Memorization. */
const BOOK_STAR_RIBBON = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 12c-5-4-13-5-22-2v34c9-3 17-2 22 2 5-4 13-5 22-2V10c-9-3-17-2-22 2z"/><path d="M32 12v34" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M38 19h13M38 25h13M38 31h13" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".85" fill="none"/><path d="M20 17l1.7 3.4 3.8.6-2.7 2.7.6 3.8-3.4-1.8-3.4 1.8.6-3.8-2.7-2.7 3.8-.6z" fill="${WHITE}"/><path d="M29.5 42h5v18l-2.5-3-2.5 3z" fill="${RED}"/></svg>`;

/** Big white "6" in a navy circle — Six Kalimas. */
const SIX_KALIMAS = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="${NAVY}"/><text x="32" y="45" text-anchor="middle" font-size="36" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">6</text></svg>`;

/** Arabic calligraphy — Basic Arabic Learning. */
const ARABIC_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="41" text-anchor="middle" font-size="24" font-weight="700" fill="${NAVY}" font-family="'Noto Sans Arabic', 'Noto Naskh Arabic', serif" textLength="50" lengthAdjust="spacingAndGlyphs">أخلاق</text></svg>`;

/** Mosque skyline with two minarets — Quran Tafseer. */
const MOSQUE_SKYLINE = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><rect x="9" y="24" width="5" height="26" rx="1"/><path d="M8 24a3.5 3.5 0 0 1 7 0z"/><rect x="50" y="24" width="5" height="26" rx="1"/><path d="M49 24a3.5 3.5 0 0 1 7 0z"/><path d="M32 14c-7.5 0-12.5 5-12.5 11v3h25v-3c0-6-5-11-12.5-11z"/><circle cx="32" cy="9.5" r="2.2"/><path d="M20 34a4.5 4.5 0 0 1 9 0v3h-9zM35 34a4.5 4.5 0 0 1 9 0v3h-9z"/><path d="M6 48h52v10H6z"/><path d="M28.5 58V47a3.5 3.5 0 0 1 7 0v11z" fill="${WHITE}"/><path d="M12 50v-2.6a2.6 2.6 0 0 1 5.2 0V50zM46.8 50v-2.6a2.6 2.6 0 0 1 5.2 0V50z" fill="${WHITE}"/></svg>`;

/** Arabic calligraphy — Seerah of Prophet Muhammad ﷺ (user-confirmed text). */
const SEERAH_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="${NAVY}" font-family="'Noto Sans Arabic', 'Noto Naskh Arabic', serif" textLength="56" lengthAdjust="spacingAndGlyphs">محمد ﷺ</text></svg>`;

/** Handshake — Islamic Manners & Ethics. */
const HANDSHAKE = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M2 29l13 1.5 2.5 2.5-2.5 2.5L2 37z"/><path d="M62 29l-13 1.5-2.5 2.5 2.5 2.5 13 1.5z"/><path d="M19 24c1.6-1.8 4.2-2.5 6.6-1.7l3 1c1.5.5 3.1.4 4.5-.4l2.2-1.2c2.4-1.3 5.4-.8 7.3 1.2l1.7 1.8c1.2 1.3 1.3 3.3.2 4.7l-2.2 2.7c-.5.6-1.3.9-2 .7l-.6-.2-1.2 1.5c-.7.9-1.9 1.1-2.9.5l-.5-.3-1.2 1.5c-.7.9-1.9 1.1-2.9.5l-.5-.3-1.2 1.5c-.7.9-1.9 1.1-2.9.5l-.5-.3-1.2 1.5c-.8.9-2.1 1-3 .3l-3.4-3c-1.5-1.3-1.8-3.5-.7-5.2l1.4-2.2c.5-.8.6-1.8.2-2.6z"/><path d="M26 28.5l3 4M32 27l3 4.5M38 28l2.5 4" stroke="${WHITE}" stroke-width="1.3" stroke-linecap="round" fill="none"/></svg>`;

/** Icon SVG by course slug. Every slug has an entry — no fallback needed. */
export const COURSE_ICONS: Record<string, string> = {
  "quran-translation": BOOK_GLOSSY,
  "noorani-qaida": LETTER_BLOCKS,
  "masnoon-duas": PRAYING_HANDS,
  "salah-namaz": MOSQUE,
  "islamic-studies": GRAD_CAP,
  "hifz-ul-quran": BOOK_PLAIN,
  "tajweed": TAJWEED_TEXT,
  "quran-reading-nazra": BOOK_RIBBON_SMALL,
  "selected-surah-memorization": BOOK_STAR_RIBBON,
  "six-kalimas": SIX_KALIMAS,
  "basic-arabic-learning": ARABIC_TEXT,
  "quran-tafseer": MOSQUE_SKYLINE,
  "seerah": SEERAH_TEXT,
  "islamic-manners-ethics": HANDSHAKE,
};

/** Resolve the icon HTML for a course (override first, original icon as fallback). */
export function courseIcon(slug: string, fallback: string): string {
  return COURSE_ICONS[slug] ?? fallback;
}
