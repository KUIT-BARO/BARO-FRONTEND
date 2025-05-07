import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar/TopBar";
import Question from "../../../components/Question/Question";
import {
  SectionHeader,
  Wrapper,
  Section,
  ImgWrapper,
  UserImg,
  SearchBar,
  SearchImg,
  SearchInput,
  PlacesWrapper,
  ErrorMessage,
} from "./LocationPopup.styles";
import PinPopup from "./components/PinPopup/Pinpopup";
import PlaceWrapper from "./components/PlaceWrapper/PlaceWrapper";
import { SectionTitle } from "./components/PinPopup/PinPopup.styles";

import search from "../../../assets/icons/Buttons/search.svg";
import profileImgs from "../../../utils/profileImgs";

import { ProfileImgType } from "../../../interface/ProfileImg/ProfileImg";
import { PinInterface } from "../../../interface/Pin/Pin";
import LocationInterface from "../../../interface/Place/Place";

interface LocationPopupInterface {
  setLocationPopup: (exit: boolean) => void;
  location: LocationInterface;
  setLocation: React.Dispatch<React.SetStateAction<LocationInterface>>;
}

export default function LocationPopup({
  setLocationPopup,
  location,
  setLocation,
}: LocationPopupInterface) {
  const [isPinPopup, setIsPinPopup] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  const [locationCart, setLocationCart] = useState<PinInterface[]>([
    // dummy
    {
      placeName: "서울상상나라",
      star: 3.0,
      pinCount: 12,
      placeAddress: "서울 광진구 화양동 5-47",
      placeCategories: ["키즈존", "북적이는"],
    },
    {
      placeName: "뚝섬유원지",
      star: 4.5,
      pinCount: 25,
      placeAddress: "서울 성동구 뚝섬로 273",
      placeCategories: ["자연", "강변", "산책"],
    },
    {
      placeName: "어린이대공원",
      star: 4.2,
      pinCount: 33,
      placeAddress: "서울 광진구 능동로 216",
      placeCategories: ["키즈존", "자연", "동물원"],
    },
  ]);

  const dummyData = {
    suggestedRegion: "건대입구",
    places: [
      {
        placeId: 1,
        latitude: 37.5423265,
        longitude: 127.0759204,
      },
    ],
    members: [
      {
        userId: 1,
        profileImage: "DOG" as ProfileImgType,
      },
    ],
  };

  useEffect(() => {
    if (errorMessage) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setErrorMessage(null), 500);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleExit = () => {
    if (locationCart.length !== 1) {
      setErrorMessage(
        locationCart.length === 0
          ? "장소를 선택해주세요."
          : "장소를 하나만 선택해주세요."
      );
      return;
    }
    setLocationPopup(false);
  };

  return isPinPopup ? (
    <PinPopup
      locationCart={locationCart}
      setLocationCart={setLocationCart}
      suggestedRegion={dummyData.suggestedRegion}
      places={dummyData.places}
      setIsPinPopup={setIsPinPopup}
    />
  ) : (
    <>
      <TopBar handleExit={handleExit} color="Blue" />
      {errorMessage && (
        <ErrorMessage visible={visible}>{errorMessage}</ErrorMessage>
      )}

      <Wrapper>
        <Question
          title="만나고 싶은 장소를 알려주세요"
          desc="친구들과 함께 정할 장소를 제안해보세요"
          color="Blue"
        />

        <SectionHeader>
          <ImgWrapper>
            {dummyData.members.map(({ userId, profileImage }) => (
              <UserImg
                key={userId}
                src={profileImgs[profileImage]}
                alt="profile img"
              />
            ))}
          </ImgWrapper>
        </SectionHeader>

        <SearchBar onClick={() => setIsPinPopup(true)}>
          <SearchImg src={search} />
          <SearchInput placeholder={dummyData.suggestedRegion} />
        </SearchBar>

        <Section>
          <SectionTitle>내가 고른 장소</SectionTitle>
          <PlacesWrapper>
            {locationCart.map((place) => (
              <PlaceWrapper
                key={place.placeName}
                {...place}
                locationCart={locationCart}
                setLocationCart={setLocationCart}
              />
            ))}
          </PlacesWrapper>
        </Section>
      </Wrapper>
    </>
  );
}
