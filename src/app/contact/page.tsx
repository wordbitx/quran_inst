import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TrialForm from "@/components/TrialForm";
import { EMAIL, PHONE_DISPLAY, PHONE_LOCAL, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & FREE Trial — Quran Light Institute",
  description:
    "Contact Quran Light Institute and book your 3-day absolutely FREE trial classes.",
};

const CONTACT_CARDS = [
  {
    title: "WhatsApp Us",
    line1: PHONE_DISPLAY,
    line2: "fastest reply",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    title: "Call Us",
    line1: PHONE_LOCAL,
    line2: "Call us directly",
    href: PHONE_TEL,
    external: false,
  },
  {
    title: "Email Us",
    line1: EMAIL,
    line2: "We reply within a day",
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    title: "Online Classes Worldwide",
    line1: "Learn from home",
    line2: "in your own time zone",
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(6,36,83,0.05)] transition hover:-translate-y-1 hover:shadow-card"
              >
                <h2 className="text-base font-extrabold text-navyDark">{c.title}</h2>
                <p className="mt-2 font-bold text-navy">{c.line1}</p>
                <p className="text-sm text-muted">{c.line2}</p>
              </a>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <TrialForm />
          </div>
        </div>
      </section>
    </>
  );
}
