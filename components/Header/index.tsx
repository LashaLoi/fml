import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center z-10 backdrop-blur-sm bg-white/90">
      <Link
        href="/"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <span className="ml-3 text-xl">FML</span>
      </Link>
      <ul className="font-montserrat items-center flex">
        <li className="growing-underline mx-3">
          <Link href="/register">Регистрация</Link>
        </li>
      </ul>
    </nav>
  );
}
