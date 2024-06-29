import Card from "../atom/Card";
import ProjectImage from "../../../assets/Images/Caramella.png";
import icon from "../../../assets/Images/caramellaicon.png";

export default function ProjectCaramella() {
  const tags = [
    { label: 'Next.js', bgColor: 'bg-black', textColor: 'text-white' },
    { label: 'react-hook-form', bgColor: 'bg-blue-200', textColor: 'text-blue-700' },
    { label: 'mws', bgColor: 'bg-red-200', textColor: 'text-red-700' },
    { label: 'axios', bgColor: 'bg-yellow-200', textColor: 'text-yellow-700' },
    { label: 'mui', bgColor: 'bg-blue-100', textColor: 'text-black' },
    { label: 'tailwindcss', bgColor: 'bg-sky-500', textColor: 'text-white' },
  ];

  return (
    <div>
      <Card 
        title="(주) 카라멜라 사내 인트라넷"
        description={`사내 인트라넷 사이트로 기존에 사용하던 Jira Service Desk의 역할을 대체합니다.`}
        image={ProjectImage}
        tags={tags}
        link="https://github.com/chaemina/caramella_toyproject"
        linkText="Caramella Intranet github 바로가기"
        roleDescription={`여기에는 사용자의 역할에 대한 자세한 설명이 들어갑니다. 
이 부분은 사용자가 토글 버튼을 눌렀을 때만 표시됩니다.`}
        icon={icon}
      />
    </div>
  );
}
