export default function FAQ() {
  return (
    <section className="relative p-10 overflow-hidden border-b-2">
      <div className="relative z-8 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <div className="text-black text-center font-medium">
            Для более подробной информации вы можете связаться с регистратором:{" "}
            <div className="flex flex-col mt-2">
              <div>
                 Тел:
                <a
                  className="font-semibold text-[#BDC31D] hover:text-[#BDC31D95] ml-1"
                  href="https://t.me/nat_lishka"
                  target="_blank"
                  rel="noreferrer"
                >
                  +375 25 959 4482 (Наталья)
                </a>
              </div>
              <div>
                ТГ:
                <a
                  className="font-semibold text-[#47A8B7] hover:text-[#47A8B795] ml-1"
                  href="https://t.me/nat_lishka"
                  target="_blank"
                  rel="noreferrer"
                >
                  @nat_lishka
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
