"use client";

import { useState } from "react";
import TrialModal from "@/components/TrialModal";

/**
 * "Book FREE Trial for This Course" button on a course page. Opens the trial
 * popup on the same page instead of navigating away to /contact.
 */
export default function CourseTrialButton({ courseName }: { courseName: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-trial mt-4 block w-full rounded-full bg-brandRed px-6 py-3 text-center font-extrabold text-white transition hover:bg-redDark"
      >
        Book FREE Trial for This Course
      </button>
      <TrialModal open={open} onClose={() => setOpen(false)} courseName={courseName} />
    </>
  );
}
