import Link from "next/link";
import NavBar from "../components/NavBar";

export default function PatchNotes() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">
            История изменений
          </h1>
          
          {/* v0.0.2 */}
          <div>
          <h2 className="text-2xl font-bold mt-8">
            v0.0.2 — Мелкие обновления [2026-06-08]
          </h2>

          <h3 className="text-xl font-bold mt-4">
            Добавлено
          </h3>

          <ul className="list-disc list-inside">
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
          <h2 className="text-2xl font-bold mt-8">
            v0.0.1 — Начальный выпуск [2026-06-07]
          </h2>

          <h3 className="text-xl font-bold mt-4">
            Добавлено
          </h3>

          <ul className="list-disc list-inside">
            <li>Настроен проект Next.js</li>
            <li>Добавлена панель навигации</li>
            <li>Создан логотип Taimas OS</li>
            <li>Добавлена главная страница</li>
            <li>Добавлена страница "О системе"</li>
            <li>Добавлена страница "Заметки"</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">
            Инфраструктура
          </h3>

          <ul className="list-disc list-inside">
              <li>Инициализирован репозиторий Git</li>
              <li>Подключен GitHub</li>
              <li>Развернут на Vercel</li>
            </ul>

          <h3 className="text-xl font-bold mt-4">
            Развертывание
          </h3>

          <ul className="list-disc list-inside">
              <li>Live развертывание: taimasos.vercel.app</li>
            </ul>
          </div> 

        </div>
      </main>
    </div>
  );
}