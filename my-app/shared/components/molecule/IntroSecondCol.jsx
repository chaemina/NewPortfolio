"use client";

import Title from "../atom/Title";
import Text from "../atom/Text";

export default function IntroSecondCol() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-7">
       <Title>Career</Title>
       <Text>개발팀 인턴, (주) 카라멜라 | 2023.12 ~ 2024.02</Text>
      </div>
      <div className="flex flex-col gap-7">
       <Title>Experience Overview</Title>
       <Text> · Hipython 팀원,  2022 KIV 월드프렌즈코리아 IT봉사단 | 2022.06 ~ 2022.08</Text>
       <Text> · 디지털 새싹 캠프 서포터즈,  (주) 키움인 | 2022.10 ~ 2022.01</Text>
       <Text> · 홍보부 부장,  소프트웨어공학과 학생회 Swing | 2023.03 ~ 2024.02</Text>
       <Text> · Py-ting 팀장,  2023 KIV 월드프렌즈코리아 IT봉사단 | 2023.07 ~ 2023.08</Text>
       <Text> · Web FrontEnd, 카카오테크 캠퍼스 | 2023.04 ~ 2023.10</Text>
       <Text> · 한국정보처리학회 ASK 2024 논문 게재 | 2024.05.28 </Text>
       <Text> · 소봉이들 회장, 소프트웨어 중심대학 사업단 동아리 | 2023.03 ~ </Text>
       <Text> · 소봉이들 팀장, 코드클럽 한국위원회 대학생 봉사단 | 2024.05 ~ </Text>
       <Text> · 홀씨 팀장, 2024 KIV 월드프렌즈코리아 IT봉사단 | 2024.06 ~ </Text>
      </div>
      <div className="flex flex-col gap-7">
       <Title>Awards</Title>
       <Text> · 장려상, 공과대학 2022 동계방학 기업직무분석 경진대회 | 2023.02.09</Text>
       <Text> · 한국지능 정보사회진흥원 우수상(활동영상분야), KIV 월드프렌즈코리아 IT봉사단 성과발표대회  | 2023.11.30</Text>
       <Text> · 소프트웨어중심대학 사업단장상 금상, SW동아리 발굴 및 지원 프로그램 최종결과발표회 | 2023.12.08</Text>
       <Text> · 소프트웨어중심대학 사업단장상 금상, 2024 교내 디지털경진대회(SW부문) | 2024.06.07</Text>
      </div>
      <div className="flex flex-col gap-7">
        <Title>Education</Title>
        <Text> · 전남대학교 소프트웨어공학과 재학</Text>
        <Text> · 수완고등학교 2018 - 2020</Text>
      </div>
    </div>
  );
}
