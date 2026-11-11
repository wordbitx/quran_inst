import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const STEPS = [
  {
    n: 1,
    title: "Book Your Free Trial",
    text: "Call or WhatsApp us and book your 3-day absolutely FREE trial classes.",
    src: "/hero.jpg",
    alt: "A boy and a girl learning Quran one-to-one online on a laptop",
    position: "object-top",
    phone: true,
  },
  {
    n: 2,
    title: "Meet Your Teacher",
    text: "Join your live one-to-one online class at a time that suits your routine and time zone, with a qualified male or female teacher.",
    src: "/about.webp",
    alt: "A girl learning the Holy Quran online with her teacher",
    position: "object-center",
    phone: false,
  },
  {
    n: 3,
    title: "Start Learning One-to-One",
    text: "Learn step by step with your teacher's full attention in every live one-to-one lesson — from your very first Qaida lesson to Tajweed, Hifz and Tafseer.",
    src: "/hero.jpg",
    alt: "Students learning Quran one-to-one online on a laptop",
    position: "object-bottom",
    phone: false,
  },
  {
    n: 4,
    title: "Track Progress",
    text: "We monitor every student's progress with regular assessments and personalized guidance, so parents always know how their child is improving.",
    src: "/about.webp",
    alt: "A student learning the Holy Quran online with her teacher",
    position: "object-[70%_30%]",
    phone: false,
  },
];

/**
 * Steps — 4 steps as FULL-PHOTO cards: the photo fills the card, a dark
 * gradient rises from the bottom, and the step number, title and text sit
 * over the photo in white. Hover zooms the photo and sweeps a shine
 * across the card. The two photos are reused with different
 * object-position crops so no two cards look alike.
 */
export default function Steps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s) => (
        <li
          key={s.n}
          className="group relative min-h-[320px] overflow-hidden rounded-card shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-cardLg"
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover ${s.position} transition duration-700 ease-out group-hover:scale-110`}
          />
          {/* Dark gradient rising from the bottom */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/95 via-[#001a4d]/55 to-transparent"
            aria-hidden="true"
          />
          {/* Shine sweep on hover */}
          <div
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            aria-hidden="true"
          />
          <div className="relative flex h-full flex-col justify-end p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brandRed font-display text-lg font-extrabold text-white shadow-card">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-xl font-extrabold leading-snug text-white">
              {s.title}
            </h3>
            <p className="mt-2 font-sans text-[0.93rem] leading-relaxed text-white/90">
              {s.text}{" "}
              {s.phone ? (
                <Link href={PHONE_TEL} className="font-bold text-white underline decoration-white/60 underline-offset-2 hover:text-white">
                  {PHONE_DISPLAY}
                </Link>
              ) : null}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
