import Banner from "~/assets/Images/Banner.svg";
import Image from "next/image";
import Container from "~/shared/components/atom/Container";
export default function MainLayout({ children }) {
  return (
    <>
      <header className="w-full">
        <div className="relative w-full h-[100px] sm:h-[150px] md:h-[250px] lg:h-[250px] xl:h-[300px]">
          <Image src={Banner} alt="Banner" layout="fill" objectFit="cover" />
        </div>
      </header>
      <Container>{children}</Container>
    </>
  );
}
