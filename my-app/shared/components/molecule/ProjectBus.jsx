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
        linkText="광주 버스 APP Store 바로가기"
        roleDescription={`여기에는 사용자의 역할에 대한 자세한 설명이 들어갑니다. 
이 부분은 사용자가 토글 버튼을 눌렀을 때만 표시됩니다.`}
      />
    </div>
  );
}
