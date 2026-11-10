// Course icons — cropped DIRECTLY from the client's own reference design
// ("Our Specialities" grid in WhatsApp_Image_2026-11-09_at_2.25.26_PM.jpeg),
// NOT hand-drawn. Each icon was cropped tightly from the reference grid and
// its white background removed to transparency (strong-saturation threshold,
// which also drops the desaturated navy title text that sits under the icons
// in the poster). Saved as transparent PNGs in public/icons/<slug>.png.
//
// - 13 icons are cropped PNGs: quran-translation, noorani-qaida, masnoon-duas,
//   salah-namaz, islamic-studies, hifz-ul-quran, tajweed, quran-reading-nazra,
//   selected-surah-memorization (incl. its small red ribbon), six-kalimas
//   (the big blue "6" circle, white 6 shows the card behind it),
//   basic-arabic-learning, quran-tafseer, islamic-manners-ethics (handshake).
// - Seerah is NOT in this map on purpose: it falls back to the original
//   icon in data.ts (محمد ﷺ), left exactly as it was, pending the user's
//   exact instruction on the ﷺ rendering.
// - No icon here is a hand-drawn SVG or a generic emoji. data.ts is untouched.

const img = (slug: string) =>
  `<img src="/icons/${slug}.png" alt="" style="height:48px;width:auto;max-width:60px;object-fit:contain;display:block" />`;

/** Icon HTML by course slug. Absent slugs fall back to course.icon in data.ts. */
export const COURSE_ICONS: Record<string, string> = {
  "quran-translation": img("quran-translation"),
  "noorani-qaida": img("noorani-qaida"),
  "masnoon-duas": img("masnoon-duas"),
  "salah-namaz": img("salah-namaz"),
  "islamic-studies": img("islamic-studies"),
  "hifz-ul-quran": img("hifz-ul-quran"),
  "tajweed": img("tajweed"),
  "quran-reading-nazra": img("quran-reading-nazra"),
  "selected-surah-memorization": img("selected-surah-memorization"),
  "six-kalimas": img("six-kalimas"),
  "basic-arabic-learning": img("basic-arabic-learning"),
  "quran-tafseer": img("quran-tafseer"),
  // seerah: intentionally absent — falls back to the original محمد ﷺ icon in data.ts
  "islamic-manners-ethics": img("islamic-manners-ethics"),
};

/** Resolve the icon HTML for a course (override first, original icon as fallback). */
export function courseIcon(slug: string, fallback: string): string {
  return COURSE_ICONS[slug] ?? fallback;
}
