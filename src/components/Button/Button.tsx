import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  color?: keyof typeof Color;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  color = "Blue",
}) => {
  return (
    <StyledButton
      onClick={!disabled ? onClick : undefined} // disabled 상태일 때 클릭 이벤트 무시
      color={color}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const Color = {
  White: "white",
  Blue: "#5175FF",
  Gray: "#C0C0C0",
  Red: "#ff6467",
};

const FontColor = {
  White: "black",
  Blue: "white",
  Gray: "white",
};

const StyledButton = styled.button<{
  color: keyof typeof Color;
  disabled?: boolean;
}>`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 10px;

  color: ${(props) => FontColor[props.color]};
  background-color: ${(props) => Color[props.color]};
  box-sizing: border-box;

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: background-color 0.2s ease, opacity 0.2s ease;
`;

export default Button;
