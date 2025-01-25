import React from "react";
import styled from "styled-components";
import blueStar from "../../assets/icons/blueStar.svg";
import navyStar from "../../assets/icons/navyStar.svg";
import whiteStar from "../../assets/icons/whiteStar.svg";
import grayStar from "../../assets/icons/grayStar.svg";
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
  isSelected = false,
  onClick,
}: LocationProps) => {
  // 별 렌더링 함수
  const renderStars = (starCount: number) => {
    const maxStars = 5; // 별점 최대 개수
    const stars = [];

    if (isSelected) {
      // 선택된 경우: whiteStar와 navyStar
      for (let i = 0; i < starCount; i++) {
        stars.push(<img key={`white-${i}`} src={whiteStar} alt="star icon" />);
      }
      for (let i = starCount; i < maxStars; i++) {
        stars.push(<img key={`navy-${i}`} src={navyStar} alt="star icon" />);
      }
    } else {
      // 선택되지 않은 경우: blueStar와 grayStar
      for (let i = 0; i < starCount; i++) {
        stars.push(<img key={`blue-${i}`} src={blueStar} alt="star icon" />);
      }
      for (let i = starCount; i < maxStars; i++) {
        stars.push(<img key={`gray-${i}`} src={grayStar} alt="star icon" />);
      }
    }

    return stars;
  };

  return (
    <Wrapper onClick={onClick} isSelected={isSelected}>
      <div className="title">{location}</div>
      <div className="scope">
        <div>{star}</div>
        <div className="stars">{renderStars(star)}</div>
        <div>({comments})</div>
      </div>
      <div className="location">{address}</div>
      <div className="categories">
        {categories.map((category, idx) => (
          <div className="category" key={idx}>
            {category}
          </div>
        ))}
      </div>
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
  .stars {
    display: flex;
    gap: 3px;
  }
  .categories {
    display: flex;
    gap: 10px;
    .category {
      min-height: 17px;
      padding: 4px 10px;
      border-radius: 10px;
      border: 1.5px solid
        ${(props) => (props.isSelected ? "#f4f8fb" : "#5175FF")};
      background-color: ${(props) =>
        props.isSelected ? "#5175FF" : "#f4f8fb"};
      color: ${(props) => (props.isSelected ? "#f4f8fb" : "#5175FF")};
      white-space: nowrap;

      font-size: 12px;
      font-weight: 600;
    }
  }
`;
