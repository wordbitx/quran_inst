import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Steps from "@/components/Steps";

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
                src="/about.webp"
                alt="A girl learning the Holy Quran online with her teacher"
                width={1920}
                height={1280}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 rounded-2xl bg-navy px-5 py-4 text-white shadow-cardLg">
              <p className="text-3xl font-extrabold leading-none">5+</p>
              <p className="mt-1 text-sm font-bold">Years of Teaching Experience</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-brandRed">About Us</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navyDark sm:text-4xl">
              About Quran Light Institute
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Quran Light Institute is an online Quran academy helping children and adults around
              the world learn the Holy Quran from the comfort of home. With{" "}
              <strong className="text-navyDark">5+ years of teaching experience</strong>, our
              qualified and caring male &amp; female teachers give every student their full,
              personal attention in live one-to-one classes.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              From a child&apos;s very first Noorani Qaida lesson to advanced Tajweed,
              memorization and Tafseer, we follow a clear, step-by-step path — with regular
              progress monitoring so parents always know how their child is doing.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2 font-bold text-navyDark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-[#1faa55]" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn-trial mt-8 inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:bg-redDark"
            >
              Book Your FREE Trial →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">How It Works</h2>
            <p className="mt-2 text-lg font-bold text-navy">Start Learning in 3 Simple Steps</p>
          </div>
          <div className="mt-10">
            <Steps />
          </div>
        </div>
      </section>
    </>
  );
}
