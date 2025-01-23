import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/searchIcon.svg";

export default function Search({ placeholder, ...props }) {
  return (
    <SearchWrapper {...props}>
      <img src={SearchIcon} alt="Search Icon" />
      <input type="text" placeholder={placeholder} />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px 12px;
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
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }

  > input::placeholder {
    color: #c0c0c0;
  }

  > input:focus {
    outline: none;
  }
`;
