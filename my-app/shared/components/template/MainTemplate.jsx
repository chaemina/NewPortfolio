import Title from "../atom/Title";
import Intro from "../organism/Intro";

export default function MainTemplate() {
  return (
    <div className="w-full flex flex-col gap-5 sm:w-[600px] md:w-[728px] lg:w-[980px] xl:w-[1240px] ">
      <Title>채민아 FrontEnd Developer</Title>
      <hr className="border-2 border-orange-200" />
      <Intro />
    </div>
  );
}
