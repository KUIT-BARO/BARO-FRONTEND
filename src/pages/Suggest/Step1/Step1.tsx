import React from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import TopBar from "../../../components/TopBar/TopBar";

import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../components/Steps/Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";
import { SectionTitle } from "./Step1.styles";
import InputWithCounter from "../components/InputWithCounter/InputWithCounter";
import Dropdown from "../components/DropDown/DropDown";
import { useNavigate } from "react-router-dom";
export default function Step1({
  name,
  setName,
  purpose,
  setPurpose,
  peopleNum,
  setPeopleNum,
  handleBack,
  handleExit,
}: StepInterface & {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  purpose: string;
  setPurpose: React.Dispatch<React.SetStateAction<string>>;
  peopleNum: number | null;
  setPeopleNum: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const navigate = useNavigate();

  const purposeMap: { [key: string]: string } = {
    "팀 프로젝트/회의": "MEETING",
    "스터디/ 공부": "STUDY",
    "밥 같이 먹기/ 식사": "MEAL",
    "방문/ 투어": "CAFE",
  };

  const isFormComplete =
    (name ?? "").trim().length > 0 &&
    (purpose ?? "").trim().length > 0 &&
    peopleNum !== null;

  // ✅ 선택한 목적을 ENUM 값으로 변환하여 저장
  const handlePurpose = (selectedPurpose: string) => {
    const mappedValue = purposeMap[selectedPurpose] || "";
    setPurpose(mappedValue); // ENUM 값 저장
  };

  const purposes = Object.keys(purposeMap);

  return (
    <>
      <TopBar handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <ProgressBar percent={25} />

        <SubTitle>어떤 약속인가요?</SubTitle>

        {/* 약속 이름 작성 */}
        <Section>
          <SectionTitle>약속 이름을 작성해주세요</SectionTitle>
          <InputWithCounter
            placeholder={"마케팅 2조 회의"}
            maxlength={12}
            text={name}
            setText={setName}
          />
        </Section>

        {/* 약속 목적 선택 */}
        <Section>
          <SectionTitle>약속 목적을 선택해주세요</SectionTitle>
          <div className="btn-wrapper">
            {purposes.map((option) => (
              <Button
                key={option}
                onClick={() => handlePurpose(option)}
                color={purpose === purposeMap[option] ? "Blue" : "White"} // 선택 여부 확인
              >
                {option}
              </Button>
            ))}
          </div>
        </Section>

        {/* 인원 선택 */}
        <Section style={{ marginBottom: "20px" }}>
          <SectionTitle>약속 인원을 선택해주세요</SectionTitle>
          <Dropdown people={peopleNum} setPeople={setPeopleNum} maxPeople={5} />
        </Section>

        <FixedButton>
          <Button
            disabled={!isFormComplete}
            onClick={() => navigate("/suggest/step2")}
          >
            다음
          </Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}
