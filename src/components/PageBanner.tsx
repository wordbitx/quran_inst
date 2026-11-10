import Link from "next/link";

export default function PageBanner({
  crumb,
  title,
  sub,
}: {
  crumb: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="bg-gradient-to-b from-navyDark to-navy py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-bold text-[#b7cff2]">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span>{crumb}</span>
        </p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h1>
        {sub ? <p className="mt-2 max-w-2xl text-[#d7e3f5]">{sub}</p> : null}
      </div>
    </div>
  );
}
