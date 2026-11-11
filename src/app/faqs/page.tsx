import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/lib/data";
import { TRIAL_MESSAGE, WHATSAPP_URL, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs — Quran Light Institute",
  description:
    "Everything parents and students usually ask before starting their Quran classes.",
};

export default function FaqsPage() {
  return (
    <>
      <PageBanner
        crumb="FAQs"
        title="Frequently Asked Questions"
        sub="Everything parents and students usually ask before starting their Quran classes."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <FaqList faqs={FAQS} />
          <div className="mx-auto mt-12 max-w-3xl rounded-card border border-cardBorder bg-navy p-8 text-center text-white shadow-card">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Still Have Questions?</h2>
            <p className="mx-auto mt-3 max-w-xl font-sans leading-relaxed text-navySoft">
              If your question is not answered above, message us on WhatsApp or send us your
              details through the contact page — we will be happy to help.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl(TRIAL_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
              >
                Chat on WhatsApp →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-extrabold text-navy shadow-card transition hover:brightness-95"
              >
                Contact Us →
              </Link>
            </div>
            <p className="mt-4 text-sm font-bold text-navySoft">
              Or message us directly on{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
