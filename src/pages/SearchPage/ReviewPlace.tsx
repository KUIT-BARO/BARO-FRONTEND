import React from "react";
import styled from "styled-components";

import ReviewHeader from "../../components/forSearchPage/ReviewHeader/ReviewHeader";
import ReviewDetails from "../../components/forSearchPage/ReviewDetails/ReviewDetails";
import Modal from "../../components/forSearchPage/Modal/Modal";

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

  return (
    <>
      {!isModalOpen && <>
        <ReviewWrapper>
          <ReviewHeader 
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