import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials — Quran Light Institute",
  description:
    "What our students and parents say about learning with Quran Light Institute.",
};

const REVIEW_MESSAGE =
  "Assalamu Alaikum! I would like to share my experience with Quran Light Institute. My name is ___, we are from ___, and one line about my child's progress is: ___";

const STEPS = [
  {
    n: "1",
    title: "Take the FREE trial",
    text: "Every new student begins with 3-Day Absolutely FREE Trial Classes — real one-to-one lessons with a real teacher.",
  },
  {
    n: "2",
    title: "Tell us on WhatsApp",
    text: "Message us your name, your country, and one line about your child's progress. That is all we need.",
  },
  {
    n: "3",
    title: "We publish with your permission",
    text: "Your words appear here only if you say yes — exactly as you wrote them, in your name, from your country.",
  },
];

/**
 * Testimonials page — HONEST by design. No testimonial has been invented:
 * no names, countries, photos or quotes are made up. Real parent reviews
 * will appear here only after real parents share them on WhatsApp and give
 * permission. Until then the page shows how reviews get here, so it is
 * never empty and never fake.
 */
export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        crumb="Testimonials"
        title="Testimonials"
        sub="What our students & parents say about learning with Quran Light Institute."
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-navyDark">
            What Our Students &amp; Parents Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            The truest testimonial is your own experience. That is why every new student begins
            with <strong className="text-navyDark">3-Day Absolutely FREE Trial Classes</strong> —
            meet the teacher, attend real one-to-one lessons, and see the progress yourself
            before you decide.
          </p>
          <Link
            href="/contact"
            className="btn-trial mt-8 inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:bg-redDark"
          >
            Try the FREE Trial Classes →
          </Link>
        </div>
      </section>

      {/* How reviews get here — the page is ready for real reviews. */}
      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">How Reviews Get Here</h2>
            <p className="mt-3 leading-relaxed text-muted">
              We never write testimonials ourselves. Every review on this page will come from a
              real parent, in their own words, with their permission.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-card border border-cardBorder bg-white p-6 text-center shadow-[0_3px_12px_rgba(6,36,83,0.05)]"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-xl font-extrabold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-navyDark">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Share-your-experience panel — the honest empty state. */}
          <div className="mx-auto mt-10 max-w-3xl rounded-card border border-cardBorder bg-white p-8 text-center shadow-[0_3px_12px_rgba(6,36,83,0.05)]">
            <div
              className="flex items-center justify-center gap-1 text-[#f5a623]"
              aria-label="Five stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                </svg>
              ))}
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-navyDark">
              Be the First to Share Your Experience
            </h3>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">
              No parent reviews have been published yet — and none will be invented. If your
              child has learned with us, your honest words will be the first review on this
              page, in your name, from your country.
            </p>
            <a
              href={whatsappUrl(REVIEW_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-95"
            >
              Share Your Review on WhatsApp →
            </a>
            <p className="mt-4 text-sm font-bold text-muted">
              Or message us directly on{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-navy underline">
                WhatsApp
              </a>{" "}
              — your review appears here only with your permission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
