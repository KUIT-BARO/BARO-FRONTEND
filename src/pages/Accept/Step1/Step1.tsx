import React, { useState } from "react";
import StepInterface from "../../../interface/Step";
import TopBar from "../../../components/TopBar/TopBar";

import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../components/Steps/Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import Desc from "../../../components/Desc/Desc";
import Popup from "../Popup/Popup";
import { ButtonWrapper, SectionHeader } from "./Step1.styles";
import SmallButton from "../../../components/SmallButton/SmallButton";
import SelectTimeTable from "../../../components/SelectTimeTable/SelectTimeTable";

import Man from "../../../assets/icons/Profileimg/Man.svg";
import Girl from "../../../assets/icons/profileimg/Girl.svg";
import Dog from "../../../assets/icons/Profileimg/Dog.svg";
import defaultImg from "../../../assets/icons/profileImg_default.svg";
import { useNavigate } from "react-router-dom";
import GetSchedule from "../../../apis/user/GetSchedule";
export default function Step1({
  peopleNumber,
  handleBack,
  handleExit,
  dateStart,
  dateEnd,
  timeTable,
  setTimeTable,
}: StepInterface & {
  suggestTitle: string;
  setSuggestTitle: React.Dispatch<React.SetStateAction<string>>;
  suggestPurpose: string[];
  setSuggestPurpose: React.Dispatch<React.SetStateAction<string[]>>;
  suggestPeople: number | null;
  setSuggestPeople: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const navigate = useNavigate();
  const [disableTimeTable, setDisableTimeTable] = useState([]);
  const [popupStage, setPopupStage] = useState<number | null>(1);

  const handlePopupClick = () => {
    if (popupStage === 1) setPopupStage(2);
    else setPopupStage(null);
  };
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
        setDisableTimeTable(scheduleData);
      }
    } catch (error) {
      console.error("시간표 불러오기 실패:", error);
    }
  };

  return (
    <>
      {popupStage && <Popup stage={popupStage} onClose={handlePopupClick} />}
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <ProgressBar percent={33} />

        <SubTitle>만날 수 있는 시간을 알려주세요</SubTitle>
        <Desc>가능한 시간을 선택해주세요</Desc>
        <SectionHeader>
          <ImgWrapper>{renderProfileImages(peopleNumber)}</ImgWrapper>
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
            disableTimeTable={disableTimeTable}
            timeTable={timeTable}
            setTimeTable={setTimeTable}
          />
        </Section>
        <FixedButton>
          <Button
            onClick={() => navigate("../step2")}
            disabled={timeTable.length === 0} // timeTable이 비어있으면 비활성화
          >
            다음
          </Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}
const renderProfileImages = (peopleNumber: number | undefined) => {
  const profileImages = [Man, Girl, Dog];
  if (peopleNumber == 0) {
    peopleNumber = 1;
  }
  if (peopleNumber <= 3) {
    return profileImages
      .slice(0, peopleNumber)
      .map((img, index) => <img key={index} src={img} alt="profile img" />);
  } else {
    return (
      <ImgWrapper>
        {profileImages.map((img, index) => (
          <img key={index} src={img} alt="profile img" />
        ))}
        <div className="plus">+{peopleNumber - 3}</div>
      </ImgWrapper>
    );
  }
};
