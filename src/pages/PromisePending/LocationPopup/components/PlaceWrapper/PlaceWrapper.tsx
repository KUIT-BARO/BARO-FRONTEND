import React from "react";
import { PinInterface } from "../../../../../interface/Pin/Pin";
import styled from "styled-components";
import star_white from "../../../../../assets/icons/Place/star_white.svg";
import star_blue from "../../../../../assets/icons/Place/star_blue.svg";
interface PlaceWrapperProps extends PinInterface {
  locationCart: PinInterface[];
  setLocationCart: (locations: PinInterface[]) => void;
}
function PlaceWrapper({
  placeName,
  star,
  pinCount,
  placeAddress,
  placeCategories,
  locationCart,
  setLocationCart,
}: PlaceWrapperProps) {
  const isExist = locationCart.some((place) => place.placeName === placeName);

  const handleClick = () => {
    if (isExist) {
      setLocationCart(
        locationCart.filter((place) => place.placeName !== placeName)
      );
    } else {
      setLocationCart([
        ...locationCart,
        { placeName, star, pinCount, placeAddress, placeCategories },
      ]);
    }
  };
  return (
    <PlaceComponent>
      <TopWrapper>
        <PlaceTitle>{placeName}</PlaceTitle>
        <PlaceBtn onClick={() => handleClick()}>취소</PlaceBtn>
      </TopWrapper>
      <MiddleWrapper>
        <ReviewContainer>
          <Text>{star}</Text>
          <StarsWrapper>
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                src={idx < Math.round(star) ? star_white : star_blue}
                alt={idx < Math.round(star) ? "white star" : "blue star"}
              />
            ))}
          </StarsWrapper>

          <Text>({pinCount})</Text>
        </ReviewContainer>
        <Text>{placeAddress}</Text>
      </MiddleWrapper>
      <PlaceCategories>
        {placeCategories.map((category) => (
          <Category>{category}</Category>
        ))}
      </PlaceCategories>
    </PlaceComponent>
  );
}

export default PlaceWrapper;

const PlaceComponent = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #5175ff;
  color: #f4f8fb;
  border: 1px solid #edf1ff;
`;
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PlaceTitle = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 17px;
`;

const PlaceBtn = styled.button`
  border: none;
  height: 28px;
  padding: 4px 10px;
  border-radius: 10px;
  background-color: #f4f8fb;
  color: #5175ff;
  color: #5175ff;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
`;
const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`;
const ReviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;
const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

const StarsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const Star = styled.img``;
const PlaceCategories = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;
const Category = styled.div`
  display: flex;
  height: 28px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1.5px solid #edf1ff;
  color: #fff;

  font-size: 12px;
  font-weight: 600;
  flex-wrap: nowrap;
`;
