import React, { useState } from "react";
import StepInterface from "../../../interface/Step";
import Nav from "../../../components/Nav/Nav";

import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../assets/styles/Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import Desc from "../../../components/Desc/Desc";
import Popup from "../Popup/Popup";
import { ButtomWrapper, ImgWrapper, SectionHeader } from "./Step1.styles";
import SmallButton from "../../../components/SmallButton/SmallButton";
import SelectTimeTable from "../../../components/SelectTimeTable/SelectTimeTable";
export default function Step1({
  navigate,
  handleBack,
  handleExit,
  data,
  startDate,
  endDate,
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
  const [popupStage, setPopupStage] = useState<number | null>(1);

  const handlePopupClick = () => {
    if (popupStage === 1) setPopupStage(2);
    else setPopupStage(null);
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
          <ImgWrapper>
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
            <div className="plus">+1</div>
          </ImgWrapper>
          <ButtomWrapper>
            <SmallButton onClick={() => console.log()}>
              시간표 불러오기
            </SmallButton>
            <SmallButton
              variant="outlined"
              color="gray"
              onClick={() => setTimeTable([])}
            >
              전체 취소
            </SmallButton>
          </ButtomWrapper>
        </SectionHeader>
        <Section>
          <SelectTimeTable
            startDate={startDate}
            endDate={endDate}
            timeTable={timeTable}
            setTimeTable={setTimeTable}
          />
        </Section>
        <FixedButton>
          <Button onClick={() => navigate("/suggest/step2")}>다음</Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}
