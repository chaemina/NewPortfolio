"use client"

import Container from "~/shared/components/atom/Container";
import Image from "next/image";
import Banner from "~/assets/Images/Banner.svg";
import { useViewport, verticalScale } from "~/shared/utils/Scale";

const Page = () => {
  const { width } = useViewport();

  return (
    <Container>
      <div className="w-full">
        <Image src={Banner} alt="Banner" />
        </div>
    </Container>
  );
};

export default Page;

