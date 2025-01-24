import React from "react";

import { ReviewWrapper, PlaceSetting, ReviewWrite, TextArea,
  RatingWrapper, Rating, RatingStars, Star, Category, Categories, CategoryButton
 } from "./ReviewDetails.styled";

import { Roadview } from "react-kakao-maps-sdk";

import Location from '../../../assets/icons/location.svg'

const KakaoRoadView = () => {
  return (
    <Roadview
      position={{
        lat: 33.450701,
        lng: 126.570667,
        radius: 50,
      }}
      style={{
        width: "100%",
        height: "228px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    />
  );
};

export default function ReviewDetails(props) {

  const [inputCount, setInputCount] = React.useState(0);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCount(e.target.value.length);
  };

  function updateisModalOpen() {
    props.updateisModalOpen(true);
  };

  return (
    <>
      <ReviewWrapper>
        <PlaceSetting>
          <img src={Location} alt="location icon" />
          <div onClick={updateisModalOpen}>장소의 위치를 설정해주세요</div>
        </PlaceSetting>
        <KakaoRoadView />
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
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </RatingStars>
        <Category>
          카테고리로 장소를 설명해주세요
          <span>(최대5개)</span>
        </Category>
        <Categories>
          <CategoryButton>비즈니스</CategoryButton>
          <CategoryButton>스터디</CategoryButton>
          <CategoryButton>여가 생활</CategoryButton>
          <CategoryButton>커플</CategoryButton>
          <CategoryButton>아늑한</CategoryButton>
          <CategoryButton>북적이는</CategoryButton>
          <CategoryButton>독특한</CategoryButton>
          <CategoryButton>전통적인</CategoryButton>
          <CategoryButton>반려동물</CategoryButton>
          <CategoryButton>실버</CategoryButton>
          <CategoryButton>키즈존</CategoryButton>
        </Categories>
      </RatingWrapper>
    </>
  );
};