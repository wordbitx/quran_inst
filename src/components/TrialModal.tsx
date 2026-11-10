"use client";

import { useEffect } from "react";
import TrialForm from "@/components/TrialForm";

/**
 * Free-trial popup. Opens on the same page (no navigation to /contact) and
 * contains the full trial form, with the current course already selected.
 * Sending opens WhatsApp from the popup itself.
 *
 * Responsive by design: the dialog is centred with safe margins on every
 * screen (mx-4 / my-4, max-h 90vh) and never touches the top or bottom edge;
 * the form scrolls inside the dialog on small screens. Closes on backdrop
 * click, Escape, or the × button. Body scroll is locked while open.
 * (Clicks inside the dialog do NOT close it — the backdrop handler is on
 * the outer layer only, with stopPropagation on the dialog itself.)
 */
export default function TrialModal({
  open,
  onClose,
  courseName,
}: {
  open: boolean;
  onClose: () => void;
  courseName: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-navyDark/70 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book your 3-day free trial"
    >
      <div
        className="relative mx-4 my-4 flex max-h-[90vh] w-full max-w-2xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xl font-extrabold leading-none text-white shadow-card transition hover:bg-brandRed"
        >
          ×
        </button>
        <div className="overflow-y-auto rounded-card">
          <TrialForm defaultCourse={courseName} />
        </div>
      </div>
    </div>
  );
}
