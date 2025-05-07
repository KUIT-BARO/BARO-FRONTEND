import React from "react";
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
import 장소 from "../../assets/icons/Status/장소.png";
import 시간 from "../../assets/icons/Status/시간.png";
import crown from "../../assets/icons/Status/crown.svg";
import TimePopup from "./TimePopup/TimePopup";
import LocationPopup from "./LocationPopup/LocationPopup";
import usePopupState from "../../hook/usePopupState/usePopupState";
import profileImgs from "../../utils/profileImgs";

export default function PromisePending({ isHost = true }) {
  const {
    popupType,
    location,
    setLocation,
    timeTable,
    setTimeTable,
    openLocationPopup,
    openTimePopup,
    closePopup,
  } = usePopupState();

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
        profileImage: "GIRL",
      },
      {
        userId: 3,
        suggestionProgress: "COMPLETE",
        isHost: false,
        profileImage: "MAN",
      },
    ],
  };

  if (popupType === "location") {
    return (
      <LocationPopup
        setLocationPopup={closePopup}
        location={location}
        setLocation={setLocation}
      />
    );
  }

  if (popupType === "time") {
    return (
      <TimePopup
        setTimePopup={closePopup}
        timeTable={timeTable}
        setTimeTable={setTimeTable}
      />
    );
  }

  return (
    <Wrapper>
      <Header>{dummyData.promiseName}</Header>
      <Main>
        <Status userSuggestState={dummyData.userSuggestState} />
        <Desc>
          원하는 장소와 시간을
          <br /> 추가해주세요
        </Desc>
        <BtnWrapper>
          <VoteBtn onClick={openLocationPopup}>
            <VoteBtnImg src={장소} alt="장소 아이콘" />
          </VoteBtn>
          <VoteBtn onClick={openTimePopup}>
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

const Status = ({ userSuggestState }) => {
  const progressEnum: Record<string, number> = {
    NONE: 0,
    HALF: 50,
    COMPLETE: 100,
  };
  const samePercentOffsetMap = new Map<number, number>();

  const host = userSuggestState.find((x) => x.isHost);
  const userProgress = host ? progressEnum[host.suggestionProgress] : 0;

  return (
    <ProgressContainer>
      <ImgsWrapper>
        {userSuggestState.map((people, index) => {
          const progress = progressEnum[people.suggestionProgress];
          const count = samePercentOffsetMap.get(progress) || 0;
          samePercentOffsetMap.set(progress, count + 1);
          const offset = count * (progress === 100 ? -50 : 50);

          return (
            <ImgWrapper key={index} percent={progress} offset={offset}>
              {people.isHost && <CrownImg alt="crown img" src={crown} />}
              <UserImg
                alt="user img"
                src={profileImgs[people.profileImage] || profileImgs.DEFAULT}
              />
            </ImgWrapper>
          );
        })}
      </ImgsWrapper>
      <ProgressBar>
        <Progress percent={userProgress} />
      </ProgressBar>
    </ProgressContainer>
  );
};
