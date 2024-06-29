import Card from "../atom/Card";
import ProjectImage from "../../../assets/Images/Maeum.png";
import icon from "../../../assets/Images/maeumicon.png";

export default function ProjectMaeum() {
  const tags = [
    { label: 'React Native', bgColor: 'bg-blue-200', textColor: 'text-blue-700' },
    { label: 'JavaScript', bgColor: 'bg-yellow-200', textColor: 'text-black' },
    { label: 'React Query', bgColor: 'bg-pink-500', textColor: 'text-white' },
    { label: 'Redux', bgColor: 'bg-purple-200', textColor: 'text-black' },
    { label: 'Lottie', bgColor: 'bg-teal-200', textColor: 'text-teal-700' },
    { label: 'nativewind', bgColor: 'bg-sky-500', textColor: 'text-white' },
  ];

  return (
    <div>
      <Card 
        title="스무고개의 여행 마음의 창"
        description={`대화형 AI를 활용하여 스무고개 게임을 통해 ASD(자폐 스펙트럼 장애) 아동이 질문하고 대답하는 기술을 익히도록 돕는 플랫폼입니다.`}
        image={ProjectImage}
        tags={tags}
        link="https://github.com/ddookddook/maeum2_FE/tree/feat_mina"
        linkText="Maeum github 바로가기"
        roleDescription={`여기에는 사용자의 역할에 대한 자세한 설명이 들어갑니다. 
이 부분은 사용자가 토글 버튼을 눌렀을 때만 표시됩니다.`}
        icon={icon}
      />
    </div>
  );
}
