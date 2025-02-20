import React from "react";
import { useNavigate } from "react-router-dom";

import { HeaderWrapper, BackToPlaces, HeaderTitle, AddReview } from "./ReviewHeader.styles";

import { postReview } from "../../../apis/Place/postReview";

import BackIcon from '../../../assets/icons/backIcon.svg'

interface ReviewHeaderProps {
  placeId: number;
  placeName: string;
  starCount: number;
  textValue: string;
  categories: number[];
}

export default function ReviewHeader (props: ReviewHeaderProps) {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/search');
  };

  console.log('placeId :', props.placeId);
  console.log('score :', props.starCount);
  console.log('note :', props.textValue);
  console.log('keywordIds :', props.categories);
  const handleReview = async () => {
    if (props.placeName === '') {
      alert('리뷰를 작성할 장소를 선택해주세요.');
      return;
    }
    if (props.textValue === '') {
      alert('리뷰 내용을 입력해주세요.');
      return;
    }
    if (props.starCount === 0) {
      alert('별점을 선택해주세요.');
      return;
    }
    if (props.categories.length === 0) {
      alert('카테고리를 선택해주세요.');
      return;
    }

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