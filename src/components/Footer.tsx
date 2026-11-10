import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/data";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_TAGLINE, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site bg-navyDeep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Quran Light Institute logo"
                width={640}
                height={640}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="leading-none">
                <p className="text-xl font-extrabold">
                  <span className="text-white">Quran</span>{" "}
                  <span className="text-[#ff5a52]">Light</span>
                </p>
                <p className="mt-1 text-xs font-extrabold tracking-[4px]">INSTITUTE</p>
              </div>
            </div>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-[#b7cff2]">
              {SITE_TAGLINE} — live one-to-one classes for kids &amp; adults,
              with qualified, caring and experienced male &amp; female teachers.
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Courses", "/courses"],
                ["Teachers", "/teachers"],
                ["Testimonials", "/testimonials"],
                ["FAQs", "/faqs"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#b7cff2] hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-extrabold">Our Courses</h3>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className="text-[#b7cff2] hover:text-white">
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
            <h3 className="text-base font-extrabold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-[#b7cff2]">
              <li>
                <a href={PHONE_TEL} className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li>Online Classes Worldwide</li>
              <li>Flexible timings — your time zone</li>
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
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-[0.9rem] text-[#b7cff2]">
          Quran Light Institute — Spreading the Light of Quran Worldwide
        </p>
        <p className="mx-auto max-w-7xl px-4 pb-5 text-center text-xs text-white/50">
          © 2026 Quran Light Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
