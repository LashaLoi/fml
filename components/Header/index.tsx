// import Link from "next/link";

import TrueFocus from "@/components/components/TrueFocus";

export default function Header() {
  return (
    <nav className=" flex justify-center px-6 py-4 w-full content-center z-10 backdrop-blur-sm bg-white/90">
      {/* <Link
        href="/"
        className="flex items-center md:justify-start justify-center text-gray-900 mx-auto"
      > */}
      <TrueFocus
        sentence="ФМЛ x10"
        manualMode={false}
        blurAmount={5}
        borderColor="yellow"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      {/* <span className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 text-4xl font-sans relative z-20 font-bold tracking-tight mx-auto">
        ФМЛ
      </span> */}
      {/* </Link> */}
      {/* <Link
        href="/register"
        className="relative px-5 py-2 text-black group bg-[#BDC31D] hover:bg-[#BDC31D95] active:bg-yellow-500 flex gap-4 justify-between"
      >
        РЕГИСТРАЦИЯ
      </Link> */}
    </nav>
  );
}
