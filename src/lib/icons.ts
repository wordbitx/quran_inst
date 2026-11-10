// Course icons — PROFESSIONAL icons sourced from established free icon
// libraries (downloaded as actual SVG files, NOT redrawn from scratch).
// The user rejected all hand-drawn versions, so these are the real library
// icons, recoloured to the site's deep navy (currentColor) with red
// (#E0231C) accents where the reference has them. No cropped raster images
// anywhere (those pixelated before).
//
// Sources (all free licences):
// - Font Awesome Free 6.7.2 (CC BY 4.0): book-open, book-open-reader,
//   book-bookmark, book-quran, mosque, graduation-cap, hands-praying,
//   handshake — https://fontawesome.com (solid style)
// - Lucide (ISC licence): book-a — https://lucide.dev
// - Tabler Icons (MIT licence): building-mosque — https://tabler.io/icons
// - Tajweed / Basic Arabic / Seerah: Arabic calligraphy as SVG <text>
//   (vector text, not an image). Seerah (محمد ﷺ) kept exactly as the user
//   confirmed it.
// - Six Kalimas: big white "6" in a navy circle, as in the reference.
// data.ts is untouched.

const NAVY = "currentColor";
const RED = "#E0231C";
const WHITE = "#ffffff";

/**
 * Open book — Quran Translation.
 * Source: Font Awesome Free 6.7.2, solid "book-open" (viewBox 0 0 576 512).
 */
const BOOK_OPEN = `<svg viewBox="0 0 576 512" fill="${NAVY}" aria-hidden="true"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>`;

/**
 * Book with the letter A — Noorani Qaida (alphabet / Qaida book).
 * Source: Lucide, "book-a" (viewBox 0 0 24 24, stroke style).
 */
const BOOK_A = `<svg viewBox="0 0 24 24" fill="none" stroke="${NAVY}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m8 13 4-7 4 7"/><path d="M9.1 11h5.7"/></svg>`;

/**
 * Praying hands — Masnoon Duas.
 * Source: Font Awesome Free 6.7.2, solid "hands-praying" (viewBox 0 0 640 512).
 */
const HANDS_PRAYING = `<svg viewBox="0 0 640 512" fill="${NAVY}" aria-hidden="true"><path d="M351.2 4.8c3.2-2 6.6-3.3 10-4.1c4.7-1 9.6-.9 14.1 .1c7.7 1.8 14.8 6.5 19.4 13.6L514.6 194.2c8.8 13.1 13.4 28.6 13.4 44.4l0 73.5c0 6.9 4.4 13 10.9 15.2l79.2 26.4C631.2 358 640 370.2 640 384l0 96c0 9.9-4.6 19.3-12.5 25.4s-18.1 8.1-27.7 5.5L431 465.9c-56-14.9-95-65.7-95-123.7L336 224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-84.9c0-7-1.8-13.8-5.3-19.8L340.3 48.1c-1.7-3-2.9-6.1-3.6-9.3c-1-4.7-1-9.6 .1-14.1c1.9-8 6.8-15.2 14.3-19.9zm-62.4 0c7.5 4.6 12.4 11.9 14.3 19.9c1.1 4.6 1.2 9.4 .1 14.1c-.7 3.2-1.9 6.3-3.6 9.3L213.3 199.3c-3.5 6-5.3 12.9-5.3 19.8l0 84.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 118.2c0 58-39 108.7-95 123.7l-168.7 45c-9.6 2.6-19.9 .5-27.7-5.5S0 490 0 480l0-96c0-13.8 8.8-26 21.9-30.4l79.2-26.4c6.5-2.2 10.9-8.3 10.9-15.2l0-73.5c0-15.8 4.7-31.2 13.4-44.4L245.2 14.5c4.6-7.1 11.7-11.8 19.4-13.6c4.6-1.1 9.4-1.2 14.1-.1c3.5 .8 6.9 2.1 10 4.1z"/></svg>`;

/**
 * Mosque with dome and minarets — Salah (Namaz).
 * Source: Font Awesome Free 6.7.2, solid "mosque" (viewBox 0 0 640 512).
 */
const MOSQUE = `<svg viewBox="0 0 640 512" fill="${NAVY}" aria-hidden="true"><path d="M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5c0 0 0 0 0 0s0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4l-356.4 0c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6c0 0 0 0 0 0s0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512l0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-48 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l416 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-58c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454l0 58-64 0zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126l0 2L0 128l0-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160l160 0 0 136.6c-19.1 11.1-32 31.7-32 55.4l0 128c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2l-64 0c-26.5 0-48-21.5-48-48L0 176l0-16z"/></svg>`;

/**
 * Graduation cap — Islamic Studies.
 * Source: Font Awesome Free 6.7.2, solid "graduation-cap" (viewBox 0 0 640 512).
 */
const GRAD_CAP = `<svg viewBox="0 0 640 512" fill="${NAVY}" aria-hidden="true"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>`;

/**
 * Person reading an open book — Hifz-ul-Quran.
 * Source: Font Awesome Free 6.7.2, solid "book-open-reader" (viewBox 0 0 512 512).
 */
const BOOK_READER = `<svg viewBox="0 0 512 512" fill="${NAVY}" aria-hidden="true"><path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427L0 224c0-17.7 14.3-32 32-32l30.3 0c63.6 0 125.6 19.6 177.7 56zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l30.3 0c17.7 0 32 14.3 32 32l0 203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/></svg>`;

