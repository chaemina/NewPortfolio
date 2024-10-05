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
        // tags={tags}
        link="https://github.com/Step3-kakao-tech-campus/Team18_FE/tree/Evaluation"
        linkText="Garden github 바로가기"
        link2="https://www.figma.com/design/DG91eB8oq3T7VnFJ6u8Nww/Watching?node-id=0-1&t=BEzFFQ8KCaQ3cm4W-1"
        linkText2="Garden Figma 바로가기"
        roleDescription={`1) UI/UX 디자인 
· Figma에서 UI/UX 설계 

2) TechLeader
· master등의 상위 브런치로의 PR 을 담당
· Issue와 PR 템플릿을 생성 & 자동화

3) 회원 가입, 로그인 기능 구현 
· mui 프레임워크의 UI 컴포넌트를 활용, useForm 과 Controller로 매핑하여 실시간 유효성 검사 진행
· 에러 처리는 필드와 토스트 메시지를 통해 사용자에게 명확히 표시

4) 토큰 관리
· 로그인 성공 시 액세스 토큰은 응답 헤더로, 리프레쉬 토큰은 쿠키로 발급 받으며 Stateless 하기에 백에서 이를 처리
· 액세스 토큰 만료 시 axios 응답 인터셉터를 통해 refresh 요청을 보내고, 새 토큰을 로컬 스토리지에 저장하여 이전의 요청을 다시 보내며 사용자 경험을 개선
· 실패 시에는 로그아웃 처리

5) 마이페이지 프로필, 개인정보조회, 수정 기능 구현
· 사용자가 로그인 시에 고유 식별자인 UID를 발급받아 이를 로컬 스토리지에 저장하고 마이페이지 프로필로 이동할 때 파라미터로 사용되어 사용자 정보를 조회하는 데 사용
· 이는 다른 사용자들도 프로필을 조회할 수 있게 함으로써 컴포넌트의 활용성을 높이기 위함
· 개인정보는 보안상의 이유로 해당 사용자만이 조회할 수 있으며 토큰을 헤더에 담아 GET 요청을 보내도록 설계 
· 개인정보 수정 페이지에서는 사용자가 기존 비밀번호를 입력하고, 이를 백엔드에서 검증하는 과정을 거쳐야만 정보 수정이 가능
· FormData 형태로 mutate post 전송해 수정 페이지에서는 사용자의 프로필 이미지 또한 등록 가능 

6) 영상 시청 서비스
· 카테고리와 페이지를 파라미터로 요청 보내면 백앤드에서는 한 페이지당 4개의 비디오 정보를 랜덤하게 응답
· 응답 받은 영상 정보는 사용자에게 부드럽고 지속적인 경험을 제공하고자 무한 스크롤로 구현
· 로그인 시 사용자의 관심사 기반 추천 영상 정보 제공
· React-player를 사용하여 유튜브 URL로부터 영상을 재생
· getCurrentTime 속성으로 해당 시간에 맞는 자막을 패칭해 출력
· 최근 시청한 10개의 영상 보관함 제공
`}
      />
    </div>
  );
}
