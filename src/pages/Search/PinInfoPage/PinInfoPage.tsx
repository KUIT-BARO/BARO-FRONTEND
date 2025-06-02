import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

import { getPins } from "../../../apis/places/getPins";

import BackButton from "../../../assets/icons/Buttons/back.svg";

// 기본 프로필 이미지 추가

interface Pin {
  pinId: number;
  username: string;
  placeName: string;
  placeAddress: string;
  pinCategories: string[] | string;
  // 평점 정보 추가
  rating?: number;
}

// 별점 렌더링 함수
const renderStars = (rating: number) => {
  const stars = [];
  const maxStars = 5;
  
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      // 채워진 별
      stars.push(<StarFilled key={i} />);
    } else {
      // 빈 별
      stars.push(<StarEmpty key={i} />);
    }
  }
  
  return <StarContainer>{stars}</StarContainer>;
};

export default function PinInfoPage() {
  const { placeId } = useParams<{ placeId: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const placeName = queryParams.get('placeName');

  const [pins, setPins] = useState<Pin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("장소 ID:", placeId);
    console.log("장소 이름:", placeName);
    
    const fetchPins = async () => {
      if (!placeId) return;

      setIsLoading(true);
      setError(null);

      try {
        const result = await getPins({ placeId: parseInt(placeId) });
        
        if (result && result.data) {
          // 각 핀에 임시 평점 추가 (API에서 제공하지 않는 경우)
          const pinsWithRating = result.data.map(pin => ({
            ...pin,
            rating: 3.0 // 기본값 설정 (실제 API에서 제공하는 경우 이 부분은 필요 없음)
          }));
          setPins(pinsWithRating);
        }
      } catch (error) {
        console.error("핀 정보를 불러오는 중 오류가 발생했습니다:", error);
        setError("핀 정보를 불러올 수 없습니다. 다시 시도해주세요.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPins();
  }, [placeId]);

  if (isLoading) {
    return <LoadingContainer>핀 정보를 불러오는 중...</LoadingContainer>;
  }

  if (error) {
    return <ErrorContainer>{error}</ErrorContainer>;
  }

  if (pins.length === 0) {
    return <ErrorContainer>이 장소에 등록된 핀이 없습니다.</ErrorContainer>;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => window.history.back()}>
          &lt;
        </BackButton>
        <Title>{placeName || pins[0]?.placeName || "장소 정보"}</Title>
        <div></div>
      </Header>

      <PinListSection>
        {pins.map((pin) => (
          <PinCard key={pin.pinId}>
            <PinUserInfo>
              <ProfileImage src="" alt={pin.username} />
              <UserName>{pin.username}</UserName>
            </PinUserInfo>
            
            <RatingSection>
              <RatingValue>{pin.rating?.toFixed(1) || "0.0"}</RatingValue>
              {renderStars(pin.rating || 0)}
            </RatingSection>
            
            <PlaceAddress>{pin.placeAddress}</PlaceAddress>
            
            <CategoryContainer>
              {Array.isArray(pin.pinCategories) 
                ? pin.pinCategories.map((category, index) => (
                    <CategoryTag key={index}>{category.trim()}</CategoryTag>
                  ))
                : typeof pin.pinCategories === 'string'
                  ? pin.pinCategories.split(',').map((category, index) => (
                      <CategoryTag key={index}>{category.trim()}</CategoryTag>
                    ))
                  : null
              }
            </CategoryContainer>
          </PinCard>
        ))}
      </PinListSection>
    </Container>
  );
}

// 스타일 컴포넌트
const Container = styled.div`
  background-color: #F4F8FB;
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  align-items: center;
  position: relative;
  padding: 36px 48px 24px 24px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const PinListSection = styled.div`
  margin-bottom: 32px;
`;

const PinCard = styled.div`
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
`;

const PinUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RatingValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 8px;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 채워진 별 아이콘
const StarFilled = styled.span`
  color: #4169e1;
  font-size: 20px;
  margin-right: 2px;
  
  &::before {
    content: '★';
  }
`;

// 빈 별 아이콘
const StarEmpty = styled.span`
  color: #d9d9d9;
  font-size: 20px;
  margin-right: 2px;
  
  &::before {
    content: '★';
  }
`;

const PlaceAddress = styled.p`
  font-size: 14px;
  color: #666;
  margin: 8px 0 16px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CategoryTag = styled.span`
  background: #4169e1;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
`;

// 로딩/에러 컴포넌트
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 18px;
  color: #555;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 18px;
  color: #ff3b30;
  text-align: center;
  padding: 0 20px;
`;