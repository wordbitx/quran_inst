"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COURSES } from "@/lib/data";
import { SITE_TAGLINE } from "@/lib/site";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Teachers", href: "/teachers" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2">
        <Link href="/" className="brand flex items-center gap-3" aria-label="Quran Light Institute — home">
          <Image
            src="/logo.jpg"
            alt="Quran Light Institute logo"
            width={640}
            height={640}
            className="h-[88px] w-[88px] shrink-0 rounded-full object-cover max-[640px]:h-[62px] max-[640px]:w-[62px]"
            priority
          />
          <span className="wordmark leading-none">
            <span className="block text-[1.9rem] font-extrabold tracking-tight max-[640px]:text-[1.3rem]">
              <span className="text-navy">Quran</span>{" "}
              <span className="text-brandRed">Light</span>
            </span>
            <span className="mt-1 block text-[0.95rem] font-extrabold tracking-[5px] text-navy max-[640px]:text-[0.7rem] max-[640px]:tracking-[3px]">
              INSTITUTE
            </span>
            <span className="mt-2 inline-block rounded-full bg-navy px-3 py-1 text-[0.72rem] font-bold text-white max-[640px]:text-[0.6rem]">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="h-6 w-6">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav className="main ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-[0.95rem] font-bold ${
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
                className={`rounded-full px-3.5 py-2 text-[0.95rem] font-bold ${
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
              className={`rounded-full px-3.5 py-2 text-[0.95rem] font-bold ${
                isActive(item.href) ? "bg-brandRed text-white" : "text-navyDark hover:bg-sky"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-trial ml-2 inline-flex items-center gap-2 rounded-full bg-brandRed px-5 py-3 text-[0.95rem] text-white shadow-card transition hover:bg-redDark"
          >
            3-Day FREE Trial
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-trial mt-2 rounded-full bg-brandRed px-5 py-3 text-center font-extrabold text-white"
            >
              3-Day FREE Trial →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
