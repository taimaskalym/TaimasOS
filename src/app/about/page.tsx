import Link from "next/link";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <NavBar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">
            About Taimas OS
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Taimas OS is a personal operating system designed to help you study, survive, and become hotter. It is built with the latest web technologies and is optimized for performance and usability.
          </p>
          

        </div>
      </main>
    </div>
  );
}