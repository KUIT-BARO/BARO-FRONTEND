import landingchat from "../../assets/icons/Landing/landingchatmockup.svg";
import landingmockup1 from "../../assets/icons/Landing/landingmockup1.svg";
import landingmockup2 from "../../assets/icons/Landing/landingmockup2.svg";
import landingmockup3 from "../../assets/icons/Landing/landingmockup3.svg";
import landingmockup4 from "../../assets/icons/Landing/landingmockup4.svg";
import landingmockup5 from "../../assets/icons/Landing/landingmockup5.svg";
import landingmockup6 from "../../assets/icons/Landing/landingmockup6.svg";
import landingmockup7 from "../../assets/icons/Landing/landingmockup7.svg";
import landinglast from "../../assets/icons/Landing/landinglast.svg";
import landinglogo2 from "../../assets/icons/Landing/landinglogo2.svg";

export interface LandingItem {
  img: string | string[]; // 단일 이미지 또는 여러 개의 이미지 배열
  title: string[];
}

export const landingData: LandingItem[] = [
  {
    img: landingchat,
    title: ["모두를 위한 장소와 시간을", "찾고 있나요?"],
  },
  { img: landinglogo2, title: ["도와드리겠습니다!"] },
  {
    img: [landingmockup1, landingmockup2],
    title: ["어디든 향하든 바로", "약속 생성부터 정리까지", "돕고 있어요"],
  },
  {
    img: landingmockup3,
    title: ["언제든지 바로", "간단하게 약속 모임을", "만들어보세요"],
  },
  {
    img: [landingmockup4, landingmockup5],
    title: ["복잡한 것들을 All 바로", "가능한 시간을", "자동으로 체크해요"],
  },
  {
    img: landingmockup6,
    title: [
      "모두가 원할 때 원하는 바로",
      "여러 조건의 장소를",
      "터치 한번에 조회해요",
    ],
  },
  {
    img: landingmockup7,
    title: ["모두가 함께 바로", "모임과 방문을", "가치있게 남겨보세요"],
  },
  {
    img: landinglast,
    title: ["설치 없이 링크 공유만으로", "지금 BARO 함께해요"],
  },
];

export default landingData;
