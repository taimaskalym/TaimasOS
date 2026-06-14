import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <section className="flex max-w-80 flex-col items-center gap-7 py-30 sm:items-center md:max-w-screen md:px-20 md:py-30">
        <Image
          src="/logo.svg"
          alt="Taimas OS Logo"
          width={400}
          height={400}
          className="size-50 md:size-100"
        />
        <h1 className="font-sans text-4xl font-semibold md:text-6xl">Taimas OS v0.0.2</h1>

        <p className="text-center">
          A personal operating system for studying, surviving, and becoming better.
        </p>
      </section>
    </main>
  );
}
