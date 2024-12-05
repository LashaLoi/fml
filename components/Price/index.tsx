import Link from "next/link";

export default function Price() {
  return (
    <>
      {/* <section className="text-gray-600 body-font ">
        <div className="container px-5 pt-8 mx-auto">
          <iframe
            className="video w-full h-[500px]"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src="https://youtube.com/embed/tkPNz5fnU6w"
          ></iframe>
        </div>
      </section> */}
      <section className="flex justify-center sm:mb-8 mb-0">
        <Link
          href="/register"
          className="relative px-5 py-2 text-black group bg-[#BDC31D] hover:bg-[#BDC31D95] active:bg-yellow-500  mx-auto"
        >
          РЕГИСТРАЦИЯ
        </Link>
      </section>
    </>
  );
}
