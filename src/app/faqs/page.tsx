import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/lib/data";

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
        </div>
      </section>
    </>
  );
}
