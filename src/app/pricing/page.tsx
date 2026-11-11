import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PRICING_PLANS } from "@/lib/data";
import { TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Quran Light Institute",
  description:
    "Choose how often you learn: 2, 3 or 5 days a week, with one-to-one live classes and a 3-day FREE trial first. Confirm your fee on WhatsApp.",
};

const PAYMENT_STEPS = [
  {
    n: "1",
    title: "Book 3-Day FREE Trial",
    text: "Start with 3-day absolutely FREE trial classes — meet your teacher and experience a real one-to-one lesson before you decide anything.",
  },
  {
    n: "2",
    title: "Confirm Your Plan & Fee on WhatsApp",
    text: "Choose your plan and message us on WhatsApp — we will confirm the exact fee for that plan.",
  },
  {
    n: "3",
    title: "Start Classes After Payment",
    text: "Once your payment is complete, your regular classes begin at a time that suits your routine and time zone.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageBanner
        crumb="Pricing"
        title="Simple Plans, One-to-One Classes"
        sub="Choose how often you want to learn. Every plan starts with 3-day absolutely FREE trial classes."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {PRICING_PLANS.map((plan) => {
              const message = `Assalamu Alaikum! I would like to confirm the fee for the ${plan.label} plan (${plan.daysPerWeek} days a week, ${plan.classesPerMonth} classes a month) at Quran Light Institute.`;
              const isPopular = Boolean(plan.popular);
              return (
                <article
                  key={plan.id}
                  className={`flex flex-col rounded-card border p-8 shadow-[0_3px_12px_rgba(0,51,140,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-cardLg active:scale-[0.98] ${
                    isPopular
                      ? "border-navy bg-navy text-white lg:-my-4 lg:py-12"
                      : "border-cardBorder bg-white"
                  }`}
                >
                  {isPopular ? (
                    <p className="mb-4 inline-flex w-fit rounded-full bg-brandRed px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-white">
                      Most Popular
                    </p>
                  ) : null}
                  <h2 className="font-display text-2xl font-extrabold">{plan.label}</h2>
                  <p className={`mt-1 text-sm font-bold ${isPopular ? "text-navySoft" : "text-muted"}`}>
                    {plan.pace}
                  </p>
                  <p className="mt-6">
                    <span className="font-display text-5xl font-extrabold leading-none">
                      {plan.daysPerWeek}
                    </span>{" "}
                    <span className={`font-bold ${isPopular ? "text-navySoft" : "text-muted"}`}>
                      days a week
                    </span>
                  </p>
                  <p className={`mt-1 font-bold ${isPopular ? "text-navySoft" : "text-muted"}`}>
                    {plan.classesPerMonth} classes a month
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-bold">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`mt-0.5 h-5 w-5 shrink-0 ${isPopular ? "text-white" : "text-brandRed"}`}
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 block rounded-full px-6 py-3.5 text-center font-extrabold shadow-card transition hover:brightness-90 ${
                      isPopular ? "bg-brandRed text-white" : "bg-navy text-white"
                    }`}
                  >
                    Confirm Fee on WhatsApp →
                  </a>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center font-sans leading-relaxed text-muted">
            Not sure which plan fits you? Book the 3-day FREE trial first — your teacher will
            help you choose the right pace after your trial classes.
          </p>
          <div className="mt-4 text-center">
            <a
              href={whatsappUrl(TRIAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
            >
              Book Your 3-Day FREE Trial →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navyDark">How Payment Works</h2>
            <p className="mt-2 font-sans leading-relaxed text-muted">
              Three simple steps — no payment before you have tried the classes.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PAYMENT_STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-card border border-cardBorder bg-white p-6 text-center shadow-[0_3px_12px_rgba(0,51,140,0.05)]"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-xl font-extrabold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-navyDark">{s.title}</h3>
                <p className="mt-2 font-sans leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
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
