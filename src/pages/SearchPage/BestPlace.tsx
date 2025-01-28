import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PlaceReview from "../../components/forSearchPage/PlaceReview/PlaceReview";
import Navigation from "../../components/forMyPromises/Layout/Navigation/Navigation";

import BackIcon from '../../assets/icons/backIcon.svg';

export default function BestPlace() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/search');
  };

  const Locations = [
    {
      bookmark: true,
      name: '스타벅스 건대입구점',
      address: '서울 광진구 화양동 5-47',
      star: 2,
      comments: 12,
      comment: [
        '분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요. 창가자리에서 햇빛을 받으며 커피를 마시는 것이 너무 좋았어요.',
        // '분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요~~. 창가자리에서 햇빛을 받으며 커피를 마시는 것이 너무 좋았어요.',
      ],
      categories: ['아기자기한', '아늑한', '귀여운'],
    },
    {
      bookmark: false,
      name: '탐앤탐스 건대입구점',
      address: '서울 광진구 화양동 5-47',
      star: 5,
      comments: 120,
      comment: [
        '절대 가지마',
        '안녕하세요',
      ],
      categories: ['아기자기한', '아늑한', '귀여운'],
    },
    {
      bookmark: false,
      name: '스타벅스 홍대입구점',
      address: '서울 마포구 화양동 5-47',
      star: 4.0,
      comments: 22,
      comment: [
        '분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요. 창가자리에서 햇빛을 받으며 커피를 마시는 것이 너무 좋았어요.',
        '분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요. 창가자리에서 햇빛을 받으며 커피를 마시는 것이 너무 좋았어요.',
        '분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요. 창가자리에서 햇빛을 받으며 커피를 마시는 것이 너무 좋았어요.',
      ],
      categories: ['아기자기한', '아늑한', '귀여운'],
    },
  ];

  return (
    <Wrapper>
      <Header>
        <img src={BackIcon} alt="" onClick={handleBack} />
        <HeaderTitle>취향저격 베스트 장소</HeaderTitle>
        <HeaderDesc>설정한 위치에서 리뷰를 가장 많이 받은 장소입니다</HeaderDesc>
      </Header>
      <Contents>
        {Locations.map((location, index) => (
          <PlaceReview
            key={index}
            bookmark={location.bookmark}
            name={location.name}
            address={location.address}
            star={location.star}
            comments={location.comments}
            comment={location.comment}
            categories={location.categories}
          />
        ))}
      </Contents>
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #F4F8FB;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 63px 24px 0 24px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const HeaderTitle = styled.div`
  margin-top: 33px;
  font-family: Pretendard;
  font-size: 25px;
  color: #000000;
`;

const HeaderDesc = styled.div`
  margin-top: 12px;
  margin-bottom: 33px;
  font-family: Pretendard;
  font-size: 17px;
  color: #979797;
`;

const Contents = styled.div`
  padding-bottom: 10vh;
`;