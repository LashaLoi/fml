import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative lg:h-screen md:h-[450px] h-[200px]">
      <Image src="/banner.jpg" fill alt="banner" className="object-fill" />
    </div>
  );
}
