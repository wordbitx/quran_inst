/**
 * TrustBand — a single horizontal auto-scrolling marquee line on navy.
 * The content is duplicated for a seamless loop, pauses on hover, and
 * stops entirely for users who prefer reduced motion. No .marquee CSS
 * exists in globals.css, so the keyframes live here as inline styles.
 */
const PHRASE = "One-to-One Quran Learning — Trusted by Families Worldwide";

function MarqueeChunk({ hidden = false }: { hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center whitespace-nowrap"
    >
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-base font-extrabold tracking-wide text-white sm:text-lg">
            {PHRASE}
          </span>
          <span className="text-brandRed" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </span>
  );
}

export default function TrustBand() {
  return (
    <section className="overflow-hidden bg-navy py-3.5" aria-label="Trusted by families worldwide">
      <style>{`
        @keyframes qli-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: qli-marquee 28s linear infinite;
          will-change: transform;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
      <div className="marquee flex w-max overflow-hidden">
        <div className="marquee-track flex w-max">
          <MarqueeChunk />
          <MarqueeChunk hidden />
        </div>
      </div>
    </section>
  );
}
