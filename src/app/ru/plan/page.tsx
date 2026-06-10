import Link from "next/link";
import NavBar from "@/app/components/NavBar";

export default function Plan() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar locale="ru" />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">
            План
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Здесь я буду делиться своими планами на Taimas OS, включая предстоящие функции, улучшения и долгосрочные цели. Пока что единственная цель - построить и изучить в процессе создания Taimas OS.
          </p>

          <div className="flex py-100"> {/* Temporary spacing to push content up for better visual balance */}

          </div>

        </div>
      </main>
    </div>
  );
}