import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 24px;
`;

const InputLabel = styled.label`
  display: block;
  color: white;
  font-size: 19px;
  margin-bottom: 3px;
  font-weight: 900;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SignupInput = styled.input`
  width: 70%;
  height: 50px;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  padding: 0;
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
  }

  &:focus {
    outline: none;
  }
`;

const CheckButton = styled.button`
  position: absolute;
  right: 0;
  height: 44px;
  padding: 0 15px;
  background: #5175ff;
  border: none;
  border-radius: 8.6px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
`;

interface Props {
  children: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  buttonText?: string;
  onButtonClick?: () => void;
}
const InputSection: React.FC<Props> = ({
  children,
  placeholder,
  value,
  setValue,
  buttonText,
  onButtonClick,
}) => {
  return (
    <InputContainer>
      <InputLabel>{children}</InputLabel>
      <InputWrapper>
        <SignupInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {buttonText && onButtonClick && (
          <CheckButton onClick={onButtonClick}>{buttonText}</CheckButton>
        )}
      </InputWrapper>
    </InputContainer>
  );
};
export default InputSection;
