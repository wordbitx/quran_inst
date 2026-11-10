import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

/**
 * Top bar — like the client's own design (dark navy bar):
 * email | green WhatsApp icon + official number | globe + "Online Classes
 * Worldwide" | "Follow Us:" + Facebook / YouTube / WhatsApp brand icons.
 *
 * The circular logo overflows from the header below into this bar, so the
 * bar carries a white circular scoop (notch) behind the logo — the logo
 * sits in a white circle and the bar's content starts AFTER the logo area.
 * Official number is +92 305 6622104 — NEVER the +92 300 123 0104 shown in
 * the client's design image (that number is not official).
 *
 * NOTE: the institute's Facebook / YouTube profile URLs were never
 * supplied, so those two icons are display-only (spans, no href) until the
 * client shares the real links — no URL is invented. WhatsApp links to the
 * official wa.me number.
 */
export default function TopBar() {
  return (
    <div className="topbar relative bg-navyDeep text-sm font-bold text-white">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* White circular scoop around the overflowing header logo (desktop).
            The logo is 112px wide starting at the container's left padding,
            so the scoop is centred on it; the header logo paints above it. */}
        <span
          className="absolute left-2 top-1/2 z-0 hidden h-[132px] w-[132px] -translate-y-1/2 rounded-full bg-white lg:block"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-wrap items-center gap-x-5 gap-y-1 py-2 max-[640px]:flex-nowrap max-[640px]:justify-center max-[640px]:gap-2 max-[640px]:text-[0.8rem] lg:pl-[156px]">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 hover:text-sky"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="max-[640px]:hidden">{EMAIL}</span>
          </a>
          <span className="hidden text-white/40 sm:inline" aria-hidden="true">
            |
          </span>
          <span className="flex items-center gap-2">
            <span className="hidden min-[641px]:inline">Contact:</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25d366] text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
              </svg>
            </a>
            <a href={PHONE_TEL} className="hover:text-sky">
              {PHONE_DISPLAY}
            </a>
          </span>
          <span className="hidden text-white/40 md:inline" aria-hidden="true">
            |
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 6.5h-2.2a15 15 0 0 0-1.5-3.6 8 8 0 0 1 3.7 3.6zM12 4c.7.9 1.3 2.1 1.7 3.5h-3.4C10.7 6.1 11.3 4.9 12 4zM8.3 4.9A15 15 0 0 0 6.8 8.5H4.6a8 8 0 0 1 3.7-3.6zM4.2 10.5h2.5c-.1.7-.2 1.3-.2 2s.1 1.3.2 2H4.2a8 8 0 0 1 0-4zm.4 6h2.2a15 15 0 0 0 1.5 3.6 8 8 0 0 1-3.7-3.6zM12 20c-.7-.9-1.3-2.1-1.7-3.5h3.4c-.4 1.4-1 2.6-1.7 3.5zm3.4-5.5h-6.8c-.1-.7-.2-1.3-.2-2s.1-1.3.2-2h6.8c.1.7.2 1.3.2 2s-.1 1.3-.2 2zm.3 5.6a15 15 0 0 0 1.5-3.6h2.2a8 8 0 0 1-3.7 3.6zM17.3 14.5c.1-.7.2-1.3.2-2s-.1-1.3-.2-2h2.5a8 8 0 0 1 0 4h-2.5z" />
            </svg>
            Online Classes Worldwide
          </span>
          <span className="ml-auto hidden items-center gap-2 md:flex">
            <span className="text-white/80">Follow Us:</span>
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877f2] text-[1.05rem] font-black leading-none text-white"
              aria-label="Facebook (link coming soon)"
              title="Facebook"
            >
              f
            </span>
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff0000] text-white"
              aria-label="YouTube (link coming soon)"
              title="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366] text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
