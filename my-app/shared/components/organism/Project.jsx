import Column from "../atom/Column";
import Title from "../atom/Title";
import Text from "../atom/Text";
import ProjectGarden from "../molecule/ProjectGarden";
import ProjectCaramella from "../molecule/ProjectCaramella";
import ProjectBus from "../molecule/ProjectBus";
import ProjectMaeum from "../molecule/ProjectMaeum";

export default function Project() {
  return (
    <div className="w-full flex flex-col gap-7">
      <Title>Projects</Title>
      <Text>담당한 프로젝트를 최신 순으로 구성했습니다. 주요 내용, 역할, 관련 자료 등을 확인할 수 있습니다. </Text>
       <Column col1={<ProjectGarden />} col2={<ProjectCaramella />} /> 
       <Column col1={<ProjectBus />} col2={<ProjectMaeum />} /> 
    </div>
  );
}
