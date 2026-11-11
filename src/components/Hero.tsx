import Image from "next/image";
import Link from "next/link";
import TrialForm from "@/components/TrialForm";

/**
 * Hero — Minha-style split hero on pale cream/white.
 * Left: eyebrow, headline with "One-to-One Online" in red, supporting
 * line, two buttons side by side in one row. Right: a realistic photo photo.
 * The compact translucent TrialForm card ("3 Free Trial Classes")
 * overlaps the bottom of the hero.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdf9ef]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-12 lg:grid-cols-2 lg:pb-24 lg:pt-16">
        <div className="min-w-0">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brandRed">
            Welcome to Quran Light Institute
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.4rem,5.2vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-navy">
            <span className="text-brandRed">One-to-One Online</span>
            <span className="block">Quran Classes</span>
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[1.1rem] leading-relaxed text-muted">
            Live one-to-one online Quran classes for kids and adults — with
            qualified, caring male and female teachers, flexible timings for
            your routine and time zone, and 3-day absolutely FREE trial
            classes.
          </p>
          {/* Buttons stay SIDE BY SIDE in one row on mobile too (smaller
              text/padding so both fit) — never stacked one above the other. */}
          <div className="mt-7 flex flex-nowrap items-center gap-2 sm:gap-4">
            <Link
              href="#trial"
              className="btn-trial inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brandRed px-4 py-2.5 text-[0.85rem] font-extrabold text-white shadow-card transition hover:brightness-90 max-[400px]:px-3 max-[400px]:text-[0.78rem] sm:px-7 sm:py-3.5 sm:text-[1.05rem]"
            >
              Start Your Free Trial <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-navy bg-white/60 px-4 py-2.5 text-[0.85rem] font-extrabold text-navy transition hover:bg-sky max-[400px]:px-3 max-[400px]:text-[0.78rem] sm:px-6 sm:py-3.5 sm:text-[1.05rem]"
            >
              View Courses
            </Link>
          </div>
          <p className="mt-5 flex items-center gap-2 font-sans text-[0.92rem] font-bold text-muted">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-[18px] w-[18px] shrink-0 text-[#1faa55]" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            3-Day Absolutely FREE Trial Classes — no cost for the first three days.
          </p>
        </div>

        {/* Hero image — CLEAN, just the photo with a soft shadow, nothing
            drawn over it. The exact same hero image, heads never cropped. */}
        <div className="relative mx-auto w-full max-w-[560px] justify-self-center">
          <div className="overflow-hidden rounded-[24px] shadow-cardLg">
            <Image
              src="https://images.pexels.com/photos/34481773/pexels-photo-34481773.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="A woman in a hijab reading the Holy Quran on a prayer rug in a mosque"
              width={1760}
              height={1408}
              className="aspect-[1760/1408] w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Trial form card overlapping the hero — translucent white so the
          cream hero shows faintly through the edges. */}
      <div id="trial" className="relative z-10 mx-auto -mt-4 max-w-3xl scroll-mt-24 px-4 pb-14 lg:-mt-10">
        <div className="rounded-card border border-white/60 bg-white/85 shadow-cardLg backdrop-blur-md">
          <TrialForm />
        </div>
      </div>
    </section>
  );
}
