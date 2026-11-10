"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="overflow-hidden rounded-2xl border border-cardBorder bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-navyDark"
            >
              {f.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky text-navy" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-4 w-4">
                  <path d={isOpen ? "M5 12h14" : "M12 5v14M5 12h14"} />
                </svg>
              </span>
            </button>
            {isOpen ? (
              <p className="border-t border-line px-5 py-4 leading-relaxed text-muted">{f.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
