import React from "react";
import styled from "styled-components";

const InputWithCounter = ({ text, setText, placeholder, maxlength }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <InputWrapper>
        <Input
          type="text"
          placeholder={`ex. ${placeholder}`}
          value={text}
          maxLength={maxlength}
          onChange={handleChange}
        />
        <Counter>
          {text.length}/{maxlength}
        </Counter>
      </InputWrapper>
      {text.length == maxlength && (
        <ErrorMessage>최대 {maxlength}글자입니다</ErrorMessage>
      )}
    </>
  );
};

export default InputWithCounter;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  padding-bottom: 10px;
  border-bottom: 1px solid #c1c1c1;

  ::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #c1c1c1;
  }
`;

const Counter = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #c1c1c1;
  position: absolute;
  right: 0;
  bottom: 15px;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`;
