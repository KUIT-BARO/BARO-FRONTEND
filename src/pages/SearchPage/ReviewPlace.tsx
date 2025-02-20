import React, { useEffect } from "react";
import styled from "styled-components";

import ReviewHeader from "../../components/forSearchPage/ReviewHeader/ReviewHeader";
import ReviewDetails from "../../components/forSearchPage/ReviewDetails/ReviewDetails";
import Modal from "../../components/forSearchPage/Modal/Modal";

import { getUserPlace } from '../../apis/promise/getUserPlace';

export default function ReviewPlace() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [selectedPosition, setSelectedPosition] = React.useState({
    lat: 33.450701,
    lng: 126.570667,
    radius: 50
  });

  function handleClick(isModalOpen: boolean) {
    setIsModalOpen(isModalOpen);    
  };

  const [starCount, setStarCount] = React.useState<number>(0);
  const handleStarChange = (starCount: number) => {
    setStarCount(starCount);
  };
  const [textValue, setTextValue] = React.useState<string>('');
  const handleTextChange = (textValue: string) => {
    setTextValue(textValue);
  };
  const [category, setCategory] = React.useState<number[]>([]);
  const handleCategoryChange = (category: number[]) => {
    setCategory(category);
  };

  // interface userPlaceReview {
  //   placeId: number;
  //   address: string;
  //   placeName: string;
  // }
  // interface userPlaceDto { 
  //   reviews: userPlaceReview[]; 
  // }
  // const [userPlaceDto] = React.useState<userPlaceDto>({ 
  //   reviews: [] 
  // });
  const [countReviews, setCountReviews] = React.useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getUserPlace();
        // for (let i=0 ; i<response.data.data.userPlaceDto.length ; i++) {
        //   userPlaceDto.reviews.push({
        //     response.data.data.userPlaceDto[i],
        //   });
        // }
        setCountReviews(response.data.data.userPlaceDto.length);
      } catch (error) {
        console.error("리뷰 데이터 불러오기 실패:", error);
      }
    }
    fetchReviews();
  }, []);

  return (
    <>
      {!isModalOpen && <>
        <ReviewWrapper>
          <ReviewHeader
            placeId={countReviews+1}
            placeName={selectedLocation}
            starCount={starCount} 
            textValue={textValue}
            categories={category}
          />
          <ReviewDetails 
            updateisModalOpen={handleClick} 
            selectedLocation={selectedLocation}
            selectedPosition={selectedPosition}
            onStarChange={handleStarChange}
            onTextChange={handleTextChange}
            onCategoryChange={handleCategoryChange}
          />
        </ReviewWrapper>
      </>}
      {isModalOpen && 
        <Modal 
          updateisModalOpen={handleClick}
          setSelectedLocation={setSelectedLocation}
          setSelectedPosition={setSelectedPosition}
        />
      }
    </>
  );
};

const ReviewWrapper = styled.div`
  background: linear-gradient(180deg, #5175FF 0%, #CFDAE6 100%);
`;