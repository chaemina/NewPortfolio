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
        linkText="📌 Caramella Intranet github"
        link2="https://www.figma.com/design/ZjA3X89i5nWszAUfxGnmbr/caramella?node-id=0-1&t=3POERBYS9mGuBQ06-1"
        linkText2="📌 Caramella Intranet Figma"
        roleDescription={` 1) UI/UX 설계 
· Figma에서 UI/UX 설계

2) API 문서 작성 

3) 프론트앤드 페이지 전체 개발 
· Next.js에서 앱 라우터로 개발 
· 서버 배포 전, api 연결 테스트를 위해 msw를 사용

`}
        icon={icon}
      />
    </div>
  );
}
