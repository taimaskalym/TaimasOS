import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex flex-1 w-full flex-col items-center py-16 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center sm:items-center sm:text-center">
          <Image
            src="/logo.svg"
            alt="Taimas OS Logo"
            width={400}
            height={400}
          />
          <h1 className="text-6xl font-bold ">
            Taimas OS v0.1.0
          </h1>

          <p className="max-w-md text-xl text-gray-500">
            A personal operating system for studying,
            surviving, and becoming better.
          </p>

        </div>
      </main>
    </div>
  );
}
