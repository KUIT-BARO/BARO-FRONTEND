import React from "react";
import styled from "styled-components";

import Brace from "../../assets/icons/MyPromisesPage/brace.svg";

import Vote from "../../assets/icons/MyPromisesPage/voteBlue.svg";
import LocationBlue from "../../assets/icons/MyPromisesPage/locationBlue.svg";
import DateBlue from "../../assets/icons/MyPromisesPage/dateBlue.svg";

import Gavel from "../../assets/icons/MyPromisesPage/gavelYellow.svg";
import LocationYellow from "../../assets/icons/MyPromisesPage/locationYellow.svg";
import DateYellow from "../../assets/icons/MyPromisesPage/dateYellow.svg";

import Megaphone from "../../assets/icons/MyPromisesPage/megaPhoneRed.svg";
import LocationRed from "../../assets/icons/MyPromisesPage/locationRed.svg";
import DateRed from "../../assets/icons/MyPromisesPage/dateRed.svg";


interface PropsType {
  color: string;
  title: string;
  info: string;
  location: string;
  date: string;
}

export default function Promise({ 
  color,
  title,
  info,
  location,
  date
 }: PropsType) {

  return (
    <Layout>
      <Title color={color}>
        <div>{title}</div>
        <img src={Brace} alt="" />
      </Title>
      <Content>
        <div className="info">
          <img 
            src={
              color === 'blue' ? Vote :
              color === 'yellow' ? Gavel :
              color === 'red' ? Megaphone : ''
            } 
            alt="inco icon" 
          />
          <div>{info}</div>
        </div>
        <div className="location">
          <img 
            src={
              color === 'blue' ? LocationBlue :
              color === 'yellow' ? LocationYellow :
              color === 'red' ? LocationRed : ''
            } 
            alt="inco icon" 
          />
          <div>{location}</div>
        </div>
        <div className="date">
          <img 
            src={
              color === 'blue' ? DateBlue :
              color === 'yellow' ? DateYellow :
              color === 'red' ? DateRed : ''
            } 
            alt="inco icon" 
          />
          <div>{date}</div>
        </div>
      </Content>
      <Status color={color}>
        { color === 'blue' ? '미정' : 
          color === 'yellow' ? '투표' : 
          color === 'red' ? '확정' : ''}
      </Status>
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #D7DEF7;
  height: 199px;
  margin: 20px 0;
  // padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 10px 10px 0 0;
  background: ${props => 
    props.color === 'blue' ? '#EDF1FF' :
    props.color === 'yellow' ? '#FFFBDE' :
    props.color === 'red' ? '#F9D7D8' : '#EDF1FF'
  };
  height: 64px;
  width: 100%;
  padding: 20px;

  color: #000;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: -0.5px;

  img {
    cursor: pointer;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0 0 28px;
  color: var(--baro_black, #17171B);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;

  .info, .location, .date {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 10px;
  }
`;
const Status = styled.div<{ color: string }>`
  display: flex;
  justify-content: flex-end;
  width: 46px;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-top: -29px;
  margin-left: auto;
  margin-right: 20px;
  z-index: 2;
  border-radius: 100px;

  color: #FFF;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;

  background: ${props => 
    props.color === 'blue' ? '#5175FF' :
    props.color === 'yellow' ? '#FFBB00' :
    props.color === 'red' ? '#FF6467' : ''
  };
`;