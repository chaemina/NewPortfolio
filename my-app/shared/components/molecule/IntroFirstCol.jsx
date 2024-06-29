"use client";

import Image from "next/image";
import ProfileImage from "../../../assets/Images/Profile.jpg";
import Title from "../atom/Title";
import Text from "../atom/Text";

export default function IntroFirstCol() {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative w-[100px] sm:w-[150px] md:w-[250px] lg:w-[250px] xl:w-[300px]">
        <Image src={ProfileImage} alt="ProfileImage" />
      </div>
      <div>
        <Title>Chae MinA</Title>
        <Text>Gwangju, South Korea</Text>
        <Text>Tel. 010-2103-6106</Text>
        <Text>E. chaemina82@naver.com</Text>
      </div>
    </div>
  );
}
