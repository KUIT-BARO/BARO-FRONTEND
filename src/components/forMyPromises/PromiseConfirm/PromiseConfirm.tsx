import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Nav from "../../../components/Nav/Nav";
import Button from "../../../components/Button/Button";
import Desc from "../../../components/Desc/Desc";
import flag from "../../../assets/icons/flag.svg";
import person from "../../../assets/icons/person.svg";
import date from "../../../assets/icons/date.svg";
import locationIcon from "../../../assets/icons/location.svg";
import crown from "../../../assets/icons/crown.svg";
import ThumbsUp from "../../../assets/icons/약속확정2.svg";

export default function PromiseConfirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const promiseData = location.state;

  return (
    <>
      <ConfirmWrapper>
        <Title>
          <div className="bold">
            <div>{promiseData.name}</div>
            <div>모임이 확정되었어요!</div>
            <div className='light'>친구들에게 결과를 BARO 공유해보세요</div>
          </div>
        </Title>
        <img className='image' src={ThumbsUp} alt="" />
        <Content>
          <div className="container">
            <div className="wrap">
              <img src={flag} />
              <p>{promiseData.purpose}</p>
            </div>
            <div className="wrap">
              <img src={crown} />
              <p>{promiseData.leaderName}</p>
            </div>
            <div className="wrap">
              <img src={person} />
              <p>{promiseData.leaderName} 외 {promiseData.peopleNumber-1}명</p>
            </div>
            <div className="wrap">
              <img src={locationIcon} />
              <p>{promiseData.place}</p>
            </div>
            <div className="wrap">
              <img src={date} />
              <p>
                {promiseData.dateStart.slice(5,7).replace(/^0+/,'')}/{promiseData.dateStart.slice(8,10).replace(/^0+/,'')} ({new Date(promiseData.dateStart).toLocaleString('ko-KR', {weekday: 'short'})})
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
        <Button onClick={() => navigate(-1)}>공유하기</Button>
        <Button onClick={() => navigate(-1)} color="Gray">완료하기</Button>
      </div>
    </>
  );
};

const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
  margin-top: 18px;
  margin-bottom: 150px;

  .image {
    margin: 2px auto 54px auto;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 30px;

  .bold {
    color: black;
    font-size: 33px;
    font-weight: 600;
    div {
      margin-top: 10px;
    }
    .light {
      font-size: 16px;
      font-weight: 400;
      color: gray;
      margin-top: 20px;
      margin-bottom: 40px;
    }
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
