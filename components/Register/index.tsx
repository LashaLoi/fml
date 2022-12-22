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
            className="text-black mb-10 sm:text-5xl text-4xl font-bold  sm:text-center text-start "
          >
            <div className="first-letter:text-yellow-500 sm:first-letter:text-6xl first-letter:text-4xl ">
              ФОРУМ
            </div>
            <div className="first-letter:text-purple-500 sm:first-letter:text-6xl first-letter:text-4xl ">
              МОЛОДЕЖНЫХ
            </div>
            <div className="first-letter:text-gray-700 sm:first-letter:text-6xl first-letter:text-4xl ">
              ЛИДЕРОВ
            </div>
          </motion.h2>
          <motion.img
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
              delay: 0.5,
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
              delay: 0.6,
              duration: 0.3,
            }}
            className="mb-11 md:inline-block sm:visible hidden"
          >
            <Link
              href="/register"
              className="relative px-5 py-3 font-medium text-white group"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative">Регистрация</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
