import React from "react";
import styled from "styled-components";

import ToggleButton from "./ToggleButton";
import Promise from "./Promise";
import Navigation from "../../components/Navigation/Navigation.tsx";

export default function MyPromises() {
  return (
    <Layout>
      <Header>
        <div>나의 약속</div>
      </Header>
      <ToggleButton />
      <PromisesWrapper>
        <Promise 
          color="blue" 
          title="KUIT BARO 2차 회의"
          info="투표까지 기한"
          location="건대입구역 주변"
          date="2/25 (수) ~ 2/28 (금)"
        />
        <Promise 
          color="yellow" 
          title="KUIT BARO 2차 회의"
          info="투표종료까지 기한"
          location="건대입구역 주변"
          date="2/25 (수) ~ 2/28 (금)"
        />
        <Promise 
          color="red" 
          title="KUIT BARO 2차 회의"
          info="뭐넣을지 생각안함"
          location="건대입구역"
          date="2/25 (수) 3시"
        />
      </PromisesWrapper>
      <Navigation />
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #F4F8FB;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
`;
const Header = styled.div`
  background-color: #F4F8FB;
  position: fixed;
  top: 0px;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    margin: 17px auto 11px auto;
    color: var(--baro_black, #17171B);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 26.6px */
    letter-spacing: -0.475px;
  }
`;
const PromisesWrapper = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;