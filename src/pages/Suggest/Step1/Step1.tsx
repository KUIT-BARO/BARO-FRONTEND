import React from "react";
import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import TopBar from "../../../components/TopBar/TopBar";

import { Wrapper, FixedButton, Section } from "./Step1.styles";
import Question from "../../../components/Question/Question";
import InputWithCounter from "../../../components/InputWithCounter/InputWithCounter";

import { useNavigate } from "react-router-dom";
export default function Step1({
  name,
  setName,
  handleExit,
}: {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleExit: () => void;
}) {
  const navigate = useNavigate();

  const isFormComplete = (name ?? "").trim().length > 0;

  return (
    <>
      <TopBar handleExit={handleExit} color={"Blue"} />

      <Wrapper>
        <ProgressBar percent={25} />
        <Section>
          <Question
            color={"Blue"}
            title={"어떤 약속인가요?"}
            desc={"약속 장소의 대략적인 위치를 설정해주세요"}
          />

          <InputWithCounter
            placeholder={"ex. 마케팅 2조 회의"}
            maxlength={12}
            text={name}
            setText={setName}
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
