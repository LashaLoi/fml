import { motion } from "framer-motion";
import Link from "next/link";

export default function Info() {
  return (
    <section className="py-24 sm:mb-[140px] mb-0">
      <div className="container px-4 mx-auto">
        <div className="mx-auto text-center">
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0,
              duration: 0.3,
            }}
            className="inline-block mx-auto mb-6 fill-[#47A8B7]"
          >
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M26.9999 0.333374C12.3066 0.333374 0.333252 12.3067 0.333252 27C0.333252 41.6934 12.3066 53.6667 26.9999 53.6667C41.6933 53.6667 53.6666 41.6934 53.6666 27C53.6666 12.3067 41.6933 0.333374 26.9999 0.333374ZM39.7466 20.8667L24.6266 35.9867C24.2532 36.36 23.7466 36.5734 23.2133 36.5734C22.6799 36.5734 22.1733 36.36 21.7999 35.9867L14.2533 28.44C13.4799 27.6667 13.4799 26.3867 14.2533 25.6134C15.0266 24.84 16.3066 24.84 17.0799 25.6134L23.2133 31.7467L36.9199 18.04C37.6933 17.2667 38.9733 17.2667 39.7466 18.04C40.5199 18.8134 40.5199 20.0667 39.7466 20.8667Z"></path>
            </svg>
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0,
              duration: 0.3,
            }}
            className="block mb-4 text-sm font-bold text-[#BDC31D]"
          >
            Успешно!
          </motion.span>
          <motion.h3
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
            className="text-2xl font-black mb-5"
          >
            Благодарим вас за регистрацию
          </motion.h3>
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
            className="sm:text-lg text-md font-bold mb-4 max-w-[600px] min-w-[300px] mx-auto"
          >
            Надеемся, что вы проведете прекрасное время и получите для себя
            многое! Обязательно подпишитесь на наш Telegram канал. Там мы будем
            публиковать все детали по ФМЛ:{" "}
            <a
              className="cursor-pointer text-[#BDC31D] font-extrabold"
              href="https://t.me/fmlby"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://t.me/fmlby
            </a>
          </motion.p>

          <Link
            className="group relative inline-block h-12 xs:w-60 bg-blueGray-900 rounded-md w-[300px]"
            href="/"
          >
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
              className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300"
            >
              <button className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">НА ГЛАВНУЮ</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                />
              </button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
