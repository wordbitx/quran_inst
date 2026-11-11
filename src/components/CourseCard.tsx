import Link from "next/link";
import type { Course } from "@/lib/data";
import { courseIcon } from "@/lib/icons";

/** Courses with their own cropped icon photo in public/icons/<slug>.png. */
const PHOTO_ICON_SLUGS = new Set([
  "quran-translation",
  "noorani-qaida",
  "masnoon-duas",
  "salah-namaz",
  "islamic-studies",
  "hifz-ul-quran",
  "quran-reading-nazra",
  "selected-surah-memorization",
  "quran-tafseer",
  "islamic-manners-ethics",
]);

/**
 * CourseCard — photo-style card. The top area shows the course's own
 * icon from /icons/<slug>.png (object-cover); the four courses without
 * a PNG keep their existing vector / calligraphy icon instead, so no
 * card ever shows a broken image. A red circular arrow sits at the
 * bottom-right. The whole card is tappable and is always visible on
 * load — never hidden in a scroll-reveal state.
 */
export default function CourseCard({ course }: { course: Course }) {
  const hasPhoto = PHOTO_ICON_SLUGS.has(course.slug);
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-cardBorder bg-white shadow-[0_3px_12px_rgba(0,51,140,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-cardLg focus-visible:outline-none"
    >
      <span className="relative block h-44 w-full overflow-hidden bg-sky">
        {hasPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/icons/${course.slug}.png`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center text-navy [&_svg]:h-24 [&_svg]:w-24 [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: courseIcon(course.slug, course.icon) }}
            aria-hidden="true"
          />
        )}
        <span className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-navy/15 to-transparent" aria-hidden="true" />
      </span>
      <span className="flex flex-1 flex-col p-5">
        <span className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-display text-[1.08rem] font-extrabold leading-snug text-navyDark">
              {course.name}
            </span>
            <span className="mt-1 block font-sans text-[0.88rem] leading-relaxed text-muted">
              {course.tag}
            </span>
          </span>
        </span>
        <span className="mt-4 flex items-center justify-between">
          <span className="font-sans text-[0.88rem] font-bold text-brandRed">
            View Course
          </span>
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brandRed text-white shadow-card transition duration-300 group-hover:scale-110 group-hover:bg-navy"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </span>
      </span>
    </Link>
  );
}
