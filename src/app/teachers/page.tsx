import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Our Teachers — Quran Light Institute",
  description:
    "Qualified, caring and experienced male and female Quran teachers — giving every student their complete, personal attention in live one-to-one classes.",
};

const TEACHER_POINTS = [
  {
    title: "Qualified Male & Female Teachers",
    text: "Learn from experienced, qualified, and caring Quran teachers.",
  },
  {
    title: "Live One-to-One Online Classes",
    text: "Personalized Quran lessons with full teacher attention through live online sessions.",
  },
  {
    title: "Student Progress Monitoring",
    text: "Regular progress assessments and personalized guidance for every student.",
  },
];

export default function TeachersPage() {
  return (
    <>
      <PageBanner
        crumb="Teachers"
        title="Qualified Male & Female Teachers"
        sub="Qualified, caring and experienced male & female Quran teachers — giving every student their complete, personal attention."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[24px] border-[5px] border-white shadow-cardLg">
            <Image
              src="https://images.pexels.com/photos/7249219/pexels-photo-7249219.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="A woman in a hijab holding the Holy Quran"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-brandRed">
              Our Teachers
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-navyDark sm:text-4xl">
              Learn One-to-One, Live, with a Teacher Who Cares
            </h2>
            <p className="mt-4 font-sans leading-relaxed text-muted">
              Every class at Quran Light Institute is a live one-to-one online lesson. That
              means the teacher&apos;s full attention belongs to one student at a time — listening
              to their recitation, correcting them gently, and moving at their pace, whether
              they are a young child taking their first step or an adult returning to the
              Quran.
            </p>
            <p className="mt-3 font-sans leading-relaxed text-muted">
              We have qualified and experienced male and female teachers. Sisters and young
              children can learn comfortably with a female tutor, and every family can choose
              the teacher their child feels most comfortable with.
            </p>
            <p className="mt-3 font-sans leading-relaxed text-muted">
              Our teachers are qualified, caring and experienced — patient with beginners,
              encouraging with children, and serious about correct Tajweed and steady
              progress, with regular assessments so parents always know how their child is
              doing.
            </p>
            <Link
              href="/contact"
              className="btn-trial mt-8 inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
            >
              Book Your FREE Trial →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sky2 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navyDark">
              What Makes Our Teachers Different
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEACHER_POINTS.map((s) => (
              <article
                key={s.title}
                className="rounded-card border border-cardBorder bg-white p-6 shadow-[0_3px_12px_rgba(0,51,140,0.05)] transition hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="font-display text-lg font-extrabold text-navyDark">{s.title}</h3>
                <p className="mt-2 font-sans leading-relaxed text-muted">{s.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="font-sans text-lg leading-relaxed text-muted">
              Meet your teacher in a real class — free for three days.
            </p>
            <Link
              href="/contact"
              className="btn-trial mt-6 inline-flex items-center gap-2 rounded-full bg-brandRed px-7 py-3.5 font-extrabold text-white shadow-card transition hover:brightness-90"
            >
              Book Your 3-Day FREE Trial →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
