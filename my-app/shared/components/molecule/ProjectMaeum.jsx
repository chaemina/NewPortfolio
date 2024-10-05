import Card from "../atom/Card";
import ProjectImage from "../../../assets/Images/Maeum.png";
import icon from "../../../assets/Images/maeumicon.png";

export default function ProjectMaeum() {
  const tags = [
    {
      label: "React Native",
      bgColor: "bg-blue-200",
      textColor: "text-blue-700",
    },
    { label: "JavaScript", bgColor: "bg-yellow-200", textColor: "text-black" },
    { label: "React Query", bgColor: "bg-pink-500", textColor: "text-white" },
    { label: "Redux-toolkit", bgColor: "bg-purple-200", textColor: "text-black" },
    { label: "Lottie", bgColor: "bg-teal-200", textColor: "text-teal-700" },
    { label: "nativewind", bgColor: "bg-sky-500", textColor: "text-white" },
    {
      label: "디지털 경진대회(SW) 금상 수상작",
      bgColor: "bg-purple-600",
      textColor: "text-white",
    },
    {
      label: "ASK 2024 논문 게재",
      bgColor: "bg-purple-600",
      textColor: "text-white",
    },
  ];

  return (
    <div>
      <Card
        title="스무고개의 여행 마음의 창"
        description={`대화형 AI를 활용하여 스무고개 게임을 통해 ASD(자폐 스펙트럼 장애) 아동이 질문하고 대답하는 기술을 익히도록 돕는 플랫폼입니다.`}
        image={ProjectImage}
        // tags={tags}
        link="https://github.com/ddookddook/maeum2_FE/tree/feat_mina"
        linkText="마음의 창 github 바로가기"
        link2="https://www.youtube.com/watch?v=Xs86UbhY9k8"
        linkText2="마음의 창 시연 영상 바로가기"
        roleDescription={`1) UI/UX 설계
(1) WCAG 접근성 지침을 고려한 디자인 설계
· 버튼이 연속하여 나오는 경우 색상의 순서를 Yellow -> Pink 로 통일하는 등의 규칙으로 일관된 스타일을 유지
· 전색맹인을 고려하여 색상 만으로 구별 해야 하는 디자인 제거 (링크나 탭과 같은)
· 전경색과 배경색의 대비가 WCAG 2.0기준 AA 이상이 되도록 함(적록색각이상자를 고려해 적색과 녹색은 동시에 사용하지 않음)

(2) 모바일 환경을 고려한 디자인 설계
· 터치 대상의 높이는 9mm, 너비는 9mm 이상
· 타이틀 18~32pt, 본문은 16~18pt (10pt 이하는 사용하지 않음)

(3) 주요 사용자를 고려한 디자인 설계
· 동시에 보이는 버튼의 수를 최소화 하여 아이들이 어떤 버튼을 눌러야 하는 지 한번에 알 수 있도록 함
· 음성으로 소통 하는 과정에서 출력 되는 소리를 자막으로 보여줌 
· 회원 가입 시 튜토리얼 화면을 온보딩으로 제공

2) 프로젝트 세팅
· React Native로 ios와 android 동시 개발을 위한 환경과 프로젝트를 세팅

3) 공통 컴포넌트 개발
· 모바일 디바이스 별 반응형 컴포넌트를 구현하기 위해 Dimensions를 활용해 Scale함수를 작성하고 이를 재사용

4) 프로토 타입 구현
· UI 디자인을 기반으로 Splash, 설정, 회원정보, 메인 페이지의 프로토 타입을 구현

5) 로그인, 회원가입 기능 
· WebView를 통해 카카오계정을 연동하고, 발급 받은 코드를 서버에 전달해 회원 여부를 판단 
· rebux toolkit으로 보호자 정보를 입력 한 후 이를 전역 상태로 저장하고, 문자 인증 한 뒤에 아이 정보와 통합해 회원 가입 요청
· 로그인 성공 시 발급 받은 토큰은 async-storage에 저장해 앱을 종료해도 로그아웃 되지 않도록 함 
· 회원 가입 성공 후 1회 튜토리얼 제공 (이후 도움말 페이지에서 다시 확인 가능)

6) 회원정보 조회 및 수정 기능
· FlatList로 회원 정보를 스크롤 가능하도록 출력 
· 회원 정보 수정 시 토큰 재발급으로 인한 로그아웃 처리 (Confirm Alert 출력)

7) 메인 게임 기능 
· react-native-permissions와 설정 파일 수정을 통해 사용자에게 접근 권한 동의를 얻음 
· 사용자가 음성으로 질문 혹은 대답을 하면 React Native Voice 라이브러리로 STT 변환 
· 서버로부터 전달받은 응답 중 메세지를 추출해 Clova TTS api 요청을 보내고 이를 React Native Sound로 출력해 양방향 음성 소통을 구현

8) Lottie 활용
· Splash View, Login View 에서 마음의 창 Lottie를 JSON으로 출력

`}
        icon={icon}
      />
    </div>
  );
}
