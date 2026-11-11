import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

/**
 * Top bar — navy (#00338C). Left: green WhatsApp icon + official number
 * (no underline on the number) and the email. Right (desktop only):
 * "Online Classes Worldwide". On mobile everything stays on one compact
 * row in small text — no wrapping mess.
 *
 * Official number is +92 305 6622104 — NEVER any other number.
 * No social icons here: the only colours in the shell are the one navy,
 * the one red and WhatsApp green.
 */
export default function TopBar() {
  return (
    <div className="relative bg-topbar text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-sm font-bold max-[640px]:py-1.5 max-[640px]:text-[0.68rem]">
        <div className="flex min-w-0 items-center gap-3 max-[640px]:gap-2">
          <span className="flex shrink-0 items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
              </svg>
            </a>
            <a
              href={PHONE_TEL}
              className="whitespace-nowrap hover:text-sky"
              style={{ textDecoration: "none" }}
            >
              {PHONE_DISPLAY}
            </a>
          </span>
          <span className="hidden text-white/40 sm:inline" aria-hidden="true">
            |
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="flex min-w-0 items-center gap-2 hover:text-sky"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 max-[640px]:h-3.5 max-[640px]:w-3.5" aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="truncate">{EMAIL}</span>
          </a>
        </div>
        <span className="hidden shrink-0 font-semibold text-white/85 md:inline">
          Online Classes Worldwide
        </span>
      </div>
    </div>
  );
}
