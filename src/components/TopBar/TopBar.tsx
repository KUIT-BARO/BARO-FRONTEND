import React from "react";
import BackIcon from "../../assets/icons/Buttons/back.svg";
import ExitIcon from "../../assets/icons/Buttons/x.svg";
import styled from "styled-components";

interface TopBarProps {
  handleBack?: () => void;
  handleExit: () => void;
  color?: keyof typeof Color;
}

export default function TopBar({
  handleBack,
  handleExit,
  color = "White",
}: TopBarProps) {
  return (
    <>
      <TopBarWrapper color={color}>
        {/* handleBack이 있을 때만 BackIcon 렌더링 */}
        {handleBack && (
          <BackButton onClick={handleBack} src={BackIcon} alt="back icon" />
        )}
        <ExitButton onClick={handleExit} src={ExitIcon} alt="exit icon" />
      </TopBarWrapper>
      <PlaceHolder color={color} />
    </>
  );
}

const Color = {
  Blue: "#f4f8fb",
  White: "#ffffff",
};

const BaseStyle = styled.div<{ color: keyof typeof Color }>`
  width: 100%;
  background-color: ${(props) => Color[props.color]};
`;

const TopBarWrapper = styled(BaseStyle)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

const BackButton = styled.img`
  position: absolute;
  left: 20px;
  cursor: pointer;
`;

// X(닫기) 버튼 (오른쪽 고정)
const ExitButton = styled.img`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const PlaceHolder = styled(BaseStyle)`
  height: 4rem;
  width: 100%;
  box-sizing: border-box;
`;
