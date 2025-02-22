import React from "react";
import 약속제안 from "../../assets/icons/Promise/약속제안.png";
import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import Button from "../../components/Button/Button";

import StepInterface from "../../interface/Step";
import Desc from "../../components/Desc/Desc";
import { useNavigate } from "react-router-dom";

export default function Introduction({
  handleBack,
  handleExit,
}: StepInterface) {
  const navigate = useNavigate();
  return (
    <IntroductionWrapper>
      <TopBar handleBack={handleBack} handleExit={handleExit} />
      <Title>
        <p className="bold">
          새로운 약속을 BARO
          <br />
          만들어 공유해요!
        </p>
        <Desc>친구들에게 약속을 BARO 공유해봐요</Desc>
      </Title>
      <img src={약속제안} alt="suggest icon" width={"90%"} />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Button onClick={() => navigate("step1")}>약속 생성하기</Button>
        <Button onClick={() => navigate(-1)} color="Gray">
          돌아가기
        </Button>
      </div>
    </IntroductionWrapper>
  );
}
const IntroductionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  box-sizing: border-box;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  .bold {
    color: black;
    font-size: 33px;
    font-weight: 600;
  }
`;
