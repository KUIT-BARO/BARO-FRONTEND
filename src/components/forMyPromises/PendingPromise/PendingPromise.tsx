import React from 'react';
import styled from 'styled-components';

import FlagIcon from '../../../assets/icons/flag.svg';
import CrownIcon from '../../../assets/icons/crown.svg';
import PersonIcon from '../../../assets/icons/person.svg';
import LocationIcon from '../../../assets/icons/location.svg';
import CalendarIcon from '../../../assets/icons/date.svg';

interface PendingPromiseProps {
  promise: {
    promiseId: number;
    name: string;
    purpose: string;
    dateStart: string;
    dateEnd: string;
    place: string;
    peopleNumber: number;
  };
}

const PendingPromise = ({ // promise
  promiseId = 123,
  name = "친구 모임",
  purpose = "팀프로젝트 / 회의",
  dateStart = "2025-02-15",
  dateEnd = "2025-02-25",
  place = "강남역 카페",
  peopleNumber = 3
}: PendingPromiseProps) => {

  return (
    <ConfirmContainer>
      <ConfirmStateContainer>
        <ConfirmState>참여 대기</ConfirmState>
      </ConfirmStateContainer>
      <PromiseTitle>{name}</PromiseTitle>
      <PromiseContainer>
        <PromiseContent>
          <img src={FlagIcon} alt="flag-icon" />
          <div>{purpose}</div>
        </PromiseContent>
        <PromiseContent>
          <img src={CrownIcon} alt="crown-icon" />
          <div>이지환</div>
        </PromiseContent>
        <PromiseContent>
          <img src={PersonIcon} alt="person-icon" />
          <div>이지환 외 {peopleNumber-1}명</div>
        </PromiseContent>
        <PromiseContent>
          <img src={LocationIcon} alt="location-icon" />
          <div>{place}</div>
        </PromiseContent>
        <PromiseContent>
          <img src={CalendarIcon} alt="calendar-icon" />
          <div>
            {dateStart.slice(5,7).replace(/^0+/,'')}/{dateStart.slice(8,10).replace(/^0+/,'')} (목) ~ {dateEnd.slice(5,7).replace(/^0+/,'')}/{dateEnd.slice(8,10).replace(/^0+/,'')} (목)
          </div>
        </PromiseContent>
      </PromiseContainer>
      <ButtonContainer>
        <ConfirmButton>수락하기</ConfirmButton>
        <DenyButton>거절하기</DenyButton>
      </ButtonContainer>
    </ConfirmContainer>
  );
};

export const ConfirmContainer = styled.div`
  margin: 28px 6% 0 6%;
  height: 300px;
  gap: 0px;
  border-radius: 10px;
  border: 2px solid #FF6467;
  opacity: 0px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4px 0px #C9D2F5;
`;
export const ConfirmStateContainer = styled.div`
  margin: 20px 0 0 24px;
  display: flex;
`;
export const ConfirmState = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FF6467;
`;
export const PromiseTitle = styled.div`
  margin: 10px 0 0 24px;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000;  
`;
export const PromiseContainer = styled.div`
  margin: 10px 0 0 24px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none; 
  color: #000000;
`;
export const PromiseContent = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  img {
    width: 14px;
    height: 14px;
    margin: 1.5px 12px 1.5px 0;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 24px 0 24px;
`;
export const ConfirmButton = styled.button`
  margin-right: 12px;
  width: 146px;
  height: 44px;
  padding: 11px 0;
  gap: 10px;
  border-radius: 10px;
  opacity: 0px;
  background-color: #5175FF;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`;
export const DenyButton = styled.button`
  width: 146px;
  height: 44px;
  padding: 11px 0;
  gap: 10px;
  border-radius: 10px;
  opacity: 0px;
  background-color: #D9D9D9;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`;

export default PendingPromise;