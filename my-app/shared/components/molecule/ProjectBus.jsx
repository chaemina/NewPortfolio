import Card from "../atom/Card";
import ProjectImage from "../../../assets/Images/Bus.jpeg";

export default function ProjectBus() {
  const tags = [
    { label: 'Swift', bgColor: 'bg-orange', textColor: 'text-white' },
    { label: 'Swift UI', bgColor: 'bg-blue-400', textColor: 'text-black' },
    { label: 'Lottie', bgColor: 'bg-teal-200', textColor: 'text-teal-700' },
  ];

  return (
    <div>
      <Card 
        title="🚌 광주버스 - AI광주버스"
        description={`광주광역시의 실시간 버스 위치와 도착 정보를 AI 기술로 정확하게 제공합니다.`}
        image={ProjectImage}
        tags={tags}
        link="https://apps.apple.com/kr/app/%EA%B4%91%EC%A3%BC%EB%B2%84%EC%8A%A4-ai%EA%B4%91%EC%A3%BC%EB%B2%84%EC%8A%A4/id6475945653"
        linkText="📌 광주 버스 APP Store 바로가기"
        roleDescription={`1) 자주 묻는 질문 페이지
· onTapGesture와 withAnimation 속성을 사용해 직선 이동과 동시에 내용이 변화하는 Tab View 구현

2) 메인 페이지 - 검색 기능
· TextField의 onChange 속성으로 변화를 감지해 null값일 때는 검색값을 초기화(검색 결과 쌓임을 방지)하고, onSubmit으로 검색 버튼을 눌렀을 때 입력값을 검색값으로 전달
· 검색 성능을 높이기 위해 서버에서 데이터를 10개씩 불러오고, 그 뒤로 데이터가 더 있는 경우 반환되는 데이터 배열 추가
· ScrollView와 LazyVStack을 활용해 무한 스크롤 구현
· 이는 DispatchQueue.main.async 를 통해 비동기 처리

3) 메인 페이지 - 검색 결과 저장
· 검색 기록은 UserDefault를 활용해 객체 배열로 저장해 출력하고, 앱이 종료되도 지워지지 않도록 함

4) Lottie 활용
· Loading 컴포넌트는 Lottie의 JSON 파일을 적용해 픽셀이 깨지는 것을 방지 
`}
      />
    </div>
  );
}
