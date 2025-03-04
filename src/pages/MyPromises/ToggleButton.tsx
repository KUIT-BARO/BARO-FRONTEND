import React from "react";
import styled from "styled-components";

import CrownOn from "../../assets/icons/MyPromisesPage/crownWhite.svg";
import CrownOff from "../../assets/icons/MyPromisesPage/CrownGray.svg";

interface ToggleButtonProps {
  toggleActive: boolean;
  setToggleActive: (value: boolean) => void;
}

export default function ToggleButton({ toggleActive, setToggleActive }: ToggleButtonProps) {
  return (
    <Layout>
      <Wrapper>
        <Toggle
          active={toggleActive}
          onClick={() => setToggleActive(true)}
        >
          참여
        </Toggle>
        <Toggle
          active={!toggleActive}
          onClick={() => setToggleActive(false)}
        >
          <img src={!toggleActive ? CrownOn : CrownOff} alt="crown-icon" />
        </Toggle>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #F4F8FB;
  position: fixed;
  top: 54px;
  z-index: 50;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 26px;
  gap: 0px;
  width: 350px;
  height: 44px;
  flex-shrink: 0;
`;
const Toggle = styled.button<{ active: boolean }>`
  width: 171px;
  height: 36px;
  border: none;
  border-radius: 26px;
  cursor: pointer;
  background-color: ${props => props.active ? '#5175FF' : 'transparent'};
  color: ${props => props.active ? 'white' : '#C0C0C0'};

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;

  img {
    padding-top: 3px;
  }
`;
