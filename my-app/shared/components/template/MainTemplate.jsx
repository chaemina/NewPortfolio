import Title from "../atom/Title";
import Intro from "../organism/Intro";

export default function MainTemplate() {
  return (
    <div className="w-full flex flex-col gap-20 sm:w-[600px] md:w-[728px] lg:w-[980px] xl:w-[1240px] ">
      <Title>채민아 FrontEnd Developer</Title>
      <Intro />
      <Title>채민아 FrontEnd Developer</Title>
    </div>
  );
}
