import Link from "next/link";

/**
 * Navy trust band with the red FREE-trial panel — same as the old site:
 * Qualified Teachers · Classes for Kids & Adults · Student Progress
 * Monitoring, plus the 3-Day Absolutely FREE Trial Classes callout.
 */
export default function TrustBand() {
  return (
    <section className="bg-navy py-0">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch px-4 py-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 py-2 text-white">
          {["Qualified Teachers", "Classes for Kids & Adults", "Student Progress Monitoring"].map(
            (t) => (
              <span key={t} className="flex items-center gap-2 font-bold">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
                  <path d="M12 2 4 5.5v5.6c0 5 3.4 8.6 8 10.4 4.6-1.8 8-5.4 8-10.4V5.5L12 2zm-1.2 14.6-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
                </svg>
                {t}
              </span>
            ),
          )}
        </div>
        <Link
          href="/contact"
          className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-brandRed px-6 py-4 text-center text-white transition hover:bg-redDark lg:mt-0 lg:rounded-none lg:rounded-r-2xl"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 shrink-0" aria-hidden="true">
            <path d="M12 21s-7.5-4.7-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1.1 4.5 2.6l1 1.4 1-1.4C14 6.1 15.5 5 17.5 5 21 5 23 8.5 21.5 12c-2 4.3-9.5 9-9.5 9z" />
          </svg>
          <span className="text-left text-[1.15rem] font-extrabold leading-tight">
            3-Day Absolutely
            <br />
            FREE Trial Classes
          </span>
        </Link>
      </div>
    </section>
  );
}
