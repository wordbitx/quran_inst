import Link from "next/link";

export default function PageBanner({
  crumb,
  title,
  sub,
  parentCrumb,
  parentHref,
}: {
  crumb: string;
  title: string;
  sub?: string;
  parentCrumb?: string;
  parentHref?: string;
}) {
  return (
    <div className="bg-navy py-12 text-white sm:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <p className="font-sans text-sm font-bold text-navySoft">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {parentCrumb ? (
            <>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              {parentHref ? (
                <Link href={parentHref} className="hover:text-white">
                  {parentCrumb}
                </Link>
              ) : (
                <span>{parentCrumb}</span>
              )}
            </>
          ) : null}
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-white">{crumb}</span>
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          {title}
        </h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-brandRed" aria-hidden="true" />
        {sub ? <p className="mt-4 max-w-2xl font-sans leading-relaxed text-navySoft">{sub}</p> : null}
      </div>
    </div>
  );
}
