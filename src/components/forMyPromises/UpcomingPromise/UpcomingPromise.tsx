import React from 'react';
import styled from 'styled-components';

import BackIcon from '../../../assets/icons/backIcon.svg';
import PersonIcon from '../../../assets/icons/person.svg';
import LocationIcon from '../../../assets/icons/location.svg';

interface UpcomingPromiseProps {
  upcomingDday: {
    promiseId: number;
    name: string;
    purpose: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    place: string;
    peopleNumber: number;
  };
}

const UpcomingPromise = ({ upcomingDday
  // promiseId = 1, 
  // name = "회의", 
  // purpose = "팀프로젝트/회의", 
  // date= "2025-02-10", 
  // timeStart = "14:30:15", 
  // timeEnd = "14:50:15", 
  // place = "스타벅스 건대점", 
  // peopleNumber = 3
}: UpcomingPromiseProps) => {
  console.log('dd',upcomingDday);
  

  const calculateDday = () => {
    const today = new Date();
    const promiseDate = new Date(upcomingDday.date);
    const diffTime = promiseDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `D-${diffDays}` : diffDays < 0 ? `D+${Math.abs(diffDays)}` : 'D-0';
  };

  return (
    <UpcomingContainer>
      <DateContainer>
        <UpcomingDday>{calculateDday()}</UpcomingDday>
        <UpcomingDate>
          {upcomingDday.date.slice(5,7).replace(/^0+/,'')}월{upcomingDday.date.slice(8,10).replace(/^0+/,'')}일 {upcomingDday.timeStart.slice(0,2).replace(/^0+/,'')}시 {upcomingDday.timeStart.slice(3,5).replace(/^0+/,'')}분
        </UpcomingDate>
        <GoToPromise src={BackIcon} alt="back-icon" />
      </DateContainer>
      <PromiseContainer>
        <PromiseTitle>{upcomingDday.name}</PromiseTitle>
        <PromiseContent>
          <img src={PersonIcon} alt="" />
          <div>이지환 외 {upcomingDday.peopleNumber-1}명</div>
        </PromiseContent>
        <PromiseContent>
          <img src={LocationIcon} alt="" />
          <div>{upcomingDday.place}</div>
        </PromiseContent>
      </PromiseContainer>
    </UpcomingContainer>
  );
};

export const UpcomingContainer = styled.div`
  margin: 20px 6% 0 6%;
  height: 193px;
  gap: 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #D7DEF7;
`;
export const DateContainer = styled.div`
  display: flex;
  height: 64px;
  background-color: #EBF1FD;
  border-radius: 10px 10px 0 0;
`;
export const UpcomingDday = styled.div`
  margin: 20px 16px 20px 24px;
  align-content: center;
  padding-top: 2px;
  padding-left: 10px;
  width: 46px;
  height: 24px;
  border-radius: 100px;
  background-color: #5175FF;
  color: #FFFFFF;
`;
export const UpcomingDate = styled.div`
  align-content: center;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000;  
`;
export const GoToPromise = styled.img`
  margin-left: auto;
  margin-right: 24px;
  rotate: 180deg;
  width: 30px;
  cursor: pointer;
  filter: invert(81%) sepia(4%) saturate(12%) hue-rotate(345deg) brightness(97%) contrast(86%);
`;
export const PromiseContainer = styled.div`
  background-color: #FFFFFF;
  height: 129px;
  border-radius: 0 0 10px 10px;
  padding-top: 16px;
  padding-bottom: 28px;
  padding-left: 24px;
`;
export const PromiseTitle = styled.div`
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 12px;
`;
export const PromiseContent = styled.div`
  display: flex;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  img {
    width: 14px;
    height: 14px;
    margin: 1.5px 12px 1.5px 0;
  }
`;

export default UpcomingPromise;