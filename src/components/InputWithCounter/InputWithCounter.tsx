import React from "react";
import styled from "styled-components";
import LocationIcon from "../../assets/icons/Promise/location.svg";
const InputWithCounter = ({
  text = "",
  setText,
  placeholder,
  maxlength,
  location = false,
}) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <InputWrapper>
      <div className="input">
        {location ? <img src={LocationIcon} /> : ""}
        <Input
          type="text"
          placeholder={`${placeholder}`}
          value={text}
          maxLength={maxlength}
          onChange={handleChange}
        />
        <Counter>
          {text.length}/{maxlength}
        </Counter>
      </div>
      {text.length == maxlength && (
        <ErrorMessage>최대 {maxlength}글자입니다</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default InputWithCounter;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > .input {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid #c1c1c1;

    padding-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;

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
