import React, { useState } from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import Nav from "../../../components/Nav/Nav";

import { Wrapper, FixedButton, Section } from "../Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";
import { SectionTitle } from "./Step1.styles";
import downIcon from "../../../assets/icons/downIcon.svg";
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
            suggestTitle={suggestTitle}
            setSuggestTitle={setSuggestTitle}
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
            suggestPeople={suggestPeople}
            setSuggestPeople={setSuggestPeople}
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

import { InputWrapper, Input, Counter, ErrorMessage } from "./Step1.styles";

function InputWithCounter({ suggestTitle, setSuggestTitle }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 12) {
      setSuggestTitle(value);
    }
  };
  return (
    <>
      <InputWrapper>
        <Input
          type="text"
          placeholder="ex 마케팅 관리 2조"
          value={suggestTitle}
          maxLength={12}
          onChange={handleChange}
        />
        <Counter>{suggestTitle.length}/12</Counter>
      </InputWrapper>
      {suggestTitle.length === 12 && (
        <ErrorMessage>최대 12글자입니다</ErrorMessage>
      )}
    </>
  );
}
import {
  DropdownWrapper,
  DropdownList,
  DropdownItem,
  DropdownHeader,
  Arrow,
} from "./Step1.styles";
function Dropdown({ suggestPeople, setSuggestPeople }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = ["1명", "2명", "3명", "4명", "5명"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSuggestPeople(value);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper isOpen={isOpen}>
      <DropdownHeader onClick={handleToggle}>
        {suggestPeople}
        <Arrow isOpen={isOpen}>
          <img src={downIcon} alt="button" />
        </Arrow>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => handleSelect(option)}
              isSelected={option === suggestPeople}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}
