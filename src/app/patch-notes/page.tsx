import NavBar from "../components/NavBar";

export default function PatchNotes() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />

      <section className="px-auto flex w-full max-w-3/4 flex-col gap-6 py-32 text-justify text-lg md:max-w-3xl md:items-start md:text-xl">
        <h1 className="text-3xl font-bold md:text-6xl">Patch Notes</h1>

        <div>

          {/* v0.0.2 */}
          <div className="text-gray-400">
            <h2 className="mt-8 text-2xl font-bold text-white">
              v0.0.2 — Minor Updates [2026-06-08]
            </h2>

            <h3 className="mt-4 text-xl font-bold text-white">Added</h3>

            <ul className="list-inside list-disc">
              <li>Patch Notes page</li>
              <li>Plan page</li>
              <li>Version tracking system</li>
              <li>Telegram contact button in navigation bar</li>
              <li>Navigation logo button</li>
              <li>Fixed navigation bar while scrolling</li>
              <li>Transparent gradient navigation background</li>
              <li>TAIMAS•OS wordmark in navigation bar</li>
            </ul>
          </div>

          {/* v0.0.1 */}
          <div className="text-gray-400">
            <h2 className="mt-8 text-2xl font-bold text-white">
              v0.0.1 — Initial Release [2026-06-07]
            </h2>

            <h3 className="mt-4 text-xl font-bold text-white">Added</h3>

            <ul className="list-inside list-disc">
              <li>Set up Next.js project</li>
              <li>Added navigation bar</li>
              <li>Designed Taimas OS logo</li>
              <li>Added Home page</li>
              <li>Added About page</li>
              <li>Added Notes page</li>
            </ul>

            <h3 className="mt-4 text-xl font-bold text-white">Infrastructure</h3>

            <ul className="list-inside list-disc">
              <li>Initialized Git repository</li>
              <li>Connected GitHub</li>
              <li>Deployed on Vercel</li>
            </ul>

            <h3 className="mt-4 text-xl font-bold text-white">Deployment</h3>

            <ul className="list-inside list-disc">
              <li>Live deployment: taimasos.vercel.app</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
