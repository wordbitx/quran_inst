import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CourseTrialButton from "@/components/CourseTrialButton";
import TrialForm from "@/components/TrialForm";
import { COURSES, COURSE_MAP } from "@/lib/data";
import { courseIcon } from "@/lib/icons";
import { trialMessageForCourse, whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = COURSE_MAP[params.slug];
  if (!course) return { title: "Course — Quran Light Institute" };
  return {
    title: `${course.name} — Quran Light Institute`,
    description: course.tag,
  };
}

const INCLUDES = [
  "Live one-to-one online classes with full teacher attention",
  "Qualified, caring male & female teachers",
  "Flexible timings for your routine & time zone",
  "Regular progress monitoring & personalized guidance",
  "5+ years of teaching experience",
];

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = COURSE_MAP[params.slug];
  if (!course) notFound();

  const others = COURSES.filter((c) => c.slug !== course.slug);

  return (
    <>
      <div className="bg-gradient-to-b from-navyDark to-navy py-10 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-bold text-[#b7cff2]">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href="/courses" className="hover:text-white">
              Courses
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span>{course.name}</span>
          </p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{course.name}</h1>
          <p className="mt-2 max-w-2xl text-[#d7e3f5]">{course.tag}</p>
        </div>
      </div>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex items-start gap-4">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky text-navy [&_svg]:h-12 [&_svg]:max-w-full"
                dangerouslySetInnerHTML={{ __html: courseIcon(course.slug, course.icon) }}
                aria-hidden="true"
              />
              <div>
                <h2 className="text-2xl font-extrabold text-navyDark">About This Course</h2>
                <p className="mt-1 font-bold text-navy">{course.tag}</p>
              </div>
            </div>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              {course.desc.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-extrabold text-navyDark">What You Will Learn</h2>
            <ul className="mt-4 space-y-3">
              {course.learn.map((item) => (
                <li key={item} className="flex items-start gap-3 font-semibold text-navyDark">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e7f9ee] text-[#0d6e35]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-navyDark">
              Who Is This Course For?
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{course.who}</p>

            <h2 className="mt-10 text-2xl font-extrabold text-navyDark">Every Course Includes</h2>
            <ul className="mt-4 space-y-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 font-semibold text-navyDark">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e7f9ee] text-[#0d6e35]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-card border border-cardBorder bg-redSoft p-6">
              <h2 className="text-xl font-extrabold text-navyDark">Try This Course FREE</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                3-Day Absolutely FREE Trial Classes — experience real one-to-one lessons with no
                cost for the first three days.
              </p>
              <CourseTrialButton courseName={course.name} />
              <a
                href={whatsappUrl(trialMessageForCourse(course.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center font-bold text-navy hover:underline"
              >
                or ask us on WhatsApp →
              </a>
            </div>
            <TrialForm defaultCourse={course.name} />
          </aside>
        </div>
      </section>

      <section className="bg-sky2 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-extrabold text-navyDark">Explore Other Courses</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="flex items-center justify-between rounded-2xl border border-cardBorder bg-white px-5 py-4 font-bold text-navyDark shadow-[0_3px_12px_rgba(6,36,83,0.05)] transition hover:-translate-y-0.5 hover:shadow-card"
              >
                {c.name}
                <span aria-hidden="true" className="text-brandRed">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
