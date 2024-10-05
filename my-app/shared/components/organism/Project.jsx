import Column from "../atom/Column";
import Title from "../atom/Title";
import Text from "../atom/Text";
import ProjectGarden from "../molecule/ProjectGarden";
import ProjectCaramella from "../molecule/ProjectCaramella";
import ProjectBus from "../molecule/ProjectBus";
import ProjectMaeum from "../molecule/ProjectMaeum";
import ProjectWasteBank from "../molecule/ProjectWasteBank";

export default function Project() {
  return (
    <div className="w-full flex flex-col gap-7">
      <Title>Projects</Title>
       <Column col1={<ProjectGarden />} col2={<ProjectCaramella />} /> 
       <Column col1={<ProjectBus />} col2={<ProjectMaeum />} /> 
       <Column col1={<ProjectWasteBank />}/> 
    </div>
  );
}
