"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COURSES } from "@/lib/data";
import { SITE_TAGLINE } from "@/lib/site";
import TrialModal from "@/components/TrialModal";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Cream (#FDF6EC) sticky header. The logo is sized to fit INSIDE the
     bar — a sticky header would clip an oversized overflowing logo at the
     top of the viewport once the top bar has scrolled away. */
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center gap-3 px-4 max-[640px]:h-[64px]">
        <Link href="/" className="brand flex min-w-0 items-center gap-3" aria-label="Quran Light Institute — home">
          {/* Real circular logo — fits inside the bar, white ring hugging it. */}
          <span className="logo-shine block h-[64px] w-[64px] shrink-0 rounded-full bg-white p-1 shadow-[0_2px_12px_rgba(0,51,140,0.18)] max-[640px]:h-[52px] max-[640px]:w-[52px]">
            <Image
              src="/logo.jpg"
              alt="Quran Light Institute logo"
              width={640}
              height={640}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </span>
          <span className="wordmark min-w-0 leading-none">
            <span className="block font-display text-[1.7rem] font-bold tracking-tight max-[640px]:text-[1.3rem]">
              <span className="grad-navy">Quran</span>{" "}
              <span className="grad-red">Light</span>
            </span>
            <span className="mt-1 flex items-center gap-2">
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="h-[2px] w-7 rounded-full bg-brandRed max-[640px]:w-4" />
                <span className="h-[2px] w-7 rounded-full bg-brandRed max-[640px]:w-4" />
              </span>
              <span className="font-display text-[0.95rem] font-bold tracking-[6px] text-navy max-[640px]:text-[0.72rem] max-[640px]:tracking-[3px]">
                INSTITUTE
              </span>
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="h-[2px] w-7 rounded-full bg-brandRed max-[640px]:w-4" />
                <span className="h-[2px] w-7 rounded-full bg-brandRed max-[640px]:w-4" />
              </span>
            </span>
            <span className="tagline-ribbon mt-2 inline-block bg-navy px-3 py-1 text-[0.68rem] font-bold text-white max-[640px]:text-[0.58rem]">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="h-6 w-6">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav className="main ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {NAV.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[0.92rem] font-bold ${
                isActive(item.href) ? "bg-brandRed text-white" : "text-navyDark hover:bg-sky"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Courses dropdown — desktop opens on hover, chevron toggles on click */}
          <div
            className="group relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <div className="flex items-center">
              <Link
                href="/courses"
                className={`rounded-full px-3 py-2 text-[0.92rem] font-bold ${
                  isActive("/courses") ? "bg-brandRed text-white" : "text-navyDark hover:bg-sky"
                }`}
              >
                Courses
              </Link>
              <button
                type="button"
                aria-label="Open courses menu"
                aria-expanded={coursesOpen}
                onClick={() => setCoursesOpen((v) => !v)}
                className="rounded-full p-1 text-navyDark hover:bg-sky"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`}>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div
              className={`absolute left-0 top-full z-50 w-72 rounded-2xl border border-cardBorder bg-white p-2 shadow-cardLg ${
                coursesOpen ? "block" : "hidden"
              } group-hover:block`}
            >
              {COURSES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className="block rounded-xl px-3 py-2 text-[0.92rem] font-semibold text-navyDark hover:bg-sky"
                  onClick={() => setCoursesOpen(false)}
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/courses"
                className="mt-1 block rounded-xl bg-navy px-3 py-2 text-[0.92rem] font-bold text-white"
              >
                View All Courses →
              </Link>
            </div>
          </div>
          {NAV.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[0.92rem] font-bold ${
                isActive(item.href) ? "bg-brandRed text-white" : "text-navyDark hover:bg-sky"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setTrialOpen(true)}
            className="btn-trial ml-2 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brandRed px-5 py-3 text-[0.95rem] font-extrabold text-white shadow-card transition hover:brightness-90"
          >
            3-Day FREE Trial
            <span aria-hidden="true">→</span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-cream px-4 py-3 lg:hidden" aria-label="Mobile">
          <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2.5 font-bold ${
                  isActive(item.href) ? "bg-brandRed text-white" : "text-navyDark hover:bg-sky"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="flex items-center justify-between rounded-xl px-3 py-2.5 font-bold text-navyDark hover:bg-sky"
              aria-expanded={coursesOpen}
              onClick={() => setCoursesOpen((v) => !v)}
            >
              Courses
              <span aria-hidden="true">{coursesOpen ? "▲" : "▼"}</span>
            </button>
            {coursesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l-2 border-line pl-3">
                {COURSES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-[0.92rem] font-semibold text-navyDark hover:bg-sky"
                  >
                    {c.name}
                  </Link>
                ))}
                <Link
                  href="/courses"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-[0.92rem] font-bold text-navy"
                >
                  View All Courses →
                </Link>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTrialOpen(true);
              }}
              className="btn-trial mt-2 whitespace-nowrap rounded-full bg-brandRed px-5 py-3 text-center font-extrabold text-white"
            >
              3-Day FREE Trial →
            </button>
          </div>
        </nav>
      )}

      {/* Header free-trial popup — opens on the same page, never navigates. */}
      <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} courseName="" />
    </header>
  );
}
