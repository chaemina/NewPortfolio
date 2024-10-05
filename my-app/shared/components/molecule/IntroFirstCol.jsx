"use client";

import Image from "next/image";
import ProfileImage from "../../../assets/Images/Profile.jpg";
import Title from "../atom/Title";
import Text from "../atom/Text";
import Link from "next/link";

export default function IntroFirstCol() {
  return (
    <div className="flex flex-col gap-10 items-center md:items-start">
      <div className="relative w-[200px] sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[300px]">
        <Image src={ProfileImage} alt="ProfileImage" />
      </div>
      <div>
        <Title>Chae MinA</Title>
        <Text>Tel. 010-2103-6106</Text>
        <Text>E. codebychaemina@gmail.com</Text>
        <Text>Date of birth. 2002/06/07</Text>
        <Link href={"https://github.com/chaemina"} className="font-bold text-myblue underline">
          <Text>github link here</Text>
        </Link>
        <Link href={"https://medium.com/@chaemina8282"} className="font-bold text-myblue underline">
          <Text>medium link here</Text>
        </Link>
       
      </div>
      <div className="flex flex-col gap-2">
        <Title>모두를 연결하는</Title>
        <Text>접근성 개선에 관심 있어요,</Text>
        <Text>성공이 아닌 경험으로 성장해요 !</Text>
      </div>
    </div>
  );
}
