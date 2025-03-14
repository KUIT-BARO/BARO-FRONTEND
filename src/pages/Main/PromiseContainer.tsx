import React from "react";
import styled from "styled-components";

import person from "../../assets/icons/사람_gray.svg";
import locationIcon from "../../assets/icons/장소_gray.svg";

interface PromiseContainerProps {
  left: string;
  date: string;
  people: string;
  location: string;
  title: string;
}

export default function PromiseContainer ({
  left,
  date,
  people,
  location,
  title,
}: PromiseContainerProps) {
  return (
    <Container>
      <div className="location">
        <img src={locationIcon} alt="location-icon" />
        <span>{location}</span>
      </div>
      <div className="title">
        {title}
      </div>
      <div className="date">
        {parseInt(date.slice(5,7))}/{date.slice(8,10)} ({new Date(date).toLocaleString('ko-KR', {weekday: 'short'})})
      </div>
      <div className="desc-wrapper">
        <div className="desc">
          <img src={person} alt="people-icon" />
          <span>{people}</span>
        </div>
        <div className="d-day">
          {/* {calculateDday(date)} */}
          {left}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 568px) {
    width: 470px;
    height: 162px;
    padding: 26px 41px;
  }
  width: 354px;
  height: 142px;
  display: flex;
  flex-direction: column;
  padding: 17px 41px;
  margin-top: 23px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.50);

  .location {
    img {
      width: 16px;
      height: 16px;
      margin-right: 2px;
    }

    span {
      bottom: 3px;
      position: relative;
      color: #787878;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 14px */
      letter-spacing: -0.25px;
    }
  }

  .title {
    margin: 2px 0 0 0;
    color: #5175FF;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 35px */
    letter-spacing: -0.625px;
  }

  .date {
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "Noto Sans";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.625px;
  }

  .desc-wrapper {
    display: flex;
    justify-content: space-between;

    .desc {
      display: flex;
      align-items: center;

      img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }

      span {
        color: var(--baro_black, #17171B);
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.35px;
      }
    }

    .d-day {
      right: 0;
      margin-right: -15px;
      margin-bottom: -8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 24px;
      border-radius: 100px;
      background: rgba(255, 100, 103, 0.90);
      color: #FFF;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.35px;
    }
  }
`;
