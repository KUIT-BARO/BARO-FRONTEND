import React from "react";
import styled from "styled-components";

import { Roadview } from "react-kakao-maps-sdk";

import Location from '../../../assets/icons/locationWhite.svg';
import BlueStar from '../../../assets/icons/blueStar.svg';
import GrayStar from '../../../assets/icons/grayStar.svg';

interface ReviewDetailsProps {
  selectedPosition: { lat: number; lng: number; radius: number; };
  selectedLocation: string;
  updateIsLocationOpen: (isLocationOpen: boolean) => void;
  onStarChange: (starCount: number) => void;
  onTextChange: (textValue: string) => void;
  onCategoryChange: (category: number[]) => void;
}

const KakaoRoadView = ({ position }: { position: { 
    lat: number; 
    lng: number; 
    radius: number 
} }) => {
  return (
    <Roadview
      position={position}
      style={{
        width: "100%",
        height: "27vh",
        borderRadius: "10px",
      }}
    />
  );
};

export default function AddPinForm(props: ReviewDetailsProps) {

  const [position, setPosition] = React.useState<{ 
    lat: number; 
    lng: number 
    radius: number;
  }>(props.selectedPosition);

  React.useEffect(() => {
    setPosition(props.selectedPosition);
    console.log('position:', position);
    
  }, [props.selectedPosition]);

  const [inputCount, setInputCount] = React.useState(0);
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    props.onTextChange(e.target.value);
  };

  function updateIsLocationOpen() {
    props.updateIsLocationOpen(true);
  };

  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const handleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      const newCategories = selectedCategories.filter((c) => c !== category);
      setSelectedCategories(newCategories);
      props.onCategoryChange(newCategories.map(c => categories.indexOf(c)));
    } else {
      if (selectedCategories.length < 5) {
        const newCategories = [...selectedCategories, category];
        setSelectedCategories(newCategories);
        const sortedIndices = newCategories.map(c => categories.indexOf(c)).sort((a, b) => a - b);
        props.onCategoryChange(sortedIndices);
      }
    }
  };
  const categories: string[] = [
    '비즈니스', '스터디', '여가 생활', '커플', 
    '아늑한', '북적이는', '독특한', '전통적인', 
    '반려동물', '실버', '키즈존'
  ];

  const [starCount, setStarCount] = React.useState(0);
  const handleStar = (count: number) => {
    setStarCount(count);
    props.onStarChange(count);
  };
  const renderStars = (starCount: number) => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(
        <img 
          key={`blue-${i}`} 
          src={BlueStar} 
          alt="star icon" 
          onClick={() => handleStar(i + 1)}
        />
      );
    }
    for (let i = starCount; i < 5; i++) {
      stars.push(
        <img 
          key={`gray-${i}`} 
          src={GrayStar} 
          alt="star icon" 
          onClick={() => handleStar(i + 1)}
        />
      );
    }
    return stars;
  };

  return (
    <Layout>
      <Review>
        <LocationSetting>
          <img src={Location} alt="location icon" />
          <div onClick={updateIsLocationOpen}>
            <span style={{ color: props.selectedLocation ? 'white' : 'inherit' }}>
              {props.selectedLocation || "장소의 위치를 설정해주세요"}
            </span>
          </div>
        </LocationSetting>
        <KakaoRoadView position={position} />
        <ReviewWrite>
          <textarea
            placeholder="장소에 관한 리뷰를 작성해주세요..." 
            maxLength={150}
            onChange={handleInput}
          />
          <div>{inputCount}/150</div>
        </ReviewWrite>
      </Review>

      <Rating>
        <div className="desc">별점을 남겨보세요</div>
        <div className="rating-stars">
          {renderStars(starCount)}
        </div>
        <div className="desc">
          카테고리로 장소를 설명해주세요
          <span>(최대5개)</span>
        </div>
        <Category>
          {categories.map((category, idx) => (
            <CategoryButton 
              key={idx}
              isSelected={selectedCategories.includes(category)}
              onClick={() => handleCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </Category>
      </Rating>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 80vh;
`;

const Review = styled.div`
  margin: 0 20px;
`;

const LocationSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;

  div {
    margin-top: 2px;
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
  }

  
`;

const ReviewWrite = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 6px 17px 6px;

  div {
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

  textarea {
    background: none;
    border: none;
    width: 100%;
    height: 78px;
    margin-top: 16px;
    resize: none;
    outline: none;
    
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
  }
`;

const Rating = styled.div`
  padding: 20px 20px 0 20px;
  background-color: #EDF1FF;
  height: 42vh;
  min-height: 42vh;

  color: #5175FF;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
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
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.35px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  gap: 4px;
`;

const CategoryButton = styled.button<{ isSelected: boolean }>`
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