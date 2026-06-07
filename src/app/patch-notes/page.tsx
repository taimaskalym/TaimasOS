import Link from "next/link";
import NavBar from "../components/NavBar";

export default function PatchNotes() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-bold">
            Patch Notes
          </h1>
          
          {/* v0.0.2 */}
          <div>
          <h2 className="text-2xl font-bold mt-8">
            v0.0.2 — Minor Updates [2026-06-08]
          </h2>

          <h3 className="text-xl font-bold mt-4">
            Added
          </h3>

          <ul className="list-disc list-inside">
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
          <div>
          <h2 className="text-2xl font-bold mt-8">
            v0.0.1 — Initial Release [2026-06-07]
          </h2>

          <h3 className="text-xl font-bold mt-4">
            Added
          </h3>

          <ul className="list-disc list-inside">
            <li>Set up Next.js project</li>
            <li>Added navigation bar</li>
            <li>Designed Taimas OS logo</li>
            <li>Added Home page</li>
            <li>Added About page</li>
            <li>Added Notes page</li>
          </ul>

          <h3 className="text-xl font-bold mt-4">
            Infrastructure
          </h3>

          <ul className="list-disc list-inside">
              <li>Initialized Git repository</li>
              <li>Connected GitHub</li>
              <li>Deployed on Vercel</li>
            </ul>

          <h3 className="text-xl font-bold mt-4">
            Deployment
          </h3>

          <ul className="list-disc list-inside">
              <li>Live deployment: taimasos.vercel.app</li>
            </ul>
          </div> 

        </div>
      </main>
    </div>
  );
}