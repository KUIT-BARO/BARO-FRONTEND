import React, { useState } from "react";
import { SearchBar, SearchImg, SearchInput } from "../../LocationPopup.styles";
import search from "../../../../../assets/icons/Buttons/search.svg";
import {
  PIN_CATEGORIES,
  PIN_category,
} from "../../../../../utils/constant/Categories";
import TopBar from "../../../../../components/TopBar/TopBar";
import {
  Category,
  PinPopupWrapper,
  Section,
  SectionTitle,
  CategoriesWrapper,
} from "./PinPopup.styles";
import { PlacesWrapper } from "../../LocationPopup.styles";
import { PlaceInterface } from "../../../../interface/Place/Place";
import PlaceWrapper from "../PlaceWrapper/PlaceWrapper";
import { PinInterface } from "../../../../../interface/Pin/Pin";
interface PinPopupInterface {
  locationCart: PinInterface[];
  setLocationCart: (locations: PinInterface[]) => void;
  suggestedRegion: string;
  places: PlaceInterface[];
  setIsPinPopup: (state: boolean) => void;
}

function PinPopup({
  locationCart,
  setLocationCart,
  suggestedRegion,
  places,
  setIsPinPopup,
}: PinPopupInterface) {
  const [selectedCategories, setSelectedCategories] = useState<PIN_category[]>(
    []
  );

  const handleCategories = (e) => {
    const text = e.currentTarget.innerText as PIN_category;

    setSelectedCategories((prev) =>
      prev.includes(text)
        ? prev.filter((category) => category !== text)
        : [...prev, text]
    );
  };
  return (
    <PinPopupWrapper>
      <TopBar handleExit={() => setIsPinPopup(false)} color={"Blue"} />
      <SearchBar>
        <SearchImg src={search} />
        <SearchInput placeholder={suggestedRegion} />
      </SearchBar>
      <Section>
        <SectionTitle>카테고리</SectionTitle>
        <CategoriesWrapper>
          {PIN_CATEGORIES.map((category) => (
            <Category
              key={category}
              selected={selectedCategories.includes(category)}
              onClick={handleCategories}
            >
              {category}
            </Category>
          ))}
        </CategoriesWrapper>
      </Section>
      <Section></Section>
      <Section>
        <SectionTitle>내가 고른 장소</SectionTitle>
        <PlacesWrapper>
          {locationCart.map((place) => {
            const { placeName, star, pinCount, placeAddress, placeCategories } =
              place;
            return (
              <PlaceWrapper
                placeName={placeName}
                star={star}
                pinCount={pinCount}
                placeAddress={placeAddress}
                placeCategories={placeCategories}
                locationCart={locationCart}
                setLocationCart={setLocationCart}
              />
            );
          })}
        </PlacesWrapper>
      </Section>
    </PinPopupWrapper>
  );
}

export default PinPopup;
