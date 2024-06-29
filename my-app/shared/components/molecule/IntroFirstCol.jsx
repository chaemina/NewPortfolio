"use client";

import Image from "next/image";
import ProfileImage from "../../../assets/Images/Profile.jpg";

export default function IntroFirstCol() {
  return (
    <div className="relative w-[100px] sm:w-[150px] md:w-[250px] lg:w-[250px] xl:w-[300px]">
      <Image src={ProfileImage} alt="ProfileImage" />
    </div>
  );
}
