"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

/**
 * VideoCta — a compact dark band with a still poster (/about.webp) and a
 * centred play button. The band never shows the video itself: clicking
 * play opens a POPUP modal player (overlay + close × top-right, backdrop
 * click and Escape close it) with <video controls poster="/about.webp"
 * src="/intro.mp4">. The /intro.mp4 file is uploaded separately, so a
 * graceful fallback line sits under the player.
 */
export default function VideoCta() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-white/70">
            Watch &amp; Learn
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            See How Our Classes Work
          </h2>
          <p className="mt-3 font-sans leading-relaxed text-navySoft">
            Watch our short introduction, then book your 3-day FREE trial
            classes and join a real live one-to-one lesson.
          </p>
        </div>

        {/* Still poster + play button only — no video inline. */}
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-card shadow-cardLg">
          <Image
            src="/about.webp"
            alt="A girl learning the Holy Quran online with her teacher"
            width={1920}
            height={1280}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/35" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play our introduction video"
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brandRed text-white shadow-cardLg transition duration-300 group-hover:scale-110 group-hover:bg-navy sm:h-24 sm:w-24">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-9 w-9 sm:h-10 sm:w-10" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.2-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Popup modal player */}
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Introduction video"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-card bg-navy shadow-cardLg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brandRed text-xl font-extrabold leading-none text-white transition hover:bg-navy"
            >
              ×
            </button>
            <video
              controls
              poster="/about.webp"
              src="/intro.mp4"
              className="aspect-video w-full bg-black object-contain"
            />
            <p className="px-5 py-4 text-center font-sans text-sm leading-relaxed text-navySoft">
              Our short introduction video is being prepared — book a free
              trial class to see a live lesson.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
