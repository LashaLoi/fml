export default function Goals() {
  return (
    <section className="py-24 bg-blueGray-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-20 text-3xl text-center font-bold font-heading font-heading tracking-px-n leading-none">
          НАШЕ ВИДЕНИЕ
        </h2>

        <div className="md:max-w-6xl mx-auto">
          <div className="flex flex-wrap -m-3.5 mb-10">
            <div className="w-full md:w-1/3 p-3.5">
              <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Духовность
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Каждое поколение нуждается в сильных лидерах, которые знают
                    Бога и следуют Его призыву.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3.5">
              <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl shadow-9xl">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Зрелость
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Каждому лидеру необходимо развивать как характер, так и
                    компетентность.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3.5">
              <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-700 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Миссия
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Божье призвание всегда связано с другими людьми, а для
                    кого-то, и другими странами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
