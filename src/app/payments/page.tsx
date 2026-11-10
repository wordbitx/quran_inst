import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PayPalCheckout from "@/components/PayPalCheckout";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "International Payments — Quran Light Institute",
  description:
    "How international students pay for Quran Light Institute classes: 3-day free trial first, then PayPal for USA, UK, Europe and Australia once the business account is active.",
};

export default function PaymentsPage() {
  const paypalReady = Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);

  return (
    <>
      <PageBanner
        crumb="Payments"
        title="International Payments"
        sub="Paying from the USA, UK, Europe or Australia? Here is how it works — starting with your 3-day free trial."
      />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-[#dbe7fb] bg-white p-6 shadow-card">
            <p className="text-2xl font-extrabold text-navy">1</p>
            <h2 className="mt-2 font-extrabold text-navy">Try free first</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Every new student starts with a 3-day absolutely free trial. No
              payment is needed for the trial — book it on the{" "}
              <Link href="/contact" className="font-bold text-red">
                Contact page
              </Link>{" "}
              or on any course page.
            </p>
          </article>

          <article className="rounded-2xl border border-[#dbe7fb] bg-white p-6 shadow-card">
            <p className="text-2xl font-extrabold text-navy">2</p>
            <h2 className="mt-2 font-extrabold text-navy">Choose your course</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              After the trial, pick your course and class timings with your
              teacher. We confirm the fee and your schedule with you on
              WhatsApp before any payment.
            </p>
          </article>

          <article className="rounded-2xl border border-[#dbe7fb] bg-white p-6 shadow-card">
            <p className="text-2xl font-extrabold text-navy">3</p>
            <h2 className="mt-2 font-extrabold text-navy">Pay by PayPal</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              International students (USA, UK, Europe, Australia) will be able
              to pay securely with PayPal once the institute&apos;s business
              account is active.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-[#dbe7fb] bg-white p-6 shadow-card">
          <h2 className="text-xl font-extrabold text-navy">PayPal checkout</h2>
          {paypalReady ? (
            <>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Pay with your PayPal account or a card through PayPal. Your
                payment is processed securely by PayPal.
              </p>
              <div className="mt-4 max-w-md">
                <PayPalCheckout />
              </div>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                <strong className="text-navy">
                  PayPal checkout is not live yet.
                </strong>{" "}
                It activates after the institute&apos;s business registration
                is complete and the PayPal Business account is set up. Until
                then, please confirm your payment with us on WhatsApp — we
                will guide you step by step.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-[#25d366] px-6 py-3 text-sm font-extrabold text-white hover:opacity-90"
              >
                Confirm payment on WhatsApp →
              </a>
            </>
          )}
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            No payment is taken for the 3-day free trial. Fees are confirmed
            with you on WhatsApp before any payment is made.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          Questions about payments?{" "}
          <Link href="/contact" className="font-bold text-red">
            Contact us
          </Link>{" "}
          or message us on WhatsApp and we will help you.
        </p>
      </section>
    </>
  );
}
