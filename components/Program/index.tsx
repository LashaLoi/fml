import Link from "next/link";

const icon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
    viewBox="0 0 24 24"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    <path d="M22 4L12 14.01l-3-3"></path>
  </svg>
);

export default function Program() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            ЧТО В ПРОГРАММЕ
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            РАСПИСАНИЕ
          </p>
        </div>
        <h1 className="sm:text-2xl text-lg font-medium text-center title-font text-gray-900 mb-4">
          4 февраля 2022
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">
                регистрация, расселение - 10.00
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">1 сессия - 11.30</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">обед - 13.30</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">семинары - 14.30</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">кофе-пауза - 16.00</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">
                Topic Talks - 16.30
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">ужин - 18.00</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">2 сессия - 19.00</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">кофе-пауза - 20.30</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">
                вечер-хвалы, молитвы - 21.00
              </span>
            </div>
          </div>
        </div>

        <h1 className="sm:text-2xl text-lg font-medium text-center title-font text-gray-900 my-4 mt-20">
          5 февраля 2022
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">8.00 - молитва</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">9.00 - завтрак</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">10.00 - 3 сессия</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">11.30 - кофе-пауза</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">12.00 - семинары</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">13.00 - обед</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">
                14.00 - Topic Talks
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">15.30 - кофе-пауза</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">16.00 - 4 сессия</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">18.30 - ужин</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              {icon}
              <span className="title-font font-medium">19.30 - отъезд</span>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
}
