import Card from "../atom/Card";
import ProjectImage from "../../../assets/Images/WasteBank.png";
import icon from "../../../assets/Images/wastebankicon.jpg";

export default function ProjectWasteBank() {

  return (
    <div>
      <Card
        title="Waste Bank App"
        description={`geolocation을 통한 실시간 위치 확인으로 Waste Bank 운영 효율성을 향상시키는 쓰레기 수집 모니터링 애플리케이션입니다.`}
        image={ProjectImage}
        // tags={tags}
        link="https://github.com/chaemina/WasteBankApp/tree/feat_mina"
        linkText="Waste Bank APP github 바로가기"
        link2="https://wb-tutorial.vercel.app/"
        linkText2="설치 튜토리얼 사이트 바로가기"
        roleDescription={`1) UI/UX 설계
·  클라이언트에서 제공한 디자인을 바탕으로 접근성을 개선한 UI/UX 제안 
2) 프로젝트 세팅 
·  하이브리드 Application으로, 웹 개발 (React)와 앱 개발 (React Native) 환경 설정
·  Typescript와 styled component를 공통적으로 사용 
3) 앱 개발
· React Native Maps라이브러리로 Google Maps를 사용해 쓰레기 위치와 사용자의 위치를 띄움 
· 실제 디바이스에서 수거관의 실시간 위치를 감지할 수 있도록 geolocation-community 라이브러리를 사용
4) 웹 배포 
· 네이티브 환경이 필요한 기능(맵이나 실시간 위치)을 제외하고 웹으로 구현됨
· 앱에서 React Native WebView로 띄우기 위해 vercel에서 웹 배포 진행 
5) 웹뷰 통신 구현 
· 웹뷰로 띄운 React 코드에서 postmessage를 보내고, React Native에서 타입과 내용을 전달 받아 토큰 저장 혹은 네비게이션 이동 등을 관리
`}
        icon={icon}
      />
    </div>
  );
}
