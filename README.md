# Quran Light Institute

Professional multi-page website for **Quran Light Institute** — live one-to-one
online Quran classes for kids and adults, with qualified male and female teachers.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. This is a real
project with proper routes, shared components and a data layer — not a single
HTML file.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, Our Specialities (14 courses), Additional Specialities, trust band |
| `/about` | About — 5+ years of teaching experience, how it works (3 steps) |
| `/courses` | All 14 courses |
| `/courses/[slug]` | One page per course (14 pages): about, what you will learn, who it is for, free-trial box |
| `/teachers` | Qualified, caring & experienced teachers |
| `/testimonials` | Testimonials (no invented reviews — the free trial is the proof) |
| `/faqs` | Frequently asked questions (accordion) |
| `/contact` | Contact cards + 3-day FREE trial form |

## The 14 courses

Noorani Qaida · Quran Reading (Nazra) · Tajweed · Hifz-ul-Quran · Quran
Translation · Quran Tafseer · Selected Surah Memorization · Six Kalimas ·
Masnoon Duas · Salah (Namaz) · Islamic Studies · Basic Arabic Learning ·
Seerah of Prophet Muhammad ﷺ · Islamic Manners & Ethics

Course copy lives in `src/lib/data.ts` and was taken verbatim from the
previous site. No prices, durations, teacher names, testimonials or statistics
were invented.

## Contact (used everywhere)

- Phone / WhatsApp: **+92 305 6622104** (`wa.me/923056622104`)
- Email: **info@quranlightinstitute.com**

The trial form opens WhatsApp with a pre-filled message to that number.
Nothing is stored on a server.

## Images (`public/`)

- `logo.jpg` — the client's real circular logo, used as-is (never redrawn)
- `hero.jpg` — hero photo, 1760×1408 (boy and girl with headphones at the
  laptop, logo on its lid, mosque behind), cropped from the client's own design
- `about.webp` — photo used on the About page

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

Any Next.js host works (e.g. Vercel: import the repo, framework preset
Next.js, no extra settings). The trial form needs no backend — it hands off
to WhatsApp.
