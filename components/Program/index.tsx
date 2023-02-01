import Image from "next/image";
import Link from "next/link";

const icon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
    viewBox="0 0 24 24"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    <path d="M22 4L12 14.01l-3-3"></path>
  </svg>
);

export default function Program() {
  return (
    <>
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
            3 февраля 2023, пт
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">
                  10:00 - регистрация, расселение
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">11:30 - Сессия 1</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">13:30 - обед</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">14:30 - семинары</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">
                  16:00 - кофе-пауза
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">
                  16:30 - topic talks
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">18:00 - ужин</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">
                  19:00 - вечер хвалы и поклонения
                </span>
              </div>
            </div>
          </div>

          <h1 className="sm:text-2xl text-lg font-medium text-center title-font text-gray-900 my-4 mt-20">
            4 февраля 2023, сб
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">8:00 - молитва</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">9:00 - завтрак</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">10:00 - Сессия 2</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">
                  11:30 - кофе-пауза
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">12:00 - семинары</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">13:00 - обед</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">
                  14:00 - topic talks
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">
                  15:30 - кофе-пауза
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">16:00 - Сессия 3</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">18:30 - ужин</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {icon}
                <span className="title-font font-medium">19:30 - отъезд</span>
              </div>
            </div>
          </div>
          {/* <div className="mt-10 w-full flex items-center justify-center">
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
          </div> */}
        </div>
      </section>

      <section className="text-gray-600 body-font py-24">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            ГЛАВНЫЙ СПИКЕР ФОРУМА
          </h1>
        </div>
        <div className="container mx-auto flex  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/main.JPG"
              height={720}
              width={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ПРАВОЗОРОВ ДЕНИС АНАТОЛЬЕВИЧ
            </h1>
            <p className="mb-8 leading-relaxed">
              Ректор колледжа Объединения, лидер, проповедник, пастор, муж одной
              жены и заботливый отец двух детей.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
