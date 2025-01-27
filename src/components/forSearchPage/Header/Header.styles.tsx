import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  padding-top: 43px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 314px;
  // width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EAEAEA;
  border-radius: 10px;
  padding: 17px;
  margin: 24px 20px 24px 20px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 17px;
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  background-color: #EAEAEA;
  margin-left: -55px;
  margin-top: 2px;
  border: none;
  
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #C1C1C1;

  &::placeholder {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 23.8px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #C1C1C1;
  }

  &:focus {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 23.8px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: black;
    outline: none;
  }
`;

export const ReviewButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  margin: 24px 16px 24px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;