import Title from "../atom/Title";
import Intro from "../organism/Intro";
import Experience from "../organism/Experience";
import Project from "../organism/Project";
import Skills from "../organism/Skills"

export default function MainTemplate() {
  return (
    <div className="w-full flex flex-col gap-5 sm:w-[600px] md:w-[728px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1300px] ">
      <Title>FrontEnd Developer</Title>
      <hr className="border-2 border-myblue" />
      <Intro />
      <Skills/>
      <Experience />
      <hr className="border-2 border-sky" />
      <Project />
      
    </div>
  );
}
