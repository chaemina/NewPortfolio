"use client";

import Image from "next/image";
import ProfileImage from "../../../assets/Images/Profile.jpg";
import Title from "../atom/Title";
import Text from "../atom/Text";

export default function IntroFirstCol() {
  return (
    <div className="flex flex-col gap-10 items-center md:items-start">
      <div className="relative w-[200px] sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[300px]">
        <Image src={ProfileImage} alt="ProfileImage" />
      </div>
      <div>
        <Title>Chae MinA</Title>
        <Text>Tel. 010-2103-6106</Text>
        <Text>E. chaemina82@naver.com</Text>
        <Text>Date of birth. 2002/06/07</Text>
      </div>
      <div className="flex flex-col gap-2">
        <Title>모두를 연결하는</Title>
        <Text>사용자의 접근성을 최대로 고민해요</Text>
        {/* 추가 */}
      </div>
    </div>
  );
}
