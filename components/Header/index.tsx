import Link from "next/link";

export default function Header() {
  return (
    <nav className=" flex justify-between px-6 py-4 w-full content-center z-10 backdrop-blur-sm bg-white/90">
      <Link
        href="/"
        className="flex items-center md:justify-start justify-center text-gray-900"
      >
        <span className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 text-2xl font-sans relative z-20 font-bold tracking-tight">
          ФМЛ
        </span>
      </Link>
      <Link
        href="/register"
        className="relative px-5 py-2 text-black group bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-500 flex gap-4 justify-between"
      >
        РЕГИСТРАЦИЯ
      </Link>
    </nav>
  );
}
