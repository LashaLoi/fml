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
                ФМЛ 2024 - EXTRA
              </h2>
              <p className="mt-6 text-gray-600">
                Готов стартануть 2024 с мощной духовной подзарядки? 👊🏻
              </p>
              <p className="mt-4 text-gray-600">
                Extra ФМЛ 2024 - вот, что тебе нужно 🦾
              </p>
              <p className="mt-4 text-gray-600">
                Тема ⛽️ Extra пришла из откровения, что сейчас время нырять
                глубоко в отношения с Богом и запасаться Его Духом, практиковать
                свою веру и ожидать Его всем сердцем (Матфея 25:1-13).
              </p>
              <p className="mt-4 text-gray-600">
                ФМЛ (он же форум молодежных лидеров) - это 2 насыщенных дня, где
                тебя ждут:
              </p>
              <p className="mt-4 text-gray-600">
                ⚡️ поклонение и молитва <br />
                ⚡️ актуальное послание от главного спикера (следи за анонсами
                😉) <br />
                ⚡️ много общения и новые знакомства с молодежными лидерами
                Беларуси <br />
                ⚡️ свежие идеи, рабочие инструменты, вдохновение для твоего
                служения <br />
                ⚡️ кофе, улыбки, настолки, время без интернета и многое другое
              </p>
              <p className="mt-4 text-gray-600">
                Не пропусти 2-3 февраля ✍🏻 Локация та же 😉 Ждём именно тебя 🫶🏻
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
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  src="/03.jpg"
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
