import Link from "next/link";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <section className="pt-24 pb-28 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-lg mx-auto">
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
            className="mb-5 sm:text-6xl text-5xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight"
          >
            Форум молодежных лидеров
          </motion.h2>
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
            Больше чем лидерство
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
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Регистрация
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
