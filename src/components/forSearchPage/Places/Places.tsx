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
  title: string;
  subtitle?: string;
}

const Place: React.FC<PlaceProps> = ({ title, subtitle }) => {
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

      {(title === 'BEST') && <PlaceImageWrapper>
        <Place168 />
      </PlaceImageWrapper>}

      {(title === '비즈니스') && <PlaceImageWrapper>
        <Place340_Business />
      </PlaceImageWrapper>}

      {(title === '스터디') && <PlaceImageWrapper>
        <Place340_Study />
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

interface placeReviews {
  address: string;
  name: string;
  star: number;
  bookmarks: number;
}
const placeReviewBest: placeReviews[] = [
  {
    address: "건국대학교",
    name: "일감호",
    star: 5,
    bookmarks: 32,
  },{
    address: "어린이대공원",
    name: "놀이동산",
    star: 5,
    bookmarks: 12,
  },{
    address: "서울시 성동구 화양동",
    name: "느티나무 공원",
    star: 3,
    bookmarks: 48,
  },{
    address: "성수",
    name: "앨리스랩",
    star: 4,
    bookmarks: 83,
  }
]
const placeReviewBusiness: placeReviews[] = [
  {
    address: "",
    name: "바아로 재즈바",
    star: 4,
    bookmarks: 58,
  },{
    address: "",
    name: "패스트 파이브",
    star: 5,
    bookmarks: 12,
  },{
    address: "",
    name: "넥스트 데이",
    star: 3,
    bookmarks: 7,
  }
]
const placeReviewStudy: placeReviews[] = [
  {
    address: "",
    name: "투썸플레이스",
    star: 4,
    bookmarks: 58,
  },{
    address: "",
    name: "스타벅스",
    star: 5,
    bookmarks: 12,
  },{
    address: "",
    name: "커피빈",
    star: 3,
    bookmarks: 7,
  }
]

export function Place168() {
  return (
    <>
      {placeReviewBest.map((place, index) => (
        <PlaceImage key={index}>
          <img src={Place_168x168} alt="Place Image" />
          <PlaceInfo is168={true}>
            <PlaceLocation>
              <div>{place.address}</div>
              <div>{place.name}</div>
            </PlaceLocation>
            <StarRating>
              <span>{place.star}</span>
              {Stars(place.star)}
            </StarRating>
            <Bookmark>
              <img src={BookmarkIcon} alt="bookmark icon" />
              <span>({place.bookmarks})</span>
            </Bookmark>
          </PlaceInfo>
        </PlaceImage>
      ))}
    </>
  );
};
export function Place340_Business() {
  return (
    <>
      {placeReviewBusiness.map((place, index) => (
        <PlaceImage key={index}>
          <img src={Place_340x232} alt="Place Image" />
          <PlaceInfo is168={false}>
            <PlaceLocation>
              <div>{place.address}</div>
              <div>{place.name}</div>
            </PlaceLocation>
            <StarRating>
              <span>{place.star}</span>
              {Stars(place.star)}
            </StarRating>
            <Bookmark>
              <img src={BookmarkIcon} alt="bookmark icon" />
              <span>({place.bookmarks})</span>
            </Bookmark>
          </PlaceInfo>
        </PlaceImage>
      ))}
    </>
  );
};
export function Place340_Study() {
  return (
    <>
      {placeReviewStudy.map((place, index) => (
        <PlaceImage key={index}>
          <img src={Place_340x232} alt="Place Image" />
          <PlaceInfo is168={false}>
            <PlaceLocation>
              <div>{place.address}</div>
              <div>{place.name}</div>
            </PlaceLocation>
            <StarRating>
              <span>{place.star}</span>
              {Stars(place.star)}
            </StarRating>
            <Bookmark>
              <img src={BookmarkIcon} alt="bookmark icon" />
              <span>({place.bookmarks})</span>
            </Bookmark>
          </PlaceInfo>
        </PlaceImage>
      ))}
    </>
  );
};

export default function Places() {
  return (
    <PlacesWrapper>
      <Place 
        title="BEST" 
        subtitle="좋아요를 가장 많이 받은 명소"
      />
      <Place 
        title="비즈니스" 
        subtitle="회의와 업무에 딱 맞는 장소"  
      />
      <Place 
        title="스터디"
        subtitle="효율적인 공부를 위한 최적의 장소"  
      />
    </PlacesWrapper>
  );
};