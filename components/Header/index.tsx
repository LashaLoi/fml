import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center z-10 backdrop-blur-sm bg-white/90">
      <Link
        href="/"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <span className="text-3xl font-extrabold">ФМЛ</span>
      </Link>
      <Link
        href="/register"
        className="relative px-5 py-2 font-medium text-white group"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
        <span className="relative"> Регистрация</span>
      </Link>
    </nav>
  );
}
