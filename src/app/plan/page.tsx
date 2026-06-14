import NavBar from "../components/NavBar";

export default function Plan() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />

      <section className="px-auto flex w-full max-w-3/4 flex-col gap-6 py-32 text-justify text-lg md:max-w-3xl md:items-start md:text-xl">
        <h1 className="text-3xl font-bold md:text-6xl">Plan</h1>

        <div className="mt-4 text-gray-400">
          <p>
            Here I will share my plans for Taimas OS, including upcoming features, improvements, and
            long-term goals.
          </p>

          <p>For now, the only goal is to build and study in the process of building Taimas OS.</p>
        </div>
      </section>
    </main>
  );
}
