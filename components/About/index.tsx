export default function About() {
  return (
    <section className="text-gray-600 body-font">
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
    </section>
  );
}
