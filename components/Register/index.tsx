import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="max-w-[85rem] mx-auto px-6 py-4">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight flex-wrap">
            ФОРУМ <br />
            МОЛОДЕЖНЫХ <br />
            <span className="text-[#47A8B7] mr-4">ЛИДЕРОВ</span>
          </h1>
        </div>

        <div className="relative ms-4 justify-self-end">
          <Image
            src="/main-logo.jpg"
            width={500}
            height={500}
            alt="Hero Image"
          />
          {/* <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div> */}
        </div>
      </div>
    </div>
    // <div classNameName="flex justify-center">
    //   {/* <div classNameName="lg:h-[800px] md:h-[600px] h-[400px] md:w-full sm:w-5/6 w-full bg-gray-700 relative rounded-lg sm:m-4 m-0"> */}
    //   {/* <div classNameName="sm:block hidden"> */}
    //   <Image
    //     src="/main-logo.jpg"
    //     alt="main logo"
    //     priority={true}
    //     loading="eager"
    //     width={400}
    //     height={400}
    //     // style={{

    //     //   objectFit: "cover",
    //     //   objectPosition: "bottom right",
    //     //   borderRadius: "10px",
    //     // }}
    //     quality={100}
    //   />
    //   {/* </div> */}
    //   {/* <div classNameName="sm:hidden">
    //       <Image
    //         src="/small.jpg"
    //         fill
    //         alt="main logo"
    //         priority={true}
    //         loading="eager"
    //         style={{
    //           objectFit: "cover",
    //           objectPosition: "bottom",
    //           borderRadius: "10px",
    //         }}
    //         quality={100}
    //       />
    //     </div> */}
    //   {/* </div> */}
    // </div>
  );
}
