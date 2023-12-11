import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed flex justify-between px-6 py-4 w-full content-center z-10 backdrop-blur-sm bg-white/90 border-b-2">
      <Link
        href="/"
        className="flex items-center md:justify-start justify-center text-gray-900"
      >
        <span className="sm:text-3xl text-lg">ФМЛ / EXTRA</span>
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://t.me/fml_next_bot"
        className="relative px-5 py-2 font-medium text-white group bg-gray-700 hover:bg-gray-800 active:bg-gray-900"
      >
        РЕГИСТРАЦИЯ
      </a>
    </nav>
  );
}