/** Arabic calligraphy — Tajweed. */
const TAJWEED_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="42" text-anchor="middle" font-size="26" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="54" lengthAdjust="spacingAndGlyphs">تجويد</text></svg>`;

/**
 * Book with bookmark — Quran Reading (Nazra).
 * Source: Font Awesome Free 6.7.2, solid "book-bookmark" (viewBox 0 0 448 512),
 * with a small red bookmark ribbon at the bottom, as in the reference.
 */
const BOOK_BOOKMARK = `<svg viewBox="0 0 448 512" fill="${NAVY}" aria-hidden="true"><path d="M0 96C0 43 43 0 96 0l96 0 0 190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5L352 0l32 0 32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32z"/><path d="M212 436h24v58l-12-11-12 11z" fill="${RED}"/></svg>`;

/**
 * Quran book with crescent and star — Selected Surah Memorization.
 * Source: Font Awesome Free 6.7.2, solid "book-quran" (viewBox 0 0 448 512);
 * book + crescent in navy, the star in red, as in the reference.
 */
const BOOK_QURAN = `<svg viewBox="0 0 448 512" fill="${NAVY}" aria-hidden="true"><path d="M352 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0L64 0 352 0zm0 384L96 384l0 64 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM96 192c0 70.7 57.3 128 128 128c25.6 0 49.5-7.5 69.5-20.5c3.2-2.1 4.5-6.2 3.1-9.7s-5.2-5.6-9-4.8c-6.1 1.2-12.5 1.9-19 1.9c-52.4 0-94.9-42.5-94.9-94.9s42.5-94.9 94.9-94.9c6.5 0 12.8 .7 19 1.9c3.8 .8 7.5-1.3 9-4.8s.2-7.6-3.1-9.7C273.5 71.5 249.6 64 224 64C153.3 64 96 121.3 96 192z"/><path d="M274.1 150.2l-8.9 21.4-23.1 1.9c-5.7 .5-8 7.5-3.7 11.2L256 199.8l-5.4 22.6c-1.3 5.5 4.7 9.9 9.6 6.9L280 217.2l19.8 12.1c4.9 3 10.9-1.4 9.6-6.9L304 199.8l17.6-15.1c4.3-3.7 2-10.8-3.7-11.2l-23.1-1.9-8.9-21.4c-2.2-5.3-9.6-5.3-11.8 0z" fill="${RED}"/></svg>`;

/** Big white "6" in a navy circle — Six Kalimas. */
const SIX_KALIMAS = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="${NAVY}"/><text x="32" y="46" text-anchor="middle" font-size="38" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">6</text></svg>`;

/** Arabic calligraphy — Basic Arabic Learning. */
const ARABIC_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="42" text-anchor="middle" font-size="25" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="52" lengthAdjust="spacingAndGlyphs">أخلاق</text></svg>`;

/**
 * Mosque skyline with two minarets — Quran Tafseer.
 * Source: Tabler Icons (MIT), outline "building-mosque"
 * (viewBox 0 0 24 24, stroke style).
 */
const MOSQUE_SKYLINE = `<svg viewBox="0 0 24 24" fill="none" stroke="${NAVY}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h7v-2a2 2 0 1 1 4 0v2h7"/><path d="M4 21v-10"/><path d="M20 21v-10"/><path d="M4 16h3v-3h10v3h3"/><path d="M17 13a5 5 0 0 0 -10 0"/><path d="M21 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5"/><path d="M5 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5"/><path d="M12 2a2 2 0 1 0 2 2"/><path d="M12 6v2"/></svg>`;

/** Arabic calligraphy — Seerah of Prophet Muhammad ﷺ (user-confirmed text). */
const SEERAH_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="56" lengthAdjust="spacingAndGlyphs">محمد ﷺ</text></svg>`;

/**
 * Handshake — Islamic Manners & Ethics.
 * Source: Font Awesome Free 6.7.2, solid "handshake" (viewBox 0 0 640 512).
 */
const HANDSHAKE = `<svg viewBox="0 0 640 512" fill="${NAVY}" aria-hidden="true"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/></svg>`;

/** Icon SVG by course slug. Every slug has an entry — no fallback needed. */
export const COURSE_ICONS: Record<string, string> = {
  "quran-translation": BOOK_OPEN, // Font Awesome Free — book-open
  "noorani-qaida": BOOK_A, // Lucide — book-a
  "masnoon-duas": HANDS_PRAYING, // Font Awesome Free — hands-praying
  "salah-namaz": MOSQUE, // Font Awesome Free — mosque
  "islamic-studies": GRAD_CAP, // Font Awesome Free — graduation-cap
  "hifz-ul-quran": BOOK_READER, // Font Awesome Free — book-open-reader
  "tajweed": TAJWEED_TEXT, // Arabic calligraphy text
  "quran-reading-nazra": BOOK_BOOKMARK, // Font Awesome Free — book-bookmark
  "selected-surah-memorization": BOOK_QURAN, // Font Awesome Free — book-quran
  "six-kalimas": SIX_KALIMAS, // big "6" in navy circle
  "basic-arabic-learning": ARABIC_TEXT, // Arabic calligraphy text
  "quran-tafseer": MOSQUE_SKYLINE, // Tabler Icons — building-mosque
  "seerah": SEERAH_TEXT, // Arabic calligraphy text
  "islamic-manners-ethics": HANDSHAKE, // Font Awesome Free — handshake
};

/** Resolve the icon HTML for a course (override first, original icon as fallback). */
export function courseIcon(slug: string, fallback: string): string {
  return COURSE_ICONS[slug] ?? fallback;
}
