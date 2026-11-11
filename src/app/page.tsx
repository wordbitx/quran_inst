"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import TrustBand from "@/components/TrustBand";
import Steps from "@/components/Steps";
import VideoCta from "@/components/VideoCta";
import FaqList from "@/components/FaqList";
import {
  ADDITIONAL_SPECIALITIES,
  COURSES,
  FAQS,
  PRICING_PLANS,
} from "@/lib/data";
import { TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

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

/** Fade-up reveal on scroll. Never wrap course cards in this. */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/** Animated count-up number, starting when it scrolls into view. */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1200);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

// Stats strip — ONLY real numbers from data.ts / the site's own copy.
const STATS = [
  { value: 5, suffix: "+", label: "Years Teaching Experience" },
  { value: COURSES.length, suffix: "", label: "Courses" },
  { value: ADDITIONAL_SPECIALITIES.length, suffix: "", label: "Specialities" },
  { value: 3, suffix: "-Day", label: "FREE Trial Classes" },
];

const ABOUT_POINTS = [
  "Qualified Teachers",
  "Male & Female Tutors",
  "Classes for Kids & Adults",
  "Student Progress Monitoring",
  "Flexible Timings, Any Time Zone",
  "3-Day FREE Trial Classes",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustBand />

      {/* About preview */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
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
          </Reveal>
          <Reveal>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-widest text-brandRed">
                Who We Are
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-navyDark sm:text-4xl">
                Quality Islamic &amp; Quranic Education for Everyone
              </h2>
              <p className="mt-4 font-sans leading-relaxed text-muted">
                Quran Light Institute is an online Quran academy with a simple
                mission: to bring authentic Quranic and Islamic education to
                every home, wherever in the world it may be. Our qualified and
                caring male &amp; female teachers give every student their
                full, personal attention in live one-to-one classes — so
                children and adults alike can learn the Holy Quran correctly,
                confidently and with love.
              </p>
              <p className="mt-3 font-sans leading-relaxed text-muted">
                From a child&apos;s very first Noorani Qaida lesson to
                advanced Tajweed, memorization and Tafseer, we follow a clear,
                step-by-step path — with regular progress monitoring so parents
                always know how their child is doing.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {ABOUT_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-sans font-bold text-navyDark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-extrabold text-navy transition hover:bg-sky"
              >
                Learn More About Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated count-up stats strip — real numbers only. */}
      <section className="bg-navy py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center text-white lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold leading-none sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-sans text-sm font-bold text-navySoft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses — all 14 courses. Course cards are NOT wrapped
          in any scroll-reveal hidden state: they are visible on load. */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-4">
              <span className="h-[2px] w-14 rounded-full bg-brandRed sm:w-28" aria-hidden="true" />
              <span className="inline-flex items-center gap-3 rounded-full bg-navy px-6 py-2.5 font-display text-xl font-extrabold text-white">
                Our Specialities
              </span>
              <span className="h-[2px] w-14 rounded-full bg-brandRed sm:w-28" aria-hidden="true" />
            </span>
            <p className="mt-5 font-sans leading-relaxed text-muted">
              Everything your child — or you — need to read, understand and
              love the Holy Quran, taught step by step with proper Tajweed.
              Tap any course to open its page.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-extrabold text-white transition hover:brightness-90"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us — the 12 Additional Specialities */}
      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navyDark">
              Why Families Choose Us
            </h2>
            <p className="mt-3 font-sans text-lg font-bold text-navy">Additional Specialities</p>
            <p className="mt-2 font-sans leading-relaxed text-muted">
              More than lessons — a complete, caring learning experience for
              every student, wherever in the world you live. Tap any box to
              open its page.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_SPECIALITIES.map((s, i) => (
              <Link
                key={s.title}
                href={SPECIALITY_HREFS[i] ?? "/courses"}
                className="group block rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(0,51,140,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <h3 className="font-display text-lg font-extrabold text-navyDark">{s.title}</h3>
                <p className="mt-2 font-sans leading-relaxed text-muted">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-sans text-[0.9rem] font-bold text-brandRed opacity-0 transition group-hover:opacity-100">
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

      {/* 4-step Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navyDark">How It Works</h2>
            <p className="mt-2 font-sans text-lg font-bold text-navy">
              Start Learning in 4 Simple Steps
            </p>
          </Reveal>
          <div className="mt-10">
            <Steps />
          </div>
        </div>
      </section>

      {/* Pricing preview — no amounts anywhere. */}
      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navyDark">
              Simple Plans for Every Family
            </h2>
            <p className="mt-3 font-sans leading-relaxed text-muted">
              Choose the pace that suits your family — every plan is
              one-to-one live classes, and starts with 3-day FREE trial
              classes. Confirm the fee on WhatsApp before you begin.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRICING_PLANS.map((plan) => {
              const feeMessage = `Assalamu Alaikum! Please confirm the fee for the ${plan.label} plan (${plan.daysPerWeek} days a week, ${plan.classesPerMonth} classes a month) at Quran Light Institute.`;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-card border p-7 transition hover:-translate-y-1.5 hover:shadow-cardLg active:scale-[0.98] ${
                    plan.popular
                      ? "border-navy bg-navy text-white shadow-cardLg"
                      : "border-cardBorder bg-white shadow-[0_3px_12px_rgba(0,51,140,0.05)]"
                  }`}
                >
                  {plan.popular ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brandRed px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-card">
                      Most Popular
                    </span>
                  ) : null}
                  <h3 className={`font-display text-2xl font-extrabold ${plan.popular ? "text-white" : "text-navyDark"}`}>
                    {plan.label}
                  </h3>
                  <p className={`mt-1 font-sans text-[0.95rem] font-bold ${plan.popular ? "text-navySoft" : "text-navy"}`}>
                    {plan.pace}
                  </p>
                  <p className={`mt-4 font-display text-lg font-extrabold ${plan.popular ? "text-white" : "text-navyDark"}`}>
                    {plan.daysPerWeek} days a week · {plan.classesPerMonth} classes a month
                  </p>
                  <ul className="mt-5 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 font-sans text-[0.95rem] font-semibold">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className={`mt-0.5 h-5 w-5 shrink-0 ${plan.popular ? "text-white" : "text-brandRed"}`} aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className={plan.popular ? "text-white" : "text-navyDark"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl(feeMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 block rounded-full px-6 py-3.5 text-center font-extrabold shadow-card transition hover:brightness-90 ${
                      plan.popular
                        ? "bg-brandRed text-white"
                        : "bg-navy text-white"
                    }`}
                  >
                    Confirm Fee on WhatsApp
                  </a>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center font-sans text-sm font-bold text-muted">
            Every plan starts with 3-day absolutely FREE trial classes — no
            cost for the first three days.
          </p>
        </div>
      </section>

      {/* FAQ preview — first 4 FAQs, accordion */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navyDark">
              Common Questions
            </h2>
            <p className="mt-3 font-sans leading-relaxed text-muted">
              Everything parents usually ask before the free trial classes.
            </p>
          </Reveal>
          <div className="mt-8">
            <FaqList faqs={FAQS.slice(0, 4)} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faqs" className="font-sans font-bold text-brandRed hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <VideoCta />

      {/* Final CTA banner */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Start Your Quran Journey Today
            </h2>
            <p className="mt-3 font-sans text-navySoft">
              Live one-to-one Quran classes for kids and adults — no cost for
              the first three days.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-trial inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
              >
                Start Your Free Trial →
              </Link>
              <a
                href={whatsappUrl(TRIAL_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#25d366] px-7 py-3.5 font-extrabold text-white transition hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
