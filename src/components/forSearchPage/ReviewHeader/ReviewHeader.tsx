import React from "react";

import { HeaderWrapper, BackToPlaces, AddReview } from "./ReviewHeader.styles";

import BackIcon from '../../../assets/icons/backIcon.svg'
import { useNavigate } from "react-router-dom";

export default function ReviewHeader () {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/search');
  };

  return (
    <HeaderWrapper>
      <BackToPlaces onClick={handleBack}>
        <img src={BackIcon} alt="Back Icon" />
      </BackToPlaces>
      <div>
        리뷰 작성
      </div>
      <AddReview>
        등록
      </AddReview>
    </HeaderWrapper>
  );
};