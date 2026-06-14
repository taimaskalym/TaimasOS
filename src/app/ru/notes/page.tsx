import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Notes() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">
            Заметки
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Это моя страница заметок. Здесь я буду делиться своими мыслями, идеями и наблюдениями о процессе создания Taimas OS, а также о технологиях, которые я изучаю. Это будет своего рода дневник моего пути в разработке операционной системы, где я могу записывать свои успехи, проблемы и решения.
          </p>

          <div className="flex py-100"> {/* Temporary spacing to push content up for better visual balance */}

          </div>

        </div>
      </main>
    </div>
  );
}