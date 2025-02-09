import React from "react";

import Button from "../../../../components/Button/Button";

import BackIcon from "../../../../assets/icons/backIcon.svg";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../../assets/styles/Steps.styles";

import KakaoMap from "../../../../components/forSearchPage/KakaoMap/KakaoMap";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Popup({ setPopup, location, onOpenPopup }) {
  const navigate = useNavigate();
  return (
    <>
      <Nav>
        <img
          onClick={() => {
            setPopup(false);
          }}
          src={BackIcon}
          alt="back icon"
        />
      </Nav>
      <Wrapper>
        <Section>
          <KakaoMap mapHeight="73vh" />
        </Section>
        <FixedBottom>
          <div className="desc">
            <div className="bold">{location.placeName}</div>
            <div>{location.address}</div>
          </div>
          <Button
            onClick={() => {
              setPopup(false);
              onOpenPopup(true);
            }}
          >
            이 주소로 설정하기
          </Button>
        </FixedBottom>
      </Wrapper>
    </>
  );
}
const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f4f8fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 30px 20px;
  box-sizing: border-box;

  > img {
    display: inline-block;
    cursor: pointer;
  }
`;
const FixedBottom = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  flex-direction: column;
  gap: 30px;
  background-color: #f4f8fb;
  padding: 20px;
  padding-top: 30px;
  .desc {
    width: 100%;
    display: flex;
    gap: 13px;
    flex-direction: column;
    font-size: 14px;
    color: #979797;
    .bold {
      font-size: 19px;
      font-weight: 600;
      color: black;
    }
    box-sizing: border-box;
  }
`;
const Wrapper = styled.div`
  margin-top: 54px;
  background-color: #f4f8fb;

  `;