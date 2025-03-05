import React from "react";
import {
  Header,
  Wrapper,
  Main,
  ProgressContainer,
  Progress,
  Footer,
  ImgWrapper,
} from "./PromiseStatus.styles";
import Button from "../../components/Button/Button";
import Man from "../../assets/icons/Profileimg/Man.svg";
import Default from "../../assets/icons/Profileimg/Default.svg";
import 장소 from "../../assets/icons/Status/장소.png";
import 시간 from "../../assets/icons/Status/시간.png";
import crown from "../../assets/icons/Status/crown.svg";
export default function PromiseStatus() {
  const dummyData = {
    name: "KUIT BARO 2차 회의",
    placeName: "건국대학교 새천년관",
    dateStart: new Date("2024-03-10T14:00:00"),
    dateEnd: new Date("2024-03-10T16:00:00"),
    profileImg: 1,
  };

  return (
    <Wrapper>
      <Header>{dummyData.name}</Header>
      <Main>
        <ProgressBar percent={100} profileImg={dummyData.profileImg} />
        <div className="desc">
          원하는 장소와 시간을
          <br /> 추가해주세요
        </div>
        <div className="btn-wrapper">
          <div className="btn">
            <img src={장소} />
          </div>
          <div className="btn">
            <img src={시간} />
          </div>
        </div>
      </Main>
      <div className="placeholder"></div>
      <Footer>
        <Button onClick={() => console.log()}>투표시작</Button>
      </Footer>
    </Wrapper>
  );
}
function ProgressBar({ percent, profileImg }) {
  return (
    <ProgressContainer>
      <ImgWrapper percent={percent}>
        <img className="crown" alt="crown img" src={crown} />
        <img className="user" alt="user img" src={Man} />
      </ImgWrapper>
      <Progress percent={percent}>
        <div className="progress"></div>
      </Progress>
    </ProgressContainer>
  );
}
