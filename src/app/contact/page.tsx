import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TrialForm from "@/components/TrialForm";
import { EMAIL, PHONE_DISPLAY, TRIAL_MESSAGE, WHATSAPP_URL, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & FREE Trial — Quran Light Institute",
  description:
    "Contact Quran Light Institute and book your 3-day absolutely FREE trial classes.",
};

const CONTACT_CARDS = [
  {
    title: "Call Us",
    line1: PHONE_DISPLAY,
    line2: "Message us on WhatsApp",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    title: "Email Us",
    line1: EMAIL,
    line2: "We usually reply within 24 hours",
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    title: "Online Academy",
    line1: "Learn from home",
    line2: "Online classes, worldwide, in your own time zone",
    href: "/courses",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        crumb="Contact"
        title="Contact Us — Start Your FREE Trial"
        sub="Experience our online Quran classes with no cost for the first three days. Send us your details and we will arrange your free trial classes."
      />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CARDS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(0,51,140,0.05)] transition hover:-translate-y-1 hover:shadow-card"
              >
                <h2 className="font-display text-base font-extrabold text-navyDark">{c.title}</h2>
                <p className="mt-2 font-bold text-navy">{c.line1}</p>
                <p className="text-sm text-muted">{c.line2}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center font-sans text-sm font-bold text-muted">
            We usually reply within 24 hours.
          </p>
          <div className="mx-auto mt-10 max-w-2xl">
            <TrialForm />
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-card border border-cardBorder bg-navy p-8 text-center text-white shadow-card">
            <h2 className="font-display text-2xl font-extrabold">Need Help? Chat with Us</h2>
            <p className="mx-auto mt-3 max-w-xl font-sans leading-relaxed text-navySoft">
              Not sure which course to start with, or which plan fits your family? Message us
              on WhatsApp and we will guide you — and book your 3-day FREE trial classes.
            </p>
            <a
              href={whatsappUrl(TRIAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
