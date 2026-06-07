import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-12 py-6 text-lg">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/notes">Notes</Link>
    </nav>
  );
}