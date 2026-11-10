import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  { label: "Live Online Classes", icon: "monitor" },
  { label: "Kids & Adults", icon: "people" },
  { label: "Flexible Timings", icon: "globe" },
  { label: "Personalized Learning", icon: "shield" },
] as const;

function FeatureIcon({ kind }: { kind: string }) {
  const cls = "h-[30px] w-[30px] shrink-0 text-navy";
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
          <p className="text-[1.35rem] font-bold leading-snug text-navyDark">
            Help Your Child Learn the Holy Quran from Home
          </p>
          <h1 className="mt-3 text-[clamp(2.5rem,5.2vw,4.1rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
            <span className="whitespace-nowrap max-[1020px]:whitespace-normal">
              One-to-One Online
            </span>
            <span className="block text-brandRed">Quran Classes</span>
          </h1>
          <p className="mt-4 text-[1.15rem] font-extrabold text-navyDark">
            Qualified <span className="text-brandRed">•</span> Caring{" "}
            <span className="text-brandRed">•</span> Experienced Teachers
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
            {FEATURES.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-2 border-r border-line pr-4 text-[0.92rem] font-extrabold text-navyDark last:border-r-0 last:pr-0"
              >
                <FeatureIcon kind={f.icon} />
                {f.label}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-trial inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-4 text-[1.1rem] text-white shadow-card transition hover:bg-redDark"
            >
              Start Your Free Trial Today <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3.5 text-[1.05rem] font-extrabold text-navy transition hover:bg-sky"
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

        <div className="relative mx-auto w-[91%] max-w-[545px] justify-self-center max-[640px]:w-[94%] max-[640px]:max-w-[480px]">
          <div className="overflow-hidden rounded-[24px] border-[5px] border-white shadow-cardLg">
            <Image
              src="/hero.jpg"
              alt="A boy and a girl wearing headphones, learning Quran one-to-one online on a laptop"
              width={1760}
              height={1408}
              className="aspect-[1760/1408] w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -left-3 bottom-5 flex items-center gap-3 rounded-2xl border border-cardBorder bg-white px-4 py-2.5 shadow-cardLg max-[640px]:static max-[640px]:mt-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-redSoft text-brandRed">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M12 2 4 5.5v5.6c0 5 3.4 8.6 8 10.4 4.6-1.8 8-5.4 8-10.4V5.5L12 2zm-1.2 14.6-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
              </svg>
            </span>
            <span>
              <b className="block text-navyDark">Live One-to-One Classes</b>
              <span className="text-xs font-bold text-muted">Full teacher attention, every lesson</span>
            </span>
          </div>
          <div className="absolute -right-2 top-4 hidden items-center gap-3 rounded-2xl border border-cardBorder bg-white px-4 py-2.5 shadow-cardLg sm:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky text-navy">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M12 3 2 8l10 5 10-5-10-5zM6 13.5V18c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5l-6 3-6-3z" />
              </svg>
            </span>
            <span>
              <b className="block text-navyDark">5+ Years</b>
              <span className="text-xs font-bold text-muted">of Teaching Experience</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
