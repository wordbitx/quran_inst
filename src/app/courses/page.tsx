import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CourseCard from "@/components/CourseCard";
import { COURSES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Courses — Quran Light Institute",
  description:
    "Fourteen courses for kids and adults — from the very first Qaida lesson to Tajweed, Hifz and Tafseer. Open any course to see what you will learn.",
};

export default function CoursesPage() {
  return (
    <>
      <PageBanner
        crumb="Courses"
        title="Our Courses"
        sub="Fourteen courses for kids & adults — from the very first Qaida lesson to Tajweed, Hifz and Tafseer. Open any course to see what you will learn."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 rounded-full bg-navy px-6 py-2.5 font-display text-xl font-extrabold text-white">
              Our Specialities
            </span>
            <p className="mt-5 font-sans leading-relaxed text-muted">
              Every course is taught live, one-to-one, by a qualified male or
              female teacher — at timings that suit your routine and time zone.
            </p>
          </div>
          {/* Course cards are always visible on load — never hidden in a
              scroll-reveal state. */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-card border border-cardBorder bg-sky2 p-8 text-center">
            <h2 className="font-display text-2xl font-extrabold text-navyDark">
              Not sure which course is right?
            </h2>
            <p className="mt-3 font-sans leading-relaxed text-muted">
              Start with the <strong className="text-navyDark">3-Day Absolutely FREE Trial Classes</strong> —
              meet the teacher, attend real one-to-one lessons, and we will guide you to the right
              course for your level.
            </p>
            <Link
              href="/contact"
              className="btn-trial mt-6 inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
            >
              Book Your FREE Trial →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
