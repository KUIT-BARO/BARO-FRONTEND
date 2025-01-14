import React from "react";
import BackIcon from "../../assets/icons/backIcon.svg";
import ExitIcon from "../../assets/icons/x.svg";
import styled from "styled-components";

interface NavProps {
  handleBack: () => void;
  handleExit: () => void;
  color?: keyof typeof Color; // 선택적 prop
}

export default function Nav({
  handleBack,
  handleExit,
  color = "White",
}: NavProps) {
  return (
    <>
      <NavWrapper color={color}>
        <img onClick={handleBack} src={BackIcon} alt="back icon" />
        <img onClick={handleExit} src={ExitIcon} alt="exit icon" />
      </NavWrapper>
      <PlaceHolder color={color} />
    </>
  );
}

const Color = {
  Blue: "#f4f8fb",
  White: "#ffffff",
};

// 공통 스타일 컴포넌트 생성
const BaseStyle = styled.div<{ color: keyof typeof Color }>`
  width: 100%;
  background-color: ${(props) => Color[props.color]};
`;

const NavWrapper = styled(BaseStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  height: 44px;
  padding: 30px 20px;
  box-sizing: border-box;

  > img {
    display: inline-block;
    cursor: pointer;
  }
`;

const PlaceHolder = styled(BaseStyle)`
  height: 44px;
  width: 100%;
  box-sizing: border-box;
`;
