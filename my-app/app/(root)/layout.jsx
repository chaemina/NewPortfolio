import Banner from "~/assets/Images/Banner.svg";
import Image from "next/image";

export default function MainLayout({ children }) {
  return (
    <>
      <header className="w-full">
        <div className="relative w-full h-[100px] sm:h-[200px] md:h-[280px] lg:[300px] xl:[400px]">
          <Image src={Banner} alt="Banner" layout="fill" objectFit="cover" />
        </div>
      </header>
      <div className="p-4">{children}</div>
    </>
  );
}
