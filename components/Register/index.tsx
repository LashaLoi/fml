import Link from "next/link";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <section className="pt-12 pb-28 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mx-auto">
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.3,
            }}
            className="text-gray-500 max-w-md mx-auto mb-10 sm:text-6xl text-5xl md:text-7xl font-bold font-heading text-start tracking-px-n leading-tight "
          >
            <div className="first-letter:text-yellow-500">Форум</div>
            <div className="first-letter:text-purple-500">Молодежных</div>

            <div className="first-letter:text-black">Лидеров</div>
          </motion.h2>
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.3,
            }}
            className="lg:w-4/6 md:w-3/6 w-full mb-10 object-cover object-center rounded mx-auto"
            alt="hero"
            src="/banner.jpg"
          />
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.3,
            }}
            className="mb-7 text-lg text-gray-600 font-medium"
          >
            3-4 февраля 2023
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.3,
            }}
            className="mb-11 md:inline-block"
          >
            <Link href="/register">
              <button className="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Регистрация
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
