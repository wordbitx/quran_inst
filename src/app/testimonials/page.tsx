import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Testimonials — Quran Light Institute",
  description:
    "What our students and parents say about learning with Quran Light Institute.",
};

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
    </>
  );
}
