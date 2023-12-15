export default function Price() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-lime-500 hover:text-lime-600 tracking-widest font-medium title-font mb-1">
            ФМЛ
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            СКОЛЬКО СТОИТ?
          </h1>
          <p className="my-7 sm:text-2xl text-lg text-gray-600 font-medium max-w-3xl mx-auto">
            Участие возможно за пожертвование в размере{" "}
            <span className="font-extrabold text-black">140р</span> в пресечете
            на бел.руб, а с 21 января -{" "}
            <span className="font-extrabold text-black">150р</span>{" "}
            соответственно.
          </p>
        </div>
      </div>
    </section>
  );
}
