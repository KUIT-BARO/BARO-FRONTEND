import React from 'react';
import styled from 'styled-components';

import plusIcon from '../../../assets/icons/forMyPromises/plus.svg';

const SuggestPromise = () => {
  return (
    <>
      <SuggestContainer>
        <PlusButton><img src={plusIcon} alt="add" /></PlusButton>
        <Suggest>모임 제안하기</Suggest>
      </SuggestContainer>
    </>
  );
};

export const SuggestContainer = styled.div`
  margin: 24px 8% 0 8%;
  height: 96px;
  gap: 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #D7DEF7;
  background-color: #FFFFFF;
  align-content: center;
  cursor: pointer;
`;
export const PlusButton = styled.div`
  width: 26px;
  height: 25px;
  background-color: #5175ff;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* margin-top: -4rem; */
  transition: background-color 0.2s;
  margin: auto;
  border: none;
`;
export const Suggest = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #404040;  
  margin-top: 8px;
`;

export default SuggestPromise;