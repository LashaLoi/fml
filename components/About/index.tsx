import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

export default function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-4 sm:px-8 max-w-5xl m-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-7">
            В программе
          </h1>
        </div>
        <Carousel swipeable autoPlay stopOnHover infiniteLoop>
          <div>
            <Image src="/s1.jpg" height={400} width={500} alt="Спикер" />
          </div>
          <div>
            <Image src="/s2.jpg" height={400} width={500} alt="Спикер" />
          </div>
          <div>
            <Image src="/s3.jpg" height={400} width={500} alt="Спикер" />
          </div>
          <div>
            <Image src="/s4.jpg" height={400} width={500} alt="Спикер" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
