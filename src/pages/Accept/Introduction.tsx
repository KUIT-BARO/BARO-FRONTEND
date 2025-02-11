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

import 제안수락 from "../../assets/icons/제안수락.svg";
import { useNavigate } from "react-router-dom";

interface ConfirmProps extends StepInterface, SuggestInterface {}

export default function Introduction({
  handleBack,
  handleExit,
  data,
}: ConfirmProps) {
  const navigate = useNavigate();
  return (
    <>
      <ConfirmWrapper>
        <Nav handleBack={handleBack} handleExit={handleExit} />
        <Title>
          <p className="bold">
            {data.title}
            <br />
            모임 제안을 받았어요!
          </p>
          <Desc>선호하는 시간과 장소를 알려주세요</Desc>
        </Title>
        <Content>
          <img src={제안수락} alt="confirm icon" />
          <div className="container">
            <div className="wrap">
              <img src={flag} />
              <p>{data.purpose}</p>
            </div>
            <div className="wrap">
              <img src={crown} />
              <p>user</p>
            </div>
            <div className="wrap">
              <img src={person} />
              <p>user 외 {data.peopleNumber}</p>
            </div>
            <div className="wrap">
              <img src={location} />
              <p>{data.place}</p>
            </div>
            <div className="wrap">
              <img src={date} />
              <p>
                {formatDateToShort(data.dateStart)} ~{" "}
                {formatDateToShort(data.dateEnd)}
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
        <Button onClick={() => navigate("step1")}>참여하기</Button>
        <Button onClick={() => navigate(-1)} color="Gray">
          돌아가기
        </Button>
      </div>
    </>
  );
}

const ConfirmWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  margin-top: -30px;
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
