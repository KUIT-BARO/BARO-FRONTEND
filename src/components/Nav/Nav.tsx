import React from "react";
import BackIcon from "../../assets/icons/backIcon.svg";
import ExitIcon from "../../assets/icons/x.svg";
import styled from "styled-components";

export default function Nav({ handleBack, handleExit }) {
  return (
    <NavWrapper>
      <img onClick={handleBack} src={BackIcon} alt="back icon" />
      <img onClick={handleExit} src={ExitIcon} alt="exit icon" />
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
  > img {
    display: inline-block;
    cursor: pointer;
  }
`;
