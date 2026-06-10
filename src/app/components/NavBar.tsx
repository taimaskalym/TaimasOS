import Link from "next/link";
import Image from "next/image";
import { Host_Grotesk } from "next/font/google";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

export default function NavBar() {
  return (
    <div className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/90 via-black/70 to-transparent pb-12 pt-4">
    <nav className="flex w-full items-center justify-center gap-12 px-6 py-4 text-lg">

      <Link
        href="/"
        className="absolute left-10 inline-flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <Image src="/logo.svg" alt="Taimas OS Logo" width={40} height={40} />
        <span
          className={`${hostGrotesk.className} text-sm font-normal tracking-[0.4em] text-zinc-100`}
        >
          TAIMAS•OS
        </span>
      </Link>
      <Link href="/" className="transition-opacity hover:opacity-70">Home</Link>
      <Link href="/about" className="transition-opacity hover:opacity-70">About</Link>
      <Link href="/notes" className="transition-opacity hover:opacity-70">Notes</Link>
      <Link href="/patch-notes" className="transition-opacity hover:opacity-70">Patch Notes</Link>
      <Link href="/plan" className="transition-opacity hover:opacity-70">Plan</Link>
      <div className="absolute right-36 flex gap-3 text-md">
        <Link href="/" className="opacity-70">
          EN
        </Link>
        <span className="text-zinc-500">|</span>
        <Link href="/ru" className="transition-opacity hover:opacity-70">
          RU
        </Link>
      </div>
      
      <a

        
          href="https://t.me/taimaskalym"

          target="_blank"

          rel="noopener noreferrer"

          title="Contact Taimas"

          className="inline-flex items-center gap-2 underline transition-opacity hover:opacity-70 right-10 absolute"

          

        >

          <svg

            width="40"

            height="40"

            viewBox="0 0 32 32"

            fill="none"

            xmlns="http://www.w3.org/2000/svg"

          >

            <circle cx="16" cy="16" r="14" fill="url(#telegramGradient)" />

            <path

              d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"

              fill="black"

            />

            <defs>

              <linearGradient

                id="telegramGradient"

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

      </a>
      
    </nav>
    </div>
  );
}