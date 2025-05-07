import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  min-height: 80vh;
`;

export const Review = styled.div`
  margin: 0 20px;
`;

export const LocationSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;

  div {
    margin-top: 2px;
    font-size: 17px;
    font-weight: 500;
    line-height: 23.8px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ADBEFF;
    cursor: pointer;
  }
`;

export const ReviewWrite = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 6px 17px 6px;

  div {
    margin-left: auto;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #F4F8FB;
  }

  textarea {
    background: none;
    border: none;
    width: 100%;
    height: 78px;
    margin-top: 16px;
    resize: none;
    outline: none;
    
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FFFFFF;

    &::placeholder, &focus {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.025em;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #FFFFFF;
    }
  }
`;

export const Rating = styled.div`
  padding: 20px 20px 0 20px;
  background-color: #EDF1FF;
  min-height: 42vh;

  color: #5175FF;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 23.8px */
  letter-spacing: -0.425px;

  .rating-stars {
    display: flex;
    margin-top: 11px;
    margin-bottom: 32px;
    gap: 5.34px;

    img {
      cursor: pointer;
      width: 32px;
    } 
  }

  span {
    margin-left: 3px;
    color: #ADBEFF;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.35px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  gap: 4px;
`;

export const CategoryButton = styled.button<{ isSelected: boolean }>`
  margin-top: 11px;
  width: 83px;
  height: 40px;
  top: 7px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #5175FF;
  opacity: 0px;
  background: none;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.025em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#FFF" : "#5175FF")};
  background-color: ${(props) => (props.isSelected ? "#5175ff" : "transparent")};
`;