import React, { useState } from "react";
import {
  Header,
  Wrapper,
  Main,
  ProgressContainer,
  Progress,
  ProgressBar,
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
} from "./PromisePending.styles";
import Button from "../../components/Button/Button";
import DEFAULT from "../../assets/icons/Profileimg/DEFAULT.svg";
import GIRL from "../../assets/icons/Profileimg/Girl.svg";
import DOG from "../../assets/icons/Profileimg/DOG.svg";
import MAN from "../../assets/icons/Profileimg/Man.svg";
import 장소 from "../../assets/icons/Status/장소.png";
import 시간 from "../../assets/icons/Status/시간.png";
import crown from "../../assets/icons/Status/crown.svg";
import TimePopup from "./TimePopup/TimePopup";
import TimeTableInterface from "../../interface/TimeTable/TimeTable";
import { ProfileImgType } from "../../interface/ProfileImg/ProfileImg";
import LocationPopup from "./LocationPopup/LocationPopup";
import LocationInterface from "../../interface/Location/Location";

export default function PromisePending({ isHost = true }) {
  const dummyData = {
    promiseName: "KUIT BARO 2차 회의",
    isVotingReady: true,
    userSuggestState: [
      {
        userId: 1,
        suggestionProgress: "COMPLETE",
        isHost: true,
        profileImage: "DOG",
      },
      {
        userId: 2,
        suggestionProgress: "NONE",
        isHost: false,
        profileImage: "DOG",
      },
      {
        userId: 2,
        suggestionProgress: "COMPLETE",
        isHost: false,
        profileImage: "DOG",
      },
    ],
  };

  const [locationPopup, setLocationPopup] = useState(false);
  const [location, setLocation] = useState<LocationInterface | null>(null);
  const [timePopup, setTimePopup] = useState(false);

  const [timeTable, setTimeTable] = useState<TimeTableInterface[] | null>(null);
  return locationPopup ? (
    // <TimePopup
    //   setTimePopup={setTimePopup}
    //   timeTable={timeTable}
    //   setTimeTable={setTimeTable}
    // />

    <LocationPopup
      setLocationPopup={setLocationPopup}
      location={location}
      setLocation={setLocation}
    />
  ) : (
    <Wrapper>
      <Header>{dummyData.promiseName}</Header>
      <Main>
        <Status userSuggestState={dummyData.userSuggestState} />
        <Desc>
          원하는 장소와 시간을
          <br /> 추가해주세요
        </Desc>
        <BtnWrapper>
          <VoteBtn onClick={() => setLocationPopup(true)}>
            <VoteBtnImg src={장소} alt="장소 아이콘" />
          </VoteBtn>
          <VoteBtn
            className="btn"
            onClick={() => {
              setTimePopup(true);
              console.log("in");
            }}
          >
            <VoteBtnImg src={시간} alt="시간 아이콘" />
          </VoteBtn>
        </BtnWrapper>
      </Main>
      <Placeholder />
      <Footer>
        {isHost ? (
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

function Status({ userSuggestState }) {
  const profileImgs: Record<ProfileImgType, string> = {
    DOG,
    GIRL,
    MAN,
    DEFAULT,
  };
  const progressEnum: Record<string, number> = {
    NONE: 0,
    HALF: 50,
    COMPLETE: 100,
  };
  const samePercentOffsetMap = new Map<number, number>();
  const userProgress =
    progressEnum[userSuggestState.find((x) => x.isHost).suggestionProgress];

  return (
    <ProgressContainer>
      <ImgsWrapper>
        {userSuggestState.map((people, index) => {
          const count =
            samePercentOffsetMap.get(progressEnum[people.suggestionProgress]) ||
            0;
          samePercentOffsetMap.set(
            progressEnum[people.suggestionProgress],
            count + 1
          );

          const offset =
            count * (people.suggestionProgress == "COMPLETE" ? -50 : 50);

          return (
            <ImgWrapper
              key={index}
              percent={progressEnum[people.suggestionProgress]}
              offset={offset}
            >
              {people.isHost && <CrownImg alt="crown img" src={crown} />}
              <UserImg alt="user img" src={profileImgs[people.profileImage]} />
            </ImgWrapper>
          );
        })}
      </ImgsWrapper>
      <ProgressBar>
        <Progress percent={userProgress} />
      </ProgressBar>
    </ProgressContainer>
  );
}
