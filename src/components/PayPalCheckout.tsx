"use client";

import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

/**
 * PayPal checkout button, wired to /api/paypal/create-order and
 * /api/paypal/capture-order.
 *
 * Rendered ONLY when NEXT_PUBLIC_PAYPAL_CLIENT_ID is set. When it is not
 * set this component renders nothing and the parent page shows the
 * WhatsApp confirmation flow instead — never a broken button.
 *
 * No prices are invented here: the amount comes from the server-side price
 * list (src/lib/paypal.ts). Until the owner configures PayPal, the API
 * answers 503 and the button never appears.
 */
export default function PayPalCheckout({
  courseSlug,
}: {
  courseSlug?: string;
}) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState("");

  if (!clientId) return null;

  if (paid) {
    return (
      <p className="rounded-xl bg-[#eaf7ee] px-4 py-3 text-sm font-bold text-[#146c2e]">
        Jazakumullah khairan! Your PayPal payment was received. We will confirm
        your class schedule with you on WhatsApp shortly.
      </p>
    );
  }

  return (
    <PayPalScriptProvider
      options={{ clientId, currency: "USD", intent: "capture" }}
    >
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
        createOrder={async () => {
          setError("");
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ courseSlug: courseSlug ?? "" }),
          });
          const data = (await res.json().catch(() => ({}))) as { id?: string; error?: string };
          if (!res.ok || !data.id) {
            throw new Error(data.error || "PayPal is not configured yet.");
          }
          return data.id;
        }}
        onApprove={async (data) => {
          setError("");
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const result = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
          if (!res.ok || !result.ok) {
            throw new Error(result.error || "PayPal could not complete the payment.");
          }
          setPaid(true);
        }}
        onError={() => {
          setError(
            "PayPal could not complete the payment right now. Please confirm your payment on WhatsApp instead — we will help you there.",
          );
        }}
      />
      {error ? (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {error}
        </p>
      ) : null}
    </PayPalScriptProvider>
  );
}
