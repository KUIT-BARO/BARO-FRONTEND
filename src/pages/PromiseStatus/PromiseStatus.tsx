import React from "react";
import {
  Header,
  Wrapper,
  Main,
  ProgressContainer,
  Progress,
  Footer,
} from "./PromiseStatus.styles";
import Button from "../../components/Button/Button";

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
        <ProgressBar percent={50} profileImg={dummyData.profileImg} />
      </Main>
      <Footer>
        <Button onClick={() => console.log()}>투표시작</Button>
      </Footer>
    </Wrapper>
  );
}

function ProgressBar({ percent, profileImg }) {
  return (
    <ProgressContainer>
      <img alt="user img" />
      <Progress percent={percent} />
    </ProgressContainer>
  );
}
