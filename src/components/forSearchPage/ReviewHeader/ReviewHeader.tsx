import React from "react";
import { useNavigate } from "react-router-dom";

import { HeaderWrapper, BackToPlaces, HeaderTitle, AddReview } from "./ReviewHeader.styles";

import { postReview } from "../../../apis/Place/postReview";

import BackIcon from '../../../assets/icons/backIcon.svg'

interface ReviewHeaderProps {
  placeId: number;
  starCount: number;
  textValue: string;
  categories: number[];
}

export default function ReviewHeader (props: ReviewHeaderProps) {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/search');
  };

  console.log('score :', props.starCount);
  console.log('note :', props.textValue);
  console.log('keywordIds :', props.categories);
  const handleReview = async () => {
    try {
      const response = await postReview({
        placeId: props.placeId,
        score: props.starCount,
        note: props.textValue,
        keywordIds: props.categories,
      });
      if (response.status === 200) {
        alert('리뷰 등록에 성공했습니다.');
        console.log('리뷰 등록 성공:', response);
        navigate('/search');
      }
    } catch (error) {
      console.error('리뷰 등록 오류:', error);
    }
  };

  return (
    <HeaderWrapper>
      <BackToPlaces onClick={handleBack}>
        <img src={BackIcon} alt="Back Icon" />
      </BackToPlaces>
      <HeaderTitle>
        리뷰 작성
      </HeaderTitle>
      <AddReview onClick={handleReview}>
        등록
      </AddReview>
    </HeaderWrapper>
  );
};