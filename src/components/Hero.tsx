import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  { lines: ["Live", "Online Classes"], icon: "monitor" },
  { lines: ["Kids &", "Adults"], icon: "people" },
  { lines: ["Flexible", "Timings"], icon: "globe" },
  { lines: ["Personalized", "Learning"], icon: "shield" },
] as const;

function FeatureIcon({ kind }: { kind: string }) {
  const cls = "h-[26px] w-[26px] shrink-0 text-navy";
  if (kind === "monitor")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    );
  if (kind === "people")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
        <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-2.2 0-6 1.1-6 3.5V19h12v-2.5C14 14.1 10.2 13 8 13zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 1.9 2 3.4V19h5v-2.5c0-2.4-3.8-3.5-6-3.5z" />
      </svg>
    );
  if (kind === "globe")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path d="M12 2 4 5.5v5.6c0 5 3.4 8.6 8 10.4 4.6-1.8 8-5.4 8-10.4V5.5L12 2zm-1.2 14.6-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
    </svg>
  );
}

/**
 * Hero — same layout as the approved design: script-free readable intro line,
 * "One-to-One Online" on line one and "Quran Classes" in red on line two,
 * bold "Qualified • Caring • Experienced Teachers", and the taller (5:4)
 * hero image — boy and girl with headphones at the laptop, logo on its lid.
 * The image is shown slightly smaller than full width (91%, max 545px),
 * with no zoom change.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky2 to-sky">
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 pb-14 pt-11 lg:grid-cols-2">
        <div>
          <div className="relative inline-block max-w-full">
            <p className="hero-intro text-[1.35rem] leading-snug text-navyDark">
              Help Your Child Learn the Holy Quran from Home
            </p>
            {/* Premium red swoosh underline, like the reference: a full-width
                curly line under the whole intro line, sagging gently down. */}
            <svg
              className="mt-1 block h-[12px] w-full"
              viewBox="0 0 600 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M3 5 C 150 12, 450 13, 597 4"
                stroke="#d00000"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h1 className="hero-headline mt-3 text-[clamp(2.5rem,5.2vw,4.1rem)] leading-[1.05] tracking-tight text-navy">
            <span className="whitespace-nowrap max-[1020px]:whitespace-normal">
              One-to-One Online
            </span>
            <span className="block text-brandRed">Quran Classes</span>
          </h1>
          <p className="mt-4 text-[1.15rem] font-extrabold text-navyDark">
            Qualified <span className="text-brandRed">•</span> Caring{" "}
            <span className="text-brandRed">•</span> Experienced Teachers
          </p>
          {/* Four features on ONE row at desktop widths (like the reference);
              they may wrap on mobile only. */}
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-3 lg:flex-nowrap lg:gap-x-3 xl:gap-x-4">
            {FEATURES.map((f) => (
              <li
                key={f.lines[1]}
                className="flex items-center gap-2 border-r border-line pr-3 text-[0.8rem] font-extrabold leading-tight text-navyDark last:border-r-0 last:pr-0 lg:pr-4 lg:text-[0.85rem]"
              >
                <FeatureIcon kind={f.icon} />
                <span>
                  <span className="block">{f.lines[0]}</span>
                  <span className="block">{f.lines[1]}</span>
                </span>
              </li>
            ))}
          </ul>
          {/* Buttons stay SIDE BY SIDE in one row on mobile too (smaller
              text/padding so both fit) — never stacked one above the other. */}
          <div className="mt-7 flex flex-nowrap items-center gap-2 sm:gap-4">
            <Link
              href="/contact"
              className="btn-trial inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brandRed px-4 py-2.5 text-[0.82rem] text-white shadow-card transition hover:brightness-90 max-[400px]:px-3 max-[400px]:text-[0.78rem] sm:px-7 sm:py-3 sm:text-[1.05rem]"
            >
              Start Your Free Trial Today <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-navy px-4 py-2.5 text-[0.82rem] font-extrabold text-navy transition hover:bg-sky max-[400px]:px-3 max-[400px]:text-[0.78rem] sm:px-6 sm:py-3 sm:text-[1.05rem]"
            >
              Explore Courses
            </Link>
          </div>
          <p className="mt-4 flex items-center gap-2 text-[0.92rem] font-bold text-muted">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-[18px] w-[18px] text-[#1faa55]" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            3-Day Absolutely FREE Trial Classes — no cost for the first three days.
          </p>
        </div>

        {/* Hero image — CLEAN, just the photo with a soft shadow, nothing
            drawn over it (no arcs, bands or lines — the user said they
            spoil the image). The exact same hero image, heads never
            cropped. */}
        <div className="relative mx-auto w-[91%] max-w-[545px] justify-self-center max-[640px]:w-[94%] max-[640px]:max-w-[480px]">
          <div className="relative z-10 overflow-hidden rounded-[24px] shadow-cardLg">
            <Image
              src="/hero.jpg"
              alt="A boy and a girl wearing headphones, learning Quran one-to-one online on a laptop"
              width={1760}
              height={1408}
              className="aspect-[1760/1408] w-full object-cover"
              priority
            />
          </div>
          {/* Floating badges — premium 3D glossy pills ON the photo, back
              by popular demand: "5+ Years Experience" bottom-LEFT and
              "One-to-One Online Classes" bottom-RIGHT. Both float on the
              photo at every screen size (never below it) and sit on the
              bottom corners — over the boy's arm / table (left) and the
              girl's sleeve / table (right) — so they NEVER cover the
              children's faces. Glossy 3D = white gradient, top highlight,
              deep layered shadow, slight tilt, coloured icon tile. */}
          <div className="hero-badge absolute -left-2 bottom-3 z-20 flex -rotate-1 items-center gap-2.5 rounded-2xl px-3.5 py-2.5 max-[640px]:gap-1.5 max-[640px]:px-2.5 max-[640px]:py-1.5 transition hover:-translate-y-0.5 sm:-left-3 sm:bottom-5 sm:gap-3 sm:px-4">
            <span className="badge-tile flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white max-[640px]:h-6 max-[640px]:w-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 max-[640px]:h-3.5 max-[640px]:w-3.5" aria-hidden="true">
                <path d="M12 3 2 8l10 5 10-5-10-5zM6 13.5V18c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5l-6 3-6-3z" />
              </svg>
            </span>
            <span>
              <b className="block whitespace-nowrap text-navyDark max-[640px]:text-[0.7rem]">5+ Years Experience</b>
              <span className="text-xs font-bold text-muted max-[640px]:hidden">of Teaching Experience</span>
            </span>
          </div>
          <div className="hero-badge absolute -right-2 bottom-3 z-20 flex rotate-1 items-center gap-2.5 rounded-2xl px-3.5 py-2.5 max-[640px]:gap-1.5 max-[640px]:px-2.5 max-[640px]:py-1.5 transition hover:-translate-y-0.5 sm:bottom-5 sm:gap-3 sm:px-4">
            <span className="badge-tile badge-tile-red flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white max-[640px]:h-6 max-[640px]:w-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 max-[640px]:h-3.5 max-[640px]:w-3.5" aria-hidden="true">
                <path d="M12 2 4 5.5v5.6c0 5 3.4 8.6 8 10.4 4.6-1.8 8-5.4 8-10.4V5.5L12 2zm-1.2 14.6-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
              </svg>
            </span>
            <span>
              <b className="block whitespace-nowrap text-navyDark max-[640px]:text-[0.7rem]">One-to-One Online Classes</b>
              <span className="text-xs font-bold text-muted max-[640px]:hidden">Full teacher attention, every lesson</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
