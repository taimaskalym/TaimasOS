import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Notes() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">
            Notes
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            This is my notes page.
          </p>

        </div>
      </main>
    </div>
  );
}