import Card from "../atom/Card";
import ProjectImage from "../../../assets/Images/Garden.png";

export default function ProjectGarden() {
  const tags = [
    { label: 'vite', bgColor: 'bg-purple-600', textColor: 'text-white' },
    { label: 'React', bgColor: 'bg-blue-200', textColor: 'text-blue-700' },
    { label: 'React Router', bgColor: 'bg-red-500', textColor: 'text-white' },
    { label: 'React Query', bgColor: 'bg-pink-500', textColor: 'text-white' },
    { label: 'Jotai', bgColor: 'bg-black', textColor: 'text-white' },
    { label: 'tailwindcss', bgColor: 'bg-sky-500', textColor: 'text-white' },
  ];

  return (
    <div>
      <Card 
        title="🌱 함께 피워내는 한국어 교육 플랫폼 Garden"
        description={`한류 문화를 기반으로 한국어 학습의 장벽을 극복하고, 외국인들에게 다양한 방식의 학습 환경을 제공합니다.`}
        image={ProjectImage}
        tags={tags}
        link="https://github.com/Step3-kakao-tech-campus/Team18_FE/tree/Evaluation"
        linkText="Garden github 바로가기"
        roleDescription={`여기에는 사용자의 역할에 대한 자세한 설명이 들어갑니다. 
이 부분은 사용자가 토글 버튼을 눌렀을 때만 표시됩니다.`}
      />
    </div>
  );
}
