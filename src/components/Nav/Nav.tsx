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
      <div style={{ paddingTop: " 20px" }}></div>
    </>
  );
}

const Color = {
  Blue: "#f4f8fb",
  White: "white",
};

const NavWrapper = styled.div<{ color: keyof typeof Color }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  padding: 20px;
  background-color: ${(props) => Color[props.color]};
  box-sizing: border-box;

  > img {
    display: inline-block;
    cursor: pointer;
  }
`;
