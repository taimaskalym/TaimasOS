import Link from "next/link";
import NavBar from "@/app/components/NavBar";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <NavBar locale="ru" />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">
            About Taimas OS
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Просто персональная операционная система для всего, что происходит в моей жизни.
          </p>

          <p className="mt-4 text-xl text-gray-400">
            Создана с использованием Next.js и Tailwind CSS.
          </p>

          <p className="mt-4 text-xl text-gray-400">
            В будущем я планирую добавить систему аккаунтов, хранение данных и другие возможности для масштабирования проекта. Цель — изучать теорию на практике, одновременно создавая полезный инструмент для себя.
          </p>

          <div className="flex py-100"> {/* Temporary spacing to push content up for better visual balance */}
          
          </div>

        </div>
      </main>
    </div>
  );
}