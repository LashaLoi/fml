export default function FAQ() {
  return (
    <section className="relative p-10 overflow-hidden border-b-2">
      <div className="relative z-8 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="text-black text-center font-medium">
            <span className="mr-1">Все еще есть вопросы?</span>
            Напиши нам
            <a
              className="font-semibold text-lime-500 hover:text-lime-600 ml-1"
              href="mailto: fml@ywam.by"
            >
              - fml@ywam.by
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
