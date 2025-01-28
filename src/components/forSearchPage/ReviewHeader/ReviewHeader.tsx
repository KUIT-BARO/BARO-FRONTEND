import React from "react";

import { HeaderWrapper, BackToPlaces, HeaderTitle, AddReview } from "./ReviewHeader.styles";

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
      <HeaderTitle>
        리뷰 작성
      </HeaderTitle>
      <AddReview>
        등록
      </AddReview>
    </HeaderWrapper>
  );
};