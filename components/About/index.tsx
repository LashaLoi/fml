export default function About() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-7">
          НАШИ СПИКЕРЫ
        </h1>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap max-w-6xl mx-auto -m-3">
          <div className="w-full md:w-1/3 p-3">
            <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
              <img
                className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?quality=75&width=982&height=726&auto=webp"
                alt=""
              />
              <div className="bg-gradient-white absolute bottom-0 left-0 w-full p-8 pt-20">
                <h3 className="mb-1 text-2xl font-semibold leading-snug">
                  Привет
                </h3>
                <p className="text-gray-600 font-medium">Как дела</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-3">
            <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
              <img
                className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                src="https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"
                alt=""
              />
              <div className="bg-gradient-white absolute bottom-0 left-0 w-full p-8 pt-20">
                <h3 className="mb-1 text-2xl font-semibold leading-snug">
                  Александ Герасимович
                </h3>
                <p className="text-gray-600 font-medium">
                  Совместное изучении Библии в группах
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-3">
            <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
              <img
                className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"
                alt=""
              />
              <div className="bg-gradient-white absolute bottom-0 left-0 w-full p-8 pt-20">
                <h3 className="mb-1 text-2xl font-semibold leading-snug">
                  Наталья Шейбак
                </h3>
                <p className="text-gray-600 font-medium">
                  Как лидеру найти баланс духовности и человечности?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="text-gray-600 body-font">
      <div className="my-32">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-7">
              В программе
            </h1>
          </div>
          <ul className="overflow-hidden shadow-md">
            <li className="sm:text-2xl text-lg sm:flex items-center justify-between sm:p-10 p-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
              <span>Как лидеру найти баланс духовности и человечности?</span>
              <span> - Наталья Шейбак</span>
            </li>
            <li className="sm:text-2xl text-lg sm:flex items-center justify-between sm:p-10 p-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
              <span>Совместное изучении Библии в группах</span>
              <span> - Александ Герасимович</span>
            </li>
            <li className="sm:text-2xl text-lg sm:flex items-center justify-between sm:p-10 p-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
              <span>Голубые каски миротворчества</span>
              <span> - Павел Калоша</span>
            </li>

            <li className="sm:text-2xl text-lg sm:flex items-center justify-between sm:p-10 p-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
              <span>Финансовое ученичество</span>
              <span> - Андрей Пташников</span>
            </li>
          </ul>
        </div>
      </div>
    </section> */
}
