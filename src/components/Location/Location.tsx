import React from "react";
import styled from "styled-components";
import blueStar from "../../assets/icons/blueStar.svg";

interface LocationProps {
  location: string;
  isSelected?: boolean;
  address: string;
  star: number;
  comments: number;
  categories: Array<string>;
  onClick: () => void;
}

const Location = ({
  location,
  address,
  star,
  comments,
  categories,
  isSelected,
  onClick,
}: LocationProps) => {
  return (
    <Wrapper onClick={onClick} isSelected={isSelected}>
      <div className="title">{location}</div>
      <div className="scope">
        <div>{star}</div>
        <div className="stars">
          <img src={blueStar} alt="star icons" />
          <img src={blueStar} alt="star icons" />
          <img src={blueStar} alt="star icons" />
          <img src={blueStar} alt="star icons" />
        </div>
        <div>({comments})</div>
      </div>
      <div className="location">{address}</div>
      <div className="categories"></div>
    </Wrapper>
  );
};

export default Location;

const Wrapper = styled.div<{ isSelected: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15px 10px;
  border-radius: 10px;
  border-bottom: 1px solid #edf1ff;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#5175FF" : "#f4f8fb")};
  color: ${(props) => (props.isSelected ? "#f4f8fb" : "#979797")};

  font-size: 14px;
  font-weight: 600;

  .title {
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => (props.isSelected ? "#f4f8fb" : "black")};
  }

  .scope {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
