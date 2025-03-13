import React, { useState } from "react";
import TopBar from "../../../components/TopBar/TopBar";
import Question from "../../../components/Question/Question";
import {
  ButtonWrapper,
  SectionHeader,
  Wrapper,
  Section,
  ImgWrapper,
} from "./TimePopup.styles";
import SmallButton from "../../../components/SmallButton/SmallButton";
import SelectTimeTable from "../../../components/SelectTimeTable/SelectTimeTable";

import Man from "../../../assets/icons/Profileimg/Man.svg";
import Girl from "../../../assets/icons/Profileimg/Girl.svg";
import Dog from "../../../assets/icons/Profileimg/DOG.svg";

import { useNavigate } from "react-router-dom";
import GetSchedule from "../../../apis/user/GetSchedule";
import TimeTableInterface from "../../../interface/TimeTable";
import ProfileImgInterface from "../../../interface/Profile";
interface Profile extends ProfileImgInterface {
  id: number;
}

interface TimePopupInterface {
  setTimePopup: (exit: boolean) => void;
  dateStart: Date;
  dateEnd: Date;
  timeTable: TimeTableInterface[];
  setTimeTable: React.Dispatch<React.SetStateAction<TimeTableInterface[]>>;
  dummyData: Profile[];
}
export default function TimePopup({
  setTimePopup,
  dateStart,
  dateEnd,
  timeTable,
  setTimeTable,
  dummyData,
}: TimePopupInterface) {
  const [userIdTimeTable, setUserIdTimeTable] = useState([]);

  const handleTimeTable = async () => {
    try {
      const response = await GetSchedule();
      console.log(response);
      if (response?.data?.data?.schedules) {
        const scheduleData = response.data.data.schedules.map((schedule) => ({
          dayOfWeek: schedule.dayOfWeek, // 요일 정보 (ex: "MONDAY")
          time_start: schedule.timeStart, // 시작 시간 (ex: "18:00")
          time_end: schedule.timeEnd, // 종료 시간 (ex: "20:00")
        }));
        setUserIdTimeTable(scheduleData);
      }
    } catch (error) {
      console.error("시간표 불러오기 실패:", error);
    }
  };

  return (
    <>
      <TopBar handleExit={() => setTimePopup(false)} color={"Blue"} />
      <Wrapper>
        <Question
          title="만날 수 있는 시간을 알려주세요"
          desc="가능한 시간을 선택해주세요"
          color="Blue"
        />

        <SectionHeader>
          <ImgWrapper>{renderProfileImages(dummyData)}</ImgWrapper>
          <ButtonWrapper>
            <SmallButton onClick={handleTimeTable}>시간표 불러오기</SmallButton>
            <SmallButton
              variant="outlined"
              color="gray"
              onClick={() => setTimeTable([])}
            >
              전체 취소
            </SmallButton>
          </ButtonWrapper>
        </SectionHeader>
        <Section>
          <SelectTimeTable
            dateStart={dateStart}
            dateEnd={dateEnd}
            userIdTimeTable={userIdTimeTable}
            timeTable={timeTable}
            setTimeTable={setTimeTable}
          />
        </Section>
      </Wrapper>
    </>
  );
}
const renderProfileImages = (profiles: Profile[]) => {
  const profileImages = {
    Man: Man,
    Girl: Girl,
    Dog: Dog,
  };

  // 최대 2개의 프로필만 표시, 나머지는 +N으로 표시
  const maxVisible = 2;
  const remainingCount = profiles.length - maxVisible;
  const visibleProfiles = profiles.slice(0, maxVisible); // 처음 2개만 추출

  return (
    <ImgWrapper>
      {/* 내 프로필 */}
      <img alt="user img-내자신꺼" src={Man} />

      {/* 다른 사람 프로필 (최대 2개) */}
      {visibleProfiles.map((profile, index) => (
        <img
          key={index}
          src={profileImages[profile.profileImg]}
          alt="profile img"
        />
      ))}

      {/* 나머지 인원 수 +N 표시 */}
      {remainingCount > 0 && <div className="plus">+{remainingCount}</div>}
    </ImgWrapper>
  );
};
