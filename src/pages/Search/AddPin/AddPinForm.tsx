import React from "react";

import { Roadview } from "react-kakao-maps-sdk";

import { 
  Layout, 
  Review, LocationSetting, ReviewWrite, 
  Rating, Category, CategoryButton
} from "./AddPinForm.styles.tsx";

import Location from '../../../assets/icons/Search/location_white.svg';
import BlueStar from '../../../assets/icons/Search/blueStar.svg';
import GrayStar from '../../../assets/icons/Search/grayStar.svg';

import { PIN_CATEGORIES } from '../../../utils/constant/Categories.tsx';

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
      props.onCategoryChange(newCategories.map(c => PIN_CATEGORIES.indexOf(c)));
    } else {
      if (selectedCategories.length < 5) {
        const newCategories = [...selectedCategories, category];
        setSelectedCategories(newCategories);
        const sortedIndices = newCategories.map(c => PIN_CATEGORIES.indexOf(c)).sort((a, b) => a - b);
        props.onCategoryChange(sortedIndices);
      }
    }
  };

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
          {PIN_CATEGORIES.map((category, idx) => (
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