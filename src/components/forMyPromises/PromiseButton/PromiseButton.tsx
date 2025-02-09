import React from 'react';
import styled from 'styled-components';

export default function PromiseButton(props) {

  const [active, setActive] = React.useState('promise');
  function updateActive(type) {
    setActive(type);
    props.updateActive(type);
  }

  return (
    <Container>
      <ToggleContainer>
        {(active === 'promise' && <>
          <ToggleButtonActive onClick={() => updateActive('promise')}>
            나의 약속
          </ToggleButtonActive>
          <ToggleButtonInactive onClick={() => updateActive('schedule')}>
            나의 일정
          </ToggleButtonInactive>
        </>)}
        {(active === 'schedule' && <>
          <ToggleButtonInactive onClick={() => updateActive('promise')}>
            나의 약속
          </ToggleButtonInactive>
          <ToggleButtonActive onClick={() => updateActive('schedule')}>
            나의 일정
          </ToggleButtonActive>
        </>)}
      </ToggleContainer>
    </Container>
  );
};

export const Container = styled.div`
  padding-top: 64px;
  z-index: 50;
  background-color: #F4F8FB;
  width: 100%;
`;
export const ToggleContainer = styled.div`
  width: 354px;
  height: 44px;
  gap: 0px;
  border-radius: 26px;
  opacity: 0px;
  background-color: #FFFFFFBF;
  margin: 16px auto 12px auto;
  padding: 4px;
`;
export const ToggleButtonActive = styled.button`
  border: none;
  background-color: #5175FF;
  color: white;
  width: 171px;
  height: 36px;
  top: 114px;
  left: 28px;
  gap: 0px;
  border-radius: 26px;
  opacity: 0px;
`;
export const ToggleButtonInactive = styled.button`
  color: #8EA6FF;
  width: 175px;
  border: none;
  background: none;
  cursor: pointer;
`;