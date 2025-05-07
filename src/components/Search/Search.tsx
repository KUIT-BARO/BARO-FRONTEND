import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/searchIcon.svg";

export default function Search({ placeholder, value, onKeyDown, ...props }) {
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  return (
    <SearchWrapper {...props}>
      <img src={SearchIcon} alt="Search Icon" />
      <input
        type="text"
        placeholder={isInputFocused ? '' : placeholder}
        value={inputValue}
        onFocus={() => {
          setIsInputFocused(true);
          setInputValue('');
        }}
        onBlur={() => setIsInputFocused(false)}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 8px 17px;
  width: 100%;
  background-color: #eaeaea;
  gap: 8px;
  box-sizing: border-box;

  > img {
    width: 20px;
    height: 20px;
  }

  > input {
    flex: 1;
    background-color: inherit;
    border: none;
    color: #C1C1C1;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 23.8px */
    letter-spacing: -0.425px;
  }

  > input::placeholder {
    color: #C1C1C1;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 23.8px */
    letter-spacing: -0.425px;
  }

  > input:focus {
    outline: none;
  }
`;

