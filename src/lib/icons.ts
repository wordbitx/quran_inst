// Course icons — CLEAN HAND-DRAWN SVG VECTORS, recreated as-it-is from the
// client's own reference design ("Our Specialities" grid in
// WhatsApp_Image_2026-11-09_at_2.25.26_PM.jpeg), studied zoomed-in.
// Every icon is inline SVG, so it stays razor-sharp at any size — no raster
// images anywhere (the earlier cropped PNGs were pixelated, so they were
// deleted and replaced by vectors, then redrawn a second time for fidelity).
// data.ts is untouched.
// - 11 pictorial icons are pure SVG shapes in deep navy (currentColor) with
//   red (#E0231C) accents for ribbons/crescents.
// - Tajweed, Basic Arabic Learning and Seerah are Arabic calligraphy rendered
//   as SVG <text> (vector text, not an image). Seerah (محمد ﷺ) is kept
//   exactly as the user confirmed it.
// - Six Kalimas is the big white "6" in a navy circle, as in the reference.

const NAVY = "currentColor";
const RED = "#E0231C";
const WHITE = "#ffffff";

/**
 * Open book, glossy 3D — Quran Translation.
 * Left page solid navy, right page a lighter blue gradient (gloss), white
 * page lines, a white gloss highlight sweeping across the top edge.
 */
const BOOK_GLOSSY = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><defs><linearGradient id="bookGloss" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a86e8"/><stop offset=".55" stop-color="#1a5fc0"/><stop offset="1" stop-color="#0b3d91"/></linearGradient></defs><path d="M32 13C26 9 14 8 5 11v36c9-3 21-2 27 2 6-4 18-5 27-2V11c-9-3-21-2-27 2z"/><path d="M32 13c6-4 18-5 27-2v36c-9-3-21-2-27 2V13z" fill="url(#bookGloss)"/><path d="M32 13v36" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M10 20h13M10 26h13M10 32h13" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".9" fill="none"/><path d="M41 20h13M41 26h13M41 32h13" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".9" fill="none"/><path d="M9 12c7-2.4 15-2.4 23 1 8-3.4 16-3.4 23-1" stroke="${WHITE}" stroke-width="2.2" stroke-linecap="round" opacity=".5" fill="none"/></svg>`;

/**
 * Letter blocks with A / a / 3 — Noorani Qaida.
 * Three rounded blocks in a pyramid, each with a darker base edge for depth.
 */
const LETTER_BLOCKS = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><rect x="21" y="4" width="22" height="20" rx="4"/><rect x="6" y="28" width="22" height="20" rx="4"/><rect x="36" y="28" width="22" height="20" rx="4"/><path d="M21 20a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-2H21zM6 44a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-2H6zM36 44a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-2H36z" fill="#041a3d" opacity=".45"/><text x="32" y="19.5" text-anchor="middle" font-size="13" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">A</text><text x="17" y="43.5" text-anchor="middle" font-size="13" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">a</text><text x="47" y="43.5" text-anchor="middle" font-size="13" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">3</text></svg>`;

/**
 * Praying hands — Masnoon Duas.
 * Two broad mirrored palms leaning together, fingertips meeting at the
 * top, finger separations as white lines, thumbs crossing near the base,
 * sleeve cuffs at the bottom.
 */
const PRAYING_HANDS = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M30 5C22 9 16 19 14.5 30 13.2 40 15 50 19.5 57L30 57z"/><path d="M34 5c8 4 14 14 15.5 25 1.3 10-.5 20-5 27L34 57z"/><path d="M25.5 13c-2.2 9-3 19-1.8 30M28.5 10c-1.6 10-2.2 21-1.2 33M38.5 13c2.2 9 3 19 1.8 30M35.5 10c1.6 10 2.2 21 1.2 33" stroke="${WHITE}" stroke-width="1.2" opacity=".55" fill="none"/><path d="M24 6.5 23 17M27 5.5 26.5 16M40 6.5 41 17M37 5.5 37.5 16" stroke="${WHITE}" stroke-width="1.2" opacity=".7" fill="none"/><rect x="15" y="56" width="14" height="7" rx="2"/><rect x="35" y="56" width="14" height="7" rx="2"/></svg>`;

