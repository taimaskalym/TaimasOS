"use client";

import { useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Host_Grotesk } from "next/font/google";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

type Locale = "en" | "ru";

type NavLink = {
  href: string;
  label: string;
};

const NAV_CONFIG: Record<
  Locale,
  { homeHref: string; links: NavLink[]; activeLocale: Locale }
> = {
  en: {
    homeHref: "/",
    activeLocale: "en",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/notes", label: "Notes" },
      { href: "/patch-notes", label: "Patch Notes" },
      { href: "/plan", label: "Plan" },
    ],
  },
  ru: {
    homeHref: "/ru",
    activeLocale: "ru",
    links: [
      { href: "/ru", label: "Главная" },
      { href: "/ru/about", label: "О системе" },
      { href: "/ru/notes", label: "Заметки" },
      { href: "/ru/patch-notes", label: "Примечания к патчам" },
      { href: "/ru/plan", label: "План" },
    ],
  },
};

function TelegramIcon({ gradientId }: { gradientId: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="16" cy="16" r="14" fill={`url(#${gradientId})`} />
      <path
        d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="16"
          y1="2"
          x2="16"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e5e5e5" />
          <stop offset="1" stopColor="#e3e3e3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LanguageSwitcher({ activeLocale }: { activeLocale: Locale }) {
  return (
    <div className="flex gap-3 text-base md:text-md">
      <Link
        href="/"
        className={activeLocale === "en" ? "opacity-70" : "transition-opacity hover:opacity-70"}
      >
        EN
      </Link>
      <span className="text-zinc-500">|</span>
      <Link
        href="/ru"
        className={activeLocale === "ru" ? "opacity-70" : "transition-opacity hover:opacity-70"}
      >
        RU
      </Link>
    </div>
  );
}

type NavBarProps = {
  locale?: Locale;
};

export default function NavBar({ locale = "en" }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const gradientId = useId();
  const { homeHref, links, activeLocale } = NAV_CONFIG[locale];

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/90 via-black/70 to-transparent pb-6 pt-3 text-zinc-100 md:pb-12 md:pt-4">
      <nav className="relative flex w-full items-center px-4 py-2 md:px-8 md:py-4">
        <Link
          href={homeHref}
          onClick={closeMenu}
          className="inline-flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80 md:gap-3"
        >
          <Image src="/logo.svg" alt="Taimas OS Logo" width={40} height={40} />
          <span
            className={`${hostGrotesk.className} hidden text-sm font-normal tracking-[0.4em] text-zinc-100 sm:inline`}
          >
            TAIMAS•OS
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 text-lg md:flex lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-5 md:flex">
          <LanguageSwitcher activeLocale={activeLocale} />
          <a
            href="https://t.me/taimaskalym"
            target="_blank"
            rel="noopener noreferrer"
            title="Contact Taimas"
            className="inline-flex items-center transition-opacity hover:opacity-70"
          >
            <TelegramIcon gradientId={`telegram-${gradientId}`} />
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md text-zinc-100 transition-opacity hover:opacity-70 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav-menu"
          className="border-t border-zinc-800 bg-black/95 px-4 py-6 md:hidden"
        >
          <div className="flex flex-col gap-1 text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-2 py-3 transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-6">
            <LanguageSwitcher activeLocale={activeLocale} />
            <a
              href="https://t.me/taimaskalym"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Taimas"
              className="inline-flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70"
            >
              <TelegramIcon gradientId={`telegram-mobile-${gradientId}`} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
