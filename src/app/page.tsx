import Link from "next/link";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import TrustBand from "@/components/TrustBand";
import { ADDITIONAL_SPECIALITIES, COURSES } from "@/lib/data";

// Where each "Why Families Choose Us" box links to — same order as
// ADDITIONAL_SPECIALITIES, existing pages only.
const SPECIALITY_HREFS = [
  "/courses", // Live One-to-One Online Classes
  "/teachers", // Qualified Male & Female Teachers
  "/courses", // Classes for Kids & Adults
  "/contact", // Flexible Class Timings
  "/courses/islamic-manners-ethics", // Islamic Manners & Ethics
  "/courses/six-kalimas", // Six Kalimas
  "/courses/selected-surah-memorization", // Selected Surah Memorization
  "/courses/basic-arabic-learning", // Basic Arabic Learning
  "/courses/quran-tafseer", // Quran Tafseer
  "/courses/seerah", // Seerah of Prophet Muhammad
  "/about", // Student Progress Monitoring
  "/contact", // 3-Day Absolutely FREE Trial Classes
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Our Specialities — the 14 courses */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-4">
              <span className="h-[2px] w-14 rounded-full bg-brandRed sm:w-28" aria-hidden="true" />
              <span className="inline-flex items-center gap-3 rounded-full bg-navy px-6 py-2.5 text-xl font-extrabold text-white">
                Our Specialities
              </span>
              <span className="h-[2px] w-14 rounded-full bg-brandRed sm:w-28" aria-hidden="true" />
            </span>
            <p className="mt-5 leading-relaxed text-muted">
              Everything your child — or you — need to read, understand and love the Holy Quran,
              taught step by step with proper Tajweed. Tap any course to open its page.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 lg:gap-3">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-extrabold text-white transition hover:bg-navy2"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Specialities */}
      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">
              Why Families Choose Us
            </h2>
            <p className="mt-3 text-lg font-bold text-navy">Additional Specialities</p>
            <p className="mt-2 leading-relaxed text-muted">
              More than lessons — a complete, caring learning experience for every student,
              wherever in the world you live. Tap any box to open its page.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_SPECIALITIES.map((s, i) => (
              <Link
                key={s.title}
                href={SPECIALITY_HREFS[i] ?? "/courses"}
                className="group block rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(6,36,83,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <h3 className="text-lg font-extrabold text-navyDark">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[0.9rem] font-bold text-brandRed opacity-0 transition group-hover:opacity-100">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustBand />


      <div className="border-t border-line py-6 text-center">
        <p className="px-4 text-[1.15rem] font-bold italic text-navyDark">
          Quran Light Institute — Spreading the Light of Quran Worldwide
        </p>
      </div>
    </>
  );
}
