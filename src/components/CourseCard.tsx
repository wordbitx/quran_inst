import Link from "next/link";
import type { Course } from "@/lib/data";
import { courseIcon } from "@/lib/icons";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="spec-card group flex flex-col items-center rounded-card border border-cardBorder bg-white px-2 py-4 text-center shadow-[0_3px_12px_rgba(6,36,83,0.05)] transition hover:-translate-y-1 hover:shadow-card"
    >
      <span
        className="ic flex h-[4.25rem] w-[4.25rem] items-center justify-center text-navy [&_svg]:h-14 [&_svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: courseIcon(course.slug, course.icon) }}
        aria-hidden="true"
      />
      <h3 className="mt-2 text-[1.02rem] font-extrabold leading-snug text-navyDark">
        {course.name}
      </h3>
      <span className="mt-1 inline-flex items-center gap-1 text-[0.85rem] font-bold text-brandRed opacity-0 transition group-hover:opacity-100">
        View Course
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