/**
 * Mosque with onion dome, red crescent and minaret — Salah (Namaz).
 */
const MOSQUE = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path fill="${RED}" d="M35.5 1.5A5.2 5.2 0 1 0 35.5 12 6.4 6.4 0 0 1 35.5 1.5z"/><circle cx="32" cy="13.5" r="1.7"/><path d="M32 16c-7.5 0-13 5.2-13 12.5V31h26v-2.5C45 21.2 39.5 16 32 16z"/><path d="M12.5 25.5c-3.4 0-5.5 2.4-5.5 5.5V33h11v-2c0-3.1-2.1-5.5-5.5-5.5z"/><path d="M16 31h32v17H16z"/><rect x="50" y="18" width="6.5" height="31" rx="1.5"/><path d="M49 18l4.2-7 4.3 7z"/><rect x="47.5" y="27" width="11.5" height="2.6" rx="1.3"/><path d="M6 48h52v10H6z"/><path d="M28 58V41a4 4 0 0 1 8 0v17z" fill="${WHITE}"/><path d="M21 42v-3.5a3 3 0 0 1 6 0V42zM37 42v-3.5a3 3 0 0 1 6 0V42z" fill="${WHITE}"/></svg>`;

/**
 * Graduation cap — Islamic Studies.
 * Diamond mortarboard, curved cap below, tassel hanging from the right
 * with a ball at the end.
 */
const GRAD_CAP = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 7 61 20.5 32 34 3 20.5z"/><path d="M20 28.5V39c0 5.2 5.4 8.5 12 8.5S44 44.2 44 39V28.5L32 35.5z"/><path d="M59 21v15.5" stroke="${NAVY}" stroke-width="2.6" fill="none"/><circle cx="59" cy="40.5" r="3.6"/><path d="M32 13.5 51 21" stroke="${WHITE}" stroke-width="1.6" stroke-linecap="round" opacity=".6" fill="none"/></svg>`;

/**
 * Open book, plain top view with page lines — Hifz-ul-Quran.
 */
const BOOK_PLAIN = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 12C26 8 14 7 5 10v36c9-3 21-2 27 2 6-4 18-5 27-2V10c-9-3-21-2-27 2z"/><path d="M32 12v36" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M11 20h14M11 26h14M11 32h14M39 20h14M39 26h14M39 32h14" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".85" fill="none"/><path d="M8 12c8-2.6 16-2.6 24 1 8-3.6 16-3.6 24-1" stroke="${WHITE}" stroke-width="2" stroke-linecap="round" opacity=".4" fill="none"/></svg>`;

/** Arabic calligraphy — Tajweed. */
const TAJWEED_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="42" text-anchor="middle" font-size="26" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="54" lengthAdjust="spacingAndGlyphs">تجويد</text></svg>`;

/**
 * Open book with small red bookmark ribbon — Quran Reading (Nazra).
 */
const BOOK_RIBBON_SMALL = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 11C26 7 14 6 5 9v36c9-3 21-2 27 2 6-4 18-5 27-2V9c-9-3-21-2-27 2z"/><path d="M32 11v36" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M11 19h14M11 25h14M11 31h14M39 19h14M39 25h14M39 31h14" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".85" fill="none"/><path d="M29.5 43h5v13l-2.5-2.8L29.5 56z" fill="${RED}"/></svg>`;

/**
 * Open book in perspective with white star and long red ribbon —
 * Selected Surah Memorization.
 */
const BOOK_STAR_RIBBON = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M32 11C26 7 14 6 5 9v34c9-3 21-2 27 2 6-4 18-5 27-2V9c-9-3-21-2-27 2z"/><path d="M32 11v34" stroke="${WHITE}" stroke-width="1.6" fill="none"/><path d="M39 18h13M39 24h13M39 30h13" stroke="${WHITE}" stroke-width="1.5" stroke-linecap="round" opacity=".85" fill="none"/><path d="M19 16l1.7 3.4 3.8.6-2.7 2.7.6 3.8-3.4-1.8-3.4 1.8.6-3.8-2.7-2.7 3.8-.6z" fill="${WHITE}"/><path d="M29.5 41h5v19l-2.5-3-2.5 3z" fill="${RED}"/></svg>`;

