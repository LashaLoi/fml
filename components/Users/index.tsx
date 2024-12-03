export default function Users({ isSafari }: { isSafari: boolean }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-80"></div>

      <section
        className={`pt-24 pb-32 ${
          isSafari ? "" : "bg-fixed"
        } bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/abstract-retro-wave-background_36662-1288.jpg')] overflow-hidden`}
      >
        <div className="relative z-8 container px-4 mx-auto">
          <h2 className="mb-16 sm:text-6xl text-3xl text-white font-bold font-heading text-center tracking-px-n leading-tight">
            Отзывы участников ФМЛ2024
          </h2>
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 bg-white bg-opacity-80 border rounded-4xl">
                <p className="text-lg font-medium">
                  Мне очень необходимо было это время. Я получила ответы на
                  многие вопросы. Спасибо за этот проект!
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 bg-white bg-opacity-80 border rounded-4xl">
                <p className="text-lg font-medium">
                  Самые прекрасные впечатления! Спасибо за подъем, наполнение,
                  обновление и вдохновение
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 bg-white bg-opacity-80 border rounded-4xl">
                <p className="text-lg font-medium">
                  Вауууу,очень ценное время,спасибо оргонизаторам
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 bg-white bg-opacity-80 border rounded-4xl">
                <p className="text-lg font-medium">
                  Неверагодны час у якім я абнавіўся у Госпадзе, шмат адказаў на
                  пытанні якія накапілася за паўгады.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 bg-white bg-opacity-80 border rounded-4xl">
                <p className="text-lg font-medium">
                  Очень благодарна Богу за возможность быть на этом событии.
                  🔥🔥🔥 Бог говорил очень много вещей, и многое я смогу
                  сказать, когда сделаю с Богом определённые шаги.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 bg-white bg-opacity-80 border rounded-4xl">
                <p className="text-lg font-medium">
                  Первый раз на ФМЛ. Спасибо за опыт, новые знакомства, за
                  связи, которые будут служить взаимоскреплению.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
