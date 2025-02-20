import React from "react";
import { useNavigate } from 'react-router-dom';

import { PlacesWrapper, PlaceWrapper, PlaceTitleWrapper, 
  Subtitle, PlaceImageWrapper, PlaceImage, 
  PlaceInfo, PlaceLocation, StarRating, Bookmark } from "./Places.styles";

// import GoToPlace from '../../../assets/icons/backIcon.svg';
import BlueStar from '../../../assets/icons/star_filled.svg';
import GrayStar from '../../../assets/icons/star_empty.svg';
import BookmarkIcon from '../../../assets/icons/세이브_gray.svg';

import Place_168x168 from '../../../assets/icons/장소_임시_168x168.svg';
import Place_340x232 from '../../../assets/icons/장소_임시_340x232.svg';

interface PlaceProps {
  isBest: boolean;
  title: string;
  subtitle?: string;
}

const Place: React.FC<PlaceProps> = ({ isBest, title, subtitle }) => {
  const navigate = useNavigate();

  return (
    <PlaceWrapper>
      <PlaceTitleWrapper>
        <span className="title">{title}</span>
        <button>
          {/* {isBest && <img src={GoToPlace} alt="" onClick={() => navigate('/search/bestplace')} />} */}
          {/* {!isBest && <img src={GoToPlace} alt="" />} */}
        </button>
        <Subtitle>
          {subtitle}
        </Subtitle>
      </PlaceTitleWrapper>

      {isBest && <PlaceImageWrapper>
        <Place168 />
        <Place168 />
        <Place168 />
        <Place168 />
      </PlaceImageWrapper>}

      {!isBest && <PlaceImageWrapper>
        <Place340 />
        <Place340 />
        <Place340 />
        <Place340 />
      </PlaceImageWrapper>}
    </PlaceWrapper>
  );
};

const Stars = (starCount: number) => {
  const stars: JSX.Element[] = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(<img key={`blue-${i}`} src={BlueStar} alt="star icon" />);
  }
  for (let i = starCount; i < 5; i++) {
    stars.push(<img key={`gray-${i}`} src={GrayStar} alt="star icon" />);
  }
  return stars;
};

export function Place168() {
  return (
    <PlaceImage>
      <img src={Place_168x168} alt="Place Image" />
      <PlaceInfo is168={true}>
        <PlaceLocation>
          <div>화양동</div>
          <div>느티나무 공원</div>
        </PlaceLocation>
        <StarRating>
          <span>3</span>
          {Stars(3)}
        </StarRating>
        <Bookmark>
          <img src={BookmarkIcon} alt="bookmark icon" />
          <span>(32)</span>
        </Bookmark>
      </PlaceInfo>
    </PlaceImage>
  );
};

export function Place340() {
  return (
    <PlaceImage>
      <img src={Place_340x232} alt="Place Image" />
      <PlaceInfo is168={false}>
        <PlaceLocation>
          <div>화양동</div>
          <div>느티나무 공원</div>
        </PlaceLocation>
        <StarRating>
          <span>3</span>
          {Stars(3)}
        </StarRating>
        <Bookmark>
          <img src={BookmarkIcon} alt="bookmark icon" />
          <span>(32)</span>
        </Bookmark>
      </PlaceInfo>
    </PlaceImage>
  );
};

export default function Places() {
  return (
    <PlacesWrapper>
      <Place 
        isBest={true} 
        title="BEST" 
        subtitle="좋아요를 가장 많이 받은 명소"
      />
      <Place 
        isBest={false} 
        title="비즈니스" 
        subtitle="회의와 업무에 딱 맞는 장소"  
      />
      <Place 
        isBest={false} 
        title="스터디"
        subtitle="효율적인 공부를 위한 최적의 장소"  
      />
    </PlacesWrapper>
  );
};