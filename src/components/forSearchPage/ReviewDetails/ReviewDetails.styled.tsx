import styled from "styled-components";

export const ReviewWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const PlaceSetting = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(221deg) brightness(100%) contrast(102%);
  }

  div {
    margin-top: 1px;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 23.8px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ADBEFF;
    cursor: pointer;
  }`;

export const ReviewWrite = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 17px;
    margin-bottom: 14px;
    margin-left: auto;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #F4F8FB;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  border: none;
  width: 100%;
  height: 78px;
  margin-top: 16px;
  resize: none;
  
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;

  &::placeholder, &focus {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FFFFFF;
  }
`;

export const RatingWrapper = styled.div`
  padding: 20px 20px 20% 20px;
  background-color: #EDF1FF;
`;

export const Rating = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #5175FF;
`;

export const RatingStars = styled.div`
  display: flex;
  margin-top: 11px;
  margin-bottom: 32px;
  gap: 5.34px;

  img {
    cursor: pointer;
    width: 32px;
  }
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  background: #C0C0C0;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const Category = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #5175FF;

  span {
    margin-left: 3px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 19.6px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ADBEFF;
  }
`;

export const Categories = styled.div`
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
  font-family: Pretendard;
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