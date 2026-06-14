import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans">
      <NavBar />
      <main className="flex w-full flex-1 flex-col items-center bg-white px-16 py-16 dark:bg-black">
        <div className="flex flex-col items-center gap-8 pt-16 text-center sm:items-center sm:text-center">
          <Image src="/logo.svg" alt="Taimas OS Logo" width={400} height={400} />
          <h1 className="text-6xl font-bold">Taimas OS v0.0.2</h1>

          <p className="max-w-md text-xl text-gray-500">
            Персональная операционная система для всего, что происходит в моей жизни.
          </p>

          <div className="flex py-100">
            {" "}
            {/* Temporary spacing to push content up for better visual balance */}
          </div>
        </div>
      </main>
    </div>
  );
}