/** Big white "6" in a navy circle — Six Kalimas. */
const SIX_KALIMAS = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="${NAVY}"/><text x="32" y="46" text-anchor="middle" font-size="38" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">6</text></svg>`;

/** Arabic calligraphy — Basic Arabic Learning. */
const ARABIC_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="42" text-anchor="middle" font-size="25" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="52" lengthAdjust="spacingAndGlyphs">أخلاق</text></svg>`;

/**
 * Mosque skyline with two minarets — Quran Tafseer.
 * Central onion dome with crescent, tall minarets left and right with
 * pointed caps, small side domes, arched windows, base platform.
 */
const MOSQUE_SKYLINE = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><rect x="8" y="24" width="5" height="26" rx="1"/><path d="M7 24l3.5-6 3.5 6z"/><rect x="51" y="24" width="5" height="26" rx="1"/><path d="M50 24l3.5-6 3.5 6z"/><path d="M32 15c-7 0-12 4.8-12 10.5V28h24v-2.5C44 19.8 39 15 32 15z"/><circle cx="32" cy="10.5" r="2"/><path d="M20 26.5c-3 0-5 2.2-5 5V33h10v-1.5c0-2.8-2-5-5-5zM44 26.5c-3 0-5 2.2-5 5V33h10v-1.5c0-2.8-2-5-5-5z"/><path d="M5 48h54v10H5z"/><path d="M28.5 58V46a3.5 3.5 0 0 1 7 0v12z" fill="${WHITE}"/><path d="M12 50v-2.4a2.4 2.4 0 0 1 4.8 0V50zM47.2 50v-2.4a2.4 2.4 0 0 1 4.8 0V50z" fill="${WHITE}"/></svg>`;

/** Arabic calligraphy — Seerah of Prophet Muhammad ﷺ (user-confirmed text). */
const SEERAH_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="56" lengthAdjust="spacingAndGlyphs">محمد ﷺ</text></svg>`;

/**
 * Handshake — Islamic Manners & Ethics.
 * Two cuffs coming in from the sides, clasped hands in the centre with
 * finger separations and thumbs.
 */
const HANDSHAKE = `<svg viewBox="0 0 64 64" fill="${NAVY}" aria-hidden="true"><path d="M2 24l14 2 3.5 3.5-2 4L3 36z"/><path d="M62 24l-14 2-3.5 3.5 2 4L61 36z"/><path d="M20 27c1.5-1.7 4-2.4 6.3-1.6l2.8 1c1.4.5 3 .4 4.3-.4l2.1-1.2c2.3-1.3 5.2-.9 7.1 1.1l1.6 1.7c1.2 1.3 1.3 3.2.2 4.6l-2.1 2.6c-.5.6-1.2.9-1.9.7l-.5-.2-1.2 1.5c-.7.9-1.8 1.1-2.8.5l-.4-.3-1.2 1.5c-.7.9-1.8 1.1-2.8.5l-.4-.3-1.2 1.5c-.7.9-1.8 1.1-2.8.5l-.4-.3-1.2 1.5c-.8.9-2 1-2.9.3l-3.3-2.9c-1.4-1.3-1.7-3.4-.6-5.1l1.3-2.1c.5-.8.6-1.7.2-2.5z"/><path d="M26.5 28.5l2.8 4M32 27l2.8 4.5M37.5 28l2.3 4" stroke="${WHITE}" stroke-width="1.3" stroke-linecap="round" fill="none"/></svg>`;

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
