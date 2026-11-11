import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Steps from "@/components/Steps";
import { ADDITIONAL_SPECIALITIES, COURSES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — Quran Light Institute",
  description:
    "Quran Light Institute is an online Quran academy helping children and adults around the world learn the Holy Quran from home, with 5+ years of teaching experience.",
};

const POINTS = [
  "Qualified Teachers",
  "Male & Female Tutors",
  "Classes for Kids & Adults",
  "Student Progress Monitoring",
  "Flexible Timings, Any Time Zone",
  "3-Day FREE Trial Classes",
];

const STATS = [
  { value: "5+", label: "Years Teaching Experience" },
  { value: String(COURSES.length), label: "Courses" },
  { value: String(ADDITIONAL_SPECIALITIES.length), label: "Specialities" },
  { value: "3-Day", label: "FREE Trial" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        crumb="About Us"
        title="About Quran Light Institute"
        sub="Learn Quran online with Tajweed — from the comfort of your home, anywhere in the world."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] border-[5px] border-white shadow-cardLg">
              <Image
                src="https://images.pexels.com/photos/34407214/pexels-photo-34407214.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="A mother and daughter reading the Holy Quran together in a mosque"
                width={1920}
                height={1280}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 w-40 overflow-hidden rounded-[20px] border-4 border-white shadow-cardLg sm:w-52">
              <Image
                src="https://images.pexels.com/photos/29183999/pexels-photo-29183999.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Prayer beads resting on an ornate Holy Quran"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 right-4 rounded-2xl bg-navy px-5 py-4 text-white shadow-cardLg">
              <p className="font-display text-3xl font-extrabold leading-none">5+</p>
              <p className="mt-1 text-sm font-bold">Years Teaching Experience</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-brandRed">
              Who We Are
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-navyDark sm:text-4xl">
              Quality Islamic &amp; Quranic Education for Everyone
            </h2>
            <p className="mt-4 font-sans leading-relaxed text-muted">
              Quran Light Institute is an online Quran academy with a simple mission: to bring
              authentic Quranic and Islamic education to every home, wherever in the world it
              may be. Our qualified and caring male &amp; female teachers give every student
              their full, personal attention in live one-to-one classes — so children and
              adults alike can learn the Holy Quran correctly, confidently and with love.
            </p>
            <p className="mt-3 font-sans leading-relaxed text-muted">
              From a child&apos;s very first Noorani Qaida lesson to advanced Tajweed,
              memorization and Tafseer, we follow a clear, step-by-step path — with regular
              progress monitoring so parents always know how their child is doing.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2 font-bold text-navyDark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn-trial mt-8 inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
            >
              Book Your FREE Trial →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center text-white lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold leading-none">{s.value}</p>
              <p className="mt-2 text-sm font-bold text-navySoft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-brandRed">
              Our Process
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navyDark">How It Works</h2>
            <p className="mt-2 text-lg font-bold text-navy">Start Learning in 3 Simple Steps</p>
          </div>
          <div className="mt-10">
            <Steps />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="btn-trial inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
            >
              Start with Your FREE Trial →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
