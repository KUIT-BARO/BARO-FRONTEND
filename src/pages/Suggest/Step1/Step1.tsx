import React from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import Nav from "../../../components/Nav/Nav";

import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../assets/styles/Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";
import { SectionTitle } from "./Step1.styles";
import InputWithCounter from "../../../components/InputWithCounter/InputWithCounter";
import Dropdown from "../../../components/DropDown/DropDown";
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
  purpose: string[];
  setPurpose: React.Dispatch<React.SetStateAction<string[]>>;
  peopleNum: number | null;
  setPeopleNum: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const navigate = useNavigate();

  const isFormComplete =
    name.trim().length > 0 && purpose.length > 0 && peopleNum !== null;

  const handlePurpose = (selectedPurpose: string) => {
    setPurpose((prev) =>
      prev.includes(selectedPurpose)
        ? prev.filter((item) => item !== selectedPurpose)
        : [...prev, selectedPurpose]
    );
  };

  const purposes = ["팀 프로젝트/회의", "공부", "밥 먹기", "카페 가기"];

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
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
                color={purpose.includes(option) ? "Blue" : "White"}
              >
                {option}
              </Button>
            ))}
          </div>
        </Section>

        {/* 인원 선택 */}
        <Section>
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
