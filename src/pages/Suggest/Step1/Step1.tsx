import React, { useState } from "react";
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

export default function Step1({
  navigate,
  suggestTitle,
  setSuggestTitle,
  suggestPurpose,
  setSuggestPurpose,
  suggestPeople,
  setSuggestPeople,
  handleBack,
  handleExit,
}: StepInterface & {
  suggestTitle: string;
  setSuggestTitle: React.Dispatch<React.SetStateAction<string>>;
  suggestPurpose: string[];
  setSuggestPurpose: React.Dispatch<React.SetStateAction<string[]>>;
  suggestPeople: number | null;
  setSuggestPeople: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const isFormComplete =
    suggestTitle.trim().length > 0 &&
    suggestPurpose.length > 0 &&
    suggestPeople !== null;

  const handlePurpose = (purpose: string) => {
    setSuggestPurpose((prev) =>
      prev.includes(purpose)
        ? prev.filter((item) => item !== purpose)
        : [...prev, purpose]
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
            text={suggestTitle}
            setText={setSuggestTitle}
          />
        </Section>

        {/* 약속 목적 선택 */}
        <Section>
          <SectionTitle>약속 목적을 선택해주세요</SectionTitle>
          <div className="btn-wrapper">
            {purposes.map((purpose) => (
              <Button
                key={purpose}
                onClick={() => handlePurpose(purpose)}
                color={suggestPurpose.includes(purpose) ? "Blue" : "White"}
              >
                {purpose}
              </Button>
            ))}
          </div>
        </Section>

        {/* 인원 선택 */}
        <Section>
          <SectionTitle>약속 인원을 선택해주세요</SectionTitle>
          <Dropdown
            people={suggestPeople}
            setPeople={setSuggestPeople}
            maxPeople={5}
          />
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
