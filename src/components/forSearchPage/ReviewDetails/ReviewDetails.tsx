import React from "react";

import { ReviewWrapper, PlaceSetting, ReviewWrite, TextArea,
  RatingWrapper, Rating, RatingStars, Category, Categories, CategoryButton
 } from "./ReviewDetails.styled";

import { Roadview } from "react-kakao-maps-sdk";

import Location from '../../../assets/icons/location.svg';
import BlueStar from '../../../assets/icons/blueStar.svg';
import GrayStar from '../../../assets/icons/grayStar.svg';

interface ReviewDetailsProps {
  selectedPosition: { lat: number; lng: number; radius: number; };
  selectedLocation: string;
  updateisModalOpen: (isModalOpen: boolean) => void;
  onStarChange: (starCount: number) => void;
  onTextChange: (textValue: string) => void;
  onCategoryChange: (category: number[]) => void;
}

const KakaoRoadView = ({ position }: { position: { lat: number; lng: number; radius: number } }) => {
  return (
    <Roadview
      position={position}
      style={{
        width: "100%",
        height: "27vh",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    />
  );
};

export default function ReviewDetails(props: ReviewDetailsProps) {

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

  function updateisModalOpen() {
    props.updateisModalOpen(true);
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
    <>
      <ReviewWrapper>
        <PlaceSetting>
          <img src={Location} alt="location icon" />
          <div onClick={updateisModalOpen}>
            <span style={{ color: props.selectedLocation ? 'white' : 'inherit' }}>
              {props.selectedLocation || "장소의 위치를 설정해주세요"}
            </span>
          </div>
        </PlaceSetting>
        <KakaoRoadView position={position} />
        <ReviewWrite>
          <TextArea
            placeholder="장소에 관한 리뷰를 작성해주세요..." 
            maxLength={150}
            onChange={handleInput}
          />
          <div>{inputCount}/150</div>
        </ReviewWrite>
      </ReviewWrapper>
      <RatingWrapper>
        <Rating>별점을 남겨보세요</Rating>
        <RatingStars>
          {renderStars(starCount)}
        </RatingStars>
        <Category>
          카테고리로 장소를 설명해주세요
          <span>(최대5개)</span>
        </Category>
        <Categories>
          {categories.map((category, idx) => (
            <CategoryButton 
              key={idx}
              isSelected={selectedCategories.includes(category)}
              onClick={() => handleCategory(category)}
            >{category}
            </CategoryButton>
          ))}
        </Categories>
      </RatingWrapper>
    </>
  );
};