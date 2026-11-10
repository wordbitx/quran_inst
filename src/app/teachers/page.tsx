import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Steps from "@/components/Steps";
import { ADDITIONAL_SPECIALITIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Teachers — Quran Light Institute",
  description:
    "Qualified, caring and experienced male and female Quran teachers — giving every student their complete, personal attention.",
};

export default function TeachersPage() {
  return (
    <>
      <PageBanner
        crumb="Teachers"
        title="Our Teachers"
        sub="Qualified, caring and experienced male & female Quran teachers — giving every student their complete, personal attention."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navyDark">
              Qualified, Caring &amp; Experienced Teachers
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Every lesson is taught live by a qualified male or female Quran teacher — and
              getting started takes only three simple steps.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_SPECIALITIES.slice(0, 3).map((s) => (
              <article
                key={s.title}
                className="rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(6,36,83,0.05)]"
              >
                <h3 className="text-lg font-extrabold text-navyDark">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Steps />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="btn-trial inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:bg-redDark"
            >
              Meet Your Teacher — FREE Trial →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
