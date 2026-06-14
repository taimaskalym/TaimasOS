import Link from "next/link";
import NavBar from "../components/NavBar";

export default function PatchNotes() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">История изменений</h1>

          {/* v0.0.2 */}
          <div>
            <h2 className="mt-8 text-2xl font-bold">v0.0.2 — Мелкие обновления [2026-06-08]</h2>

            <h3 className="mt-4 text-xl font-bold">Добавлено</h3>

            <ul className="list-inside list-disc">
              <li>Страница примечаний к патчам</li>
              <li>Страница плана</li>
              <li>System отслеживания версий</li>
              <li>Кнопка контакта в Telegram в панели навигации</li>
              <li>Кнопка логотипа навигации</li>
              <li>Исправлена панель навигации во время прокрутки</li>
              <li>Прозрачный градиентный фон навигации</li>
              <li>Символ TAIMAS•OS в панели навигации</li>
            </ul>
          </div>

          {/* v0.0.1 */}
          <div>
            <h2 className="mt-8 text-2xl font-bold">v0.0.1 — Начальный выпуск [2026-06-07]</h2>

            <h3 className="mt-4 text-xl font-bold">Добавлено</h3>

            <ul className="list-inside list-disc">
              <li>Настроен проект Next.js</li>
              <li>Добавлена панель навигации</li>
              <li>Создан логотип Taimas OS</li>
              <li>Добавлена главная страница</li>
              <li>Добавлена страница "О системе"</li>
              <li>Добавлена страница "Заметки"</li>
            </ul>

            <h3 className="mt-4 text-xl font-bold">Инфраструктура</h3>

            <ul className="list-inside list-disc">
              <li>Инициализирован репозиторий Git</li>
              <li>Подключен GitHub</li>
              <li>Развернут на Vercel</li>
            </ul>

            <h3 className="mt-4 text-xl font-bold">Развертывание</h3>

            <ul className="list-inside list-disc">
              <li>Live развертывание: taimasos.vercel.app</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
