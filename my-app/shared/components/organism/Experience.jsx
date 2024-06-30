import Grid from "../atom/Grid";
import Title from "../atom/Title";
import Card from "../atom/Card";

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-7">
      <Title>Experience</Title>

      {/* 첫번째 줄 */}
      <Grid
        item1={
          <Card
            bgColor="mint"
            title="2022 KIV 월드프렌즈코리아 IT봉사단"
            description={`· 파견 국가 : 가나\n· 수혜 대상 : 가나대학교(University of Ghana)학생\n· 활동 내용\n1) 한국어, 영어 교안 제작\n2) Python 교육`}
          />
        }
        item2={
          <Card
            title="디지털 새싹 캠프 서포터즈"
            description={`· 교육 대상 : 초·중·고 학생들\n· 활동 내용\n1) 스크래치 및 아두이노 교육\n2) 교구 관리\n3) 안전 관리`}
          />
        }
        item3={
          <Card
            bgColor="mint"
            title="학생회 홍보부 부장"
            description={`활동 내용\n1) 카드 뉴스 제작\n2) 인스타 및 SNS 홍보 활동\n3) 학과 행사 기획 및 운영 참여`}
          />
        }
      />

      {/* 두번째 줄 */}
      <Grid
        item1={
          <Card
            title="2023 KIV 월드프렌즈코리아 IT봉사단"
            description={`· 파견 국가 : 네팔\n· 수혜 대상 : 네팔의 학교(Swopna Sansar school)선생님\n· 활동 내용\n1) 현지기관 컨택 \n2) 한국어, 영어 교안 제작 \n3) Python 교육 \n4) Web프로그래밍 교육 \n5) 한국 문화 교류`}
            link={
              "https://polydactyl-flavor-6aa.notion.site/2023-ICT-PY-TING-87a67b8db40a437db3b29d5a26f806ff"
            }
            linkText="Pyting Team Notion 바로가기"
          />
        }
        item2={
          <Card
            bgColor="mint"
            title="카카오테크 캠퍼스 Web FrontEnd 수료"
            description={`· 학습 내용 : \n1)HTML,CSS,JavaScript \n2)React \n· 프로젝트 : \n1)카카오 쇼핑하기 클론코딩 \n2)한국어 교육 플랫폼 Garden`}
            link={
              "https://superb-avocado-776.notion.site/ced5109a83134a9396f8d113a00791ce"
            }
            linkText="카카오테크캠퍼스 학습 일지 바로가기"
          />
        }
        item3={
          <Card
            title="동아리 소봉이들 회장"
            description={`활동 내용\n1) 자체 제작 컨텐츠 유튜브 운영 \n2) 인스타 및 SNS 홍보 활동\n3) 소프트웨어 중심대학 주최 봉사활동 참여 \n4) 대외 봉사활동 참여`}
            link={
              "https://hickory-guarantee-59a.notion.site/SoBongE-45c5de0046f64ceb97ecd3a967df6517"
            }
            linkText="소봉이들 Notion 바로가기"
          />
        }
      />

      {/* 세번째 줄 */}
      <Grid
        item1={
          <Card
            bgColor="mint"
            title="2024 코드클럽 봉사단 소봉이들 팀장 (활동중)"
            description={`· 교육 대상 : 마지초등학교 6-4, 6-5 \n· 교육 주제 : 엔트리로 조이스틱 모듈을 통해 공튀기기 게임 만들기  \n· 활동 내용 : \n 1) 마지초등학교 담당선생님 컨택 \n2) 교구 및 설문지 등 사전 준비 \n3) 사전 답사 \n4) Zep으로 교실 메타버스 구현`}
            link={
              "https://hickory-guarantee-59a.notion.site/2024-9a43838dad85483d94adeafb9d4ea649"
            }
            linkText="코드클럽 활동 Notion 바로가기"
          />
        }
        item2={
          <Card
            title="한국정보처리학회 ASK 2024 논문 게재"
            description={`· 연구 주제 : 대화형 AI를 통한 자폐 아동 치료 플랫폼 개발
· 요약 : 본 연구에서는 대화형 인공지능을 활용하여 스무 고개 게임을 통해 자폐 스펙트럼 장애를 가진 아이들의 사회성 기술을 향상시키는 플랫폼을 개발하고자 한다
  `}
            link={
              "https://www.manuscriptlink.com/society/kips/conference/ask2024/file/downloadSoConfManuscript/abs/KIPS_C2024A0101"
            }
            linkText="논문 PDF Download"
          />
        }
        item3={
          <Card
            bgColor="mint"
            title="2024 KIV 월드프렌즈코리아 IT봉사단 (활동중)"
            description={`· 파견 국가 : 인도네시아 \n· 수혜 대상 : 다르마자야 정보 및 비즈니스 대학 (Institute Informatics and Business Darmajaya(IIB))\n· 프로젝트 주제 : 인도네시아 협동 조합 Waste Bank 활용 안드로이드 어플리케이션 개발`}
            link={
              "https://unmarred-nerine-019.notion.site/2024-ICT-Holssi-9ef0f43566ea4c688182a0fc5580e30a"
            }
            linkText="홀씨 Team Notion 바로가기"
          />
        }
      />
    </div>
  );
}
