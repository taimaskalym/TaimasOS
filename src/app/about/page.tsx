import Link from "next/link";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />

      <section className="px-auto flex w-full max-w-3/4 flex-col gap-6 py-32 text-justify text-lg md:max-w-3xl md:items-start md:text-xl">
        <h1 className="text-3xl font-bold md:text-6xl">About Taimas OS</h1>
        <div className="mt-4 text-gray-400">
          <p>Just a personal operating system for anything going in my life.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
          <p>
            For scaling, I will be adding account system, data storage, and more features in the
            future. The goal is to learn the theory while building a "useful" tool for myself.
          </p>
        </div>
      </section>
    </main>
  );
}
