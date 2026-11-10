"use client";

import { useEffect } from "react";
import TrialForm from "@/components/TrialForm";

/**
 * Free-trial popup for course pages. Opens on the same page (no navigation
 * to /contact) and contains the full trial form, with the current course
 * already selected. Sending opens WhatsApp from the popup itself.
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
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-navyDark/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book your 3-day free trial"
    >
      <div className="relative my-6 w-full max-w-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xl font-extrabold leading-none text-white shadow-card transition hover:bg-brandRed"
        >
          ×
        </button>
        <TrialForm defaultCourse={courseName} />
      </div>
    </div>
  );
}
