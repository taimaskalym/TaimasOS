import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <NavBar />
      <main className="flex min-h-screen w-full flex-col items-center bg-white px-6 py-24 dark:bg-black sm:px-10 md:px-16">
        <div className="flex w-full max-w-3xl flex-col items-center gap-6 pt-10 text-center sm:gap-8 sm:pt-16">
          <Image
            src="/logo.svg"
            alt="Taimas OS Logo"
            width={400}
            height={400}
            className="h-auto w-64 sm:w-80 md:w-[400px]"
          />
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Taimas OS v0.0.2
          </h1>

          <p className="max-w-md text-base leading-7 text-gray-500 sm:text-lg md:text-xl">
            A personal operating system for studying,
            surviving, and becoming better.
          </p>

        </div>
      </main>
    </div>
  );
}
