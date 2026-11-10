import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const STEPS = [
  {
    n: 1,
    title: "Book Your Free Trial",
    text: "Call or WhatsApp us on",
  },
  {
    n: 2,
    title: "Meet Your Teacher",
    text: "Join your live one-to-one online class at a time that suits your routine and time zone, with a qualified male or female teacher.",
  },
  {
    n: 3,
    title: "Learn & Track Progress",
    text: "Continue learning step by step — with regular progress assessments and personalized guidance for every student.",
  },
];

export default function Steps() {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {STEPS.map((s) => (
        <li
          key={s.n}
          className="rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(6,36,83,0.05)]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-white">
            {s.n}
          </span>
          <h3 className="mt-4 text-lg font-extrabold text-navyDark">{s.title}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
            {s.text}{" "}
            {s.n === 1 ? (
              <a href={PHONE_TEL} className="font-bold text-navy hover:underline">
                {PHONE_DISPLAY}
              </a>
            ) : null}
            {s.n === 1 ? " and book your 3-day absolutely FREE trial classes." : null}
          </p>
        </li>
      ))}
    </ol>
  );
}
