import React, { useState } from "react";
import {
  Header,
  Wrapper,
  Main,
  ProgressContainer,
  Progress,
  Footer,
  ImgsWrapper,
  ImgWrapper,
  UserImg,
  CrownImg,
  Placeholder,
  Desc,
  BtnWrapper,
  VoteBtn,
  VoteBtnImg,
} from "./PromiseStatus.styles";
import Button from "../../components/Button/Button";
import DEFAULT from "../../assets/icons/Profileimg/DEFAULT.svg";
import GIRL from "../../assets/icons/Profileimg/Girl.svg";
import DOG from "../../assets/icons/Profileimg/DOG.svg";
import MAN from "../../assets/icons/Profileimg/Man.svg";
import 장소 from "../../assets/icons/Status/장소.png";
import 시간 from "../../assets/icons/Status/시간.png";
import crown from "../../assets/icons/Status/crown.svg";
import TimePopup from "./TimePopup/TimePopup";
import TimeTableInterface from "../../interface/TimeTable";

export default function PromiseStatus() {
  const dummyData = {
    name: "KUIT BARO 2차 회의",
    placeName: "건국대학교 새천년관",
    dateStart: new Date("2024-03-10T14:00:00"),
    dateEnd: new Date("2024-03-19T16:00:00"),
    profileImg: 1,
  };
  const dummyStatus = {
    isHost: true,
    promiseStatus: "PENDING",
  };
  const dummyCurrentPeople = [
    {
      id: 1,
      profileImg: "DOG",
      isHost: false,
      percent: 0,
    },
    {
      id: 2,
      isHost: true,
      profileImg: "GIRL",
      percent: 50,
    },
    {
      id: 3,
      isHost: false,
      profileImg: "MAN",
      percent: 50,
    },
  ];
  const [locationPopup, setLocationPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);

  const [timeTable, setTimeTable] = useState<TimeTableInterface[]>([]);
  return timePopup ? (
    <TimePopup
      setTimePopup={setTimePopup}
      dateStart={dummyData.dateStart}
      dateEnd={dummyData.dateEnd}
      timeTable={timeTable}
      setTimeTable={setTimeTable}
      dummyData={[
        {
          id: 1,
          profileImg: "Dog",
        },
        {
          id: 1,
          profileImg: "Dog",
        },
        {
          id: 1,
          profileImg: "Dog",
        },
      ]}
    />
  ) : (
    <Wrapper>
      <Header>{dummyData.name}</Header>
      <Main>
        <ProgressBar percent={100} dummyCurrentPeople={dummyCurrentPeople} />
        <Desc>
          원하는 장소와 시간을
          <br /> 추가해주세요
        </Desc>
        <BtnWrapper>
          <VoteBtn onClick={() => setLocationPopup(true)}>
            <VoteBtnImg src={장소} alt="장소 아이콘" />
          </VoteBtn>
          <VoteBtn className="btn" onClick={() => setTimePopup(true)}>
            <VoteBtnImg src={시간} alt="시간 아이콘" />
          </VoteBtn>
        </BtnWrapper>
      </Main>
      <Placeholder />
      <Footer>
        {dummyStatus.isHost ? (
          <Button onClick={() => console.log("남은 시간 보여주기")}>
            남은 시간 보여주기
          </Button>
        ) : (
          <Button onClick={() => console.log("투표 시작")}>투표시작</Button>
        )}
      </Footer>
    </Wrapper>
  );
}

function ProgressBar({ percent, dummyCurrentPeople }) {
  const profileImgs: Record<string, string> = {
    DOG,
    GIRL,
    MAN,
  };
  const samePercentOffsetMap = new Map<number, number>();

  return (
    <ProgressContainer>
      <ImgsWrapper>
        {dummyCurrentPeople.map((people, index) => {
          const count = samePercentOffsetMap.get(people.percent) || 0;
          samePercentOffsetMap.set(people.percent, count + 1);

          const offset = count * 40;

          return (
            <ImgWrapper
              key={index}
              percent={people.percent}
              offset={offset} // 추가 전달
            >
              {people.isHost && <CrownImg alt="crown img" src={crown} />}
              <UserImg alt="user img" src={profileImgs[people.profileImg]} />
            </ImgWrapper>
          );
        })}
      </ImgsWrapper>

      <Progress percent={percent}>
        <div className="progress"></div>
      </Progress>
    </ProgressContainer>
  );
}
