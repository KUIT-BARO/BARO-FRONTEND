import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  color?: "white" | "blue" | "gray";
  variant?: "filled" | "outlined" | "text"; // 버튼 스타일 타입 추가
}

const SmallButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  color = "blue",
  variant = "filled",
}) => {
  return (
    <StyledButton
      onClick={!disabled ? onClick : undefined}
      color={color}
      disabled={disabled}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  color: "white" | "blue" | "gray";
  disabled?: boolean;
  variant: "filled" | "outlined" | "text";
}>`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  border-radius: 24px;
  padding: 4px 10px;
  border: none;
  box-sizing: border-box;
  white-space: nowrap;

  ${(props) => {
    // 색상 설정
    const colors = {
      white: "#FFFFFF",
      blue: "#5175FF",
      gray: "#9A9A9A",
    };

    const fontColors = {
      white: "#000000",
      blue: "#FFFFFF",
      gray: "#9A9A9A",
    };

    // 스타일별 설정
    switch (props.variant) {
      case "filled":
        return `
          background-color: ${colors[props.color]};
          color: ${fontColors[props.color]};
        `;
      case "outlined":
        return `
          background-color: transparent;
          color: ${colors[props.color]};
          border: 1.5px solid ${colors[props.color]};
        `;
      case "text":
        return `
          background-color: transparent;
          color: ${colors[props.color]};
        `;
      default:
        return "";
    }
  }}

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export default SmallButton;
