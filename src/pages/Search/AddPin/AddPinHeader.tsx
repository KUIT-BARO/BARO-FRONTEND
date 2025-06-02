import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postPin } from "../../../apis/places/postPin";

import BackIcon from '../../../assets/icons/Search/backIcon_white.svg';

interface ReviewHeaderProps {
  placeId: number;
  placeName: string;
  starCount: number;
  textValue: string;
  categories: number[];
  placeAddress: string;
  latitude: number;
  longitude: number;
}

export default function AddPinHeader (props: ReviewHeaderProps) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/search');
  };

  // console.log('placeId :', props.placeId);
  // console.log('score :', props.starCount);
  // console.log('note :', props.textValue);
  // console.log('keywordIds :', props.categories);

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
      // postPin API 호출
      const response = await postPin({
        placeId: props.placeId,
        placeName: props.placeName,
        placeAddress: props.placeAddress,
        latitude: props.latitude,
        longitude: props.longitude,
        review: props.textValue,
        score: props.starCount,
        categoruIds: props.categories,
      });

      if (response && response.success) {
        alert('핀 등록에 성공했습니다.');
        console.log('핀 등록 성공:', response);
        navigate('/search');
      } else {
        alert('핀 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('핀 등록 오류:', error);
      alert('핀 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <Layout>
      <img 
        src={BackIcon} 
        alt="Back Icon"
        onClick={handleBack}  
      />
      <div className="header-title">
        핀 추가
      </div>
      <div className="add-pin" onClick={handleReview}>
        등록
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  padding: 17px 20px 32px 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--bg-bluewhite, #F4F8FB);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 26.6px */
  letter-spacing: -0.475px;

  img {
    cursor: pointer;
  }

  .header-title {
    margin-left: 10px;
  }

  .add-pin {
    cursor: pointer;
  }
`;