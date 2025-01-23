import React from "react";

import styled from "styled-components";

import formatDateToShort from "../../utils/formatDateToShort";
import StepInterface from "../../interface/Step";
import SuggestInterface from "../../interface/Suggest";

import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import Desc from "../../components/Desc/Desc";
import flag from "../../assets/icons/flag.svg";
import person from "../../assets/icons/person.svg";
import date from "../../assets/icons/date.svg";
import location from "../../assets/icons/location.svg";
import crown from "../../assets/icons/crown.svg";

import 약속확정 from "../../assets/icons/약속확정.svg";

interface ConfirmProps extends StepInterface, SuggestInterface {}

export default function Introduction({
  navigate,
  handleBack,
  handleExit,
  data,
}: ConfirmProps) {
  return (
    <>
      <ConfirmWrapper>
        <Nav handleBack={handleBack} handleExit={handleExit} />
        <Title>
          <p className="bold">
            {data.suggestTitle}
            <br />
            모임 확정되었어요!
          </p>
          <Desc>친구들에게 약속을 BARO 공유해봐요</Desc>
        </Title>
        <Content>
          <img src={약속확정} alt="confirm icon" />
          <div className="container">
            <div className="wrap">
              <img src={flag} />
              <p>{data.suggestPurpose}</p>
            </div>
            <div className="wrap">
              <img src={crown} />
              <p>user</p>
            </div>
            <div className="wrap">
              <img src={person} />
              <p>user 외 {data.suggestPeople}</p>
            </div>
            <div className="wrap">
              <img src={location} />
              <p>{data.selectedLocation}</p>
            </div>
            <div className="wrap">
              <img src={date} />
              <p>
                {formatDateToShort(data.startDate)} ~{" "}
                {formatDateToShort(data.endDate)}
              </p>
            </div>
          </div>
        </Content>
      </ConfirmWrapper>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          background: "white",
        }}
      >
        <Button onClick={() => navigate("step1")}>링크 복사하기</Button>
        <Button onClick={() => navigate(-1)} color="Gray">
          완료하기
        </Button>
      </div>
    </>
  );
}

const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 150px;
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
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 30px;

  .container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    > .wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      > p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;
