import React, { useEffect } from "react";
import styled from "styled-components";

import Header from "./AddPinHeader";
import Form from "./AddPinForm";
import SetLocation from "./AddPinLocation";

// import { getUserPlace } from '../../apis/promise/getUserPlace';

export default function AddPin() {

  const [isLocationOpen, setIsLocationOpen] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [selectedPosition, setSelectedPosition] = React.useState({
    lat: 33.450701,
    lng: 126.570667,
    radius: 50
  });

  function handleClick(isLocationOpen: boolean) {
    setIsLocationOpen(isLocationOpen);    
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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // const response = await getUserPlace();
        // for (let i=0 ; i<response.data.data.userPlaceDto.length ; i++) {
        //   userPlaceDto.reviews.push({
        //     response.data.data.userPlaceDto[i],
        //   });
        // }
        // setCountReviews(response.data.data.userPlaceDto.length);
      } catch (error) {
        console.error("리뷰 데이터 불러오기 실패:", error);
      }
    }
    fetchReviews();
  }, []);

  return (
    <>
      {isLocationOpen ?
        <SetLocation 
          updateIsLocationOpen={handleClick}
          setSelectedLocation={setSelectedLocation}
          setSelectedPosition={setSelectedPosition}
        />
      :
        <Layout>
          <Header
            placeId={0}
            placeName={selectedLocation}
            starCount={starCount} 
            textValue={textValue}
            categories={category}
          />
          <Form 
            updateIsLocationOpen={handleClick} 
            selectedLocation={selectedLocation}
            selectedPosition={selectedPosition}
            onStarChange={handleStarChange}
            onTextChange={handleTextChange}
            onCategoryChange={handleCategoryChange}
          />
        </Layout>
      }
    </>
  );
};

const Layout = styled.div`
  background: linear-gradient(180deg, #5175FF 0%, #CFDAE6 100%);
`;