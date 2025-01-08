import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/searchIcon.svg";
export default function Search({ placeholder }) {
  return (
    <Input>
      <img src={SearchIcon} />
      <input type="text" placeholder={placeholder} />
    </Input>
  );
}
const Input = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 24px;
  padding: 4px 14px;
  width: 100%;
  background-color: #eaeaea;
  gap: 10px;
  box-sizing: border-box;
  > input {
    background-color: inherit;
    border: none;
  }
  > input::placeholder {
    font-size: 17px;
    font-weight: 500;
    color: #c0c0c0;
  }
  > input:focus {
    background-color: inherit;
    outline: none;
  }
`;
