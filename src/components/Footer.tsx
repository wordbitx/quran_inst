import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/data";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_TAGLINE, WHATSAPP_URL } from "@/lib/site";

const QUICK_LINKS: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Teachers", "/teachers"],
  ["Pricing", "/pricing"],
  ["FAQs", "/faqs"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* Same lockup style as the header, adapted for the navy
                background: white "Quran Light", red "INSTITUTE" with red
                side lines, tagline pill below. */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Quran Light Institute logo"
                width={640}
                height={640}
                className="h-16 w-16 shrink-0 rounded-full bg-white object-cover p-0.5"
              />
              <div className="leading-none">
                <p className="font-display text-xl font-bold">
                  <span className="text-white">Quran</span>{" "}
                  <span className="text-white">Light</span>
                </p>
                <p className="mt-1.5 flex items-center gap-2">
                  <span className="h-[2px] w-4 rounded-full bg-brandRed" aria-hidden="true" />
                  <span className="font-display text-xs font-bold tracking-[4px] text-brandRed">
                    INSTITUTE
                  </span>
                  <span className="h-[2px] w-4 rounded-full bg-brandRed" aria-hidden="true" />
                </p>
              </div>
            </div>
            <p className="tagline-ribbon mt-4 inline-block border border-white/30 px-3 py-1 text-[0.72rem] font-bold text-white">
              {SITE_TAGLINE}
            </p>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-navySoft">
              Live one-to-one classes for kids &amp; adults, with qualified,
              caring and experienced male &amp; female teachers.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {QUICK_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-navySoft hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold">Our Courses</h3>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className="text-navySoft hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/courses" className="font-bold text-white">
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-[0.95rem] text-navySoft">
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                </svg>
                <a href={PHONE_TEL} className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href={`mailto:${EMAIL}`} className="break-all hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>Online Academy — Online Classes Worldwide</span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:underline"
                >
                  Chat on WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-navySoft">
          © 2026 Quran Light Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
