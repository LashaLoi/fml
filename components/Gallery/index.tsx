import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <>
      <div className=" bg-white ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <motion.img src="/01.jpg" alt="image" loading="lazy" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                ФМЛ 2025
              </h2>
              <p className="mt-6 text-gray-600">
                ФМЛ - это ежегодное мероприятие, объединяющее молодёжных и
                подростковых лидеров Беларуси для общения, обмена опытом,
                вдохновения и снаряжения для Божьего дела.
              </p>
              <p className="mt-4 text-gray-600">
                Проект стартовал в 2015 году. Этот ФМЛ будет 9-ым в истории.
                Если ты хочешь вспомнить, какие темы были в прошлые года, мы
                сделали для тебя подборку 👇🏻
              </p>
              <p className="mt-4 text-gray-600">
                ФМЛ 2015: Один Господь, одна вера, одно крещение <br />
                ФМЛ 2018: Кого Мне послать? И кто пойдет для Нас? <br />
                ФМЛ 2019: Ходить во свете
                <br />
                ФМЛ 2020: Сердце лидера <br />
                ФМЛ 2021: Испытание временем
                <br />
                ФМЛ 2022: Больше, чем лидерство <br />
                ФМЛ 2023: Верен Призывающий
                <br />
                ФМЛ 2024: Extra
              </p>
              <p className="mt-4 text-gray-600">
                В этом году мы будем нырять вместе в Писание, молитву,
                поклонение, чтобы наполнятся духом и силой (1-Кор 2:4). Мы
                верим, что молодежь нашей страны нуждается в силе Духа Святого,
                который оживляет мертвое. Все философии и учения этого мира
                пройдут, мода поменяется, тренды устареют и выученная
                религиозность тоже подведет, а реальная встреча с живым Богом
                изменит сердце и даст вечную жизнь 🌿
              </p>
              <p className="mt-4 text-gray-600">
                Мы делаем это мероприятие с желанием позаботиться о тех, кто
                служит другим. Мы верим, что каждый участник переживёт на ФМЛ
                атмосферу принятия, поддержки, общения на лидерском уровне.
              </p>
              <p className="mt-4 text-gray-600">
                Количество мест ограничено, поэтому не упусти возможность стать
                частью этого события.
              </p>
              <p className="mt-4 text-gray-600">
                С любовью и молитвой, команда ФМЛ ❣️
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font mb-16">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/02.jpg"
                  fill
                />
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-200 bg-white opacity-0 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/010.jpg"
                  fill
                />
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-200 bg-white opacity-0 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/04.jpg"
                  fill
                />
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-200 bg-white opacity-0 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/05.jpg"
                  fill
                />
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-200 bg-white opacity-0 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/06.jpg"
                  fill
                />
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-200 bg-white opacity-0 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/08.jpg"
                  fill
                />
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-200 bg-white opacity-0 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
