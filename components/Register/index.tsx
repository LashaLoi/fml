import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Register() {
  return (
    <div className="flex justify-center pt-[60px]">
      <div className="lg:h-[800px] md:h-[600px] h-[400px] md:w-full sm:w-5/6 w-full bg-gray-700 relative rounded-lg sm:m-4 m-0">
        <div className="sm:block hidden">
          <Image
            src="/main-logo.jpg"
            fill
            alt="main logo"
            priority={true}
            loading="eager"
            style={{
              objectFit: "cover",
              objectPosition: "bottom right",
              borderRadius: "10px",
            }}
            quality={100}
          />
        </div>
        <div className="sm:hidden">
          <Image
            src="/small.jpg"
            fill
            alt="main logo"
            priority={true}
            loading="eager"
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
              borderRadius: "10px",
            }}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
