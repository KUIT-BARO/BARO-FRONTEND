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
} from "./LocationPopup.styles";

import { ProfileImgType } from "../../../interface/ProfileImg/ProfileImg";
import PinPopup from "./components/PinPopup/Pinpopup";
import search from "../../../assets/icons/Buttons/search.svg";
import MAN from "../../../assets/icons/Profileimg/Man.svg";
import GIRL from "../../../assets/icons/Profileimg/Girl.svg";
import DOG from "../../../assets/icons/Profileimg/DOG.svg";
import DEFAULT from "../../../assets/icons/Profileimg/Default.svg";
import LocationInterface from "../../../interface/Location/Location";
import { PlaceInterface } from "../../../interface/Place/Place";
import PlaceWrapper from "./components/PlaceWrapper/PlaceWrapper";
import { SectionTitle } from "./components/PinPopup/PinPopup.styles";
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
  const dummyData: {
    suggestedRegion: string;
    places: LocationInterface[];
    members: {
      userId: number;
      profileImage: ProfileImgType;
    }[];
  } = {
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
        profileImage: "DOG",
      },
    ],
  };
  const [isPinPopup, setIsPinPopup] = useState<boolean>(false);
  const dummyPlacesDesc = [
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
  ];
  const [locationCart, setLocationCart] =
    useState<PlaceInterface[]>(dummyPlacesDesc);

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
      <TopBar handleExit={() => setLocationPopup(false)} color={"Blue"} />
      <Wrapper>
        <Question
          title="만나고 싶은 장소를 알려주세요"
          desc="친구들과 함께 정할 장소를 제안해보세요"
          color="Blue"
        />

        <SectionHeader>
          <ImgWrapper>
            {renderProfileImages({
              members: dummyData.members,
            })}
          </ImgWrapper>
        </SectionHeader>
        <SearchBar onClick={() => setIsPinPopup(true)}>
          <SearchImg src={search} />
          <SearchInput placeholder={dummyData.suggestedRegion} />
        </SearchBar>
        <Section></Section>
        <Section>
          <SectionTitle>내가 고른 장소</SectionTitle>
          <PlacesWrapper>
            {locationCart.map((place) => {
              const {
                placeName,
                star,
                pinCount,
                placeAddress,
                placeCategories,
              } = place;
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
      </Wrapper>
    </>
  );
}

type Member = { userId: number; profileImage: ProfileImgType };
type RenderProfileImagesProps = {
  members: Member[];
};

const renderProfileImages = ({ members }: RenderProfileImagesProps) => {
  const profileImgs: Record<ProfileImgType, string> = {
    DOG,
    GIRL,
    MAN,
    DEFAULT,
  };

  return (
    <>
      {members.map((member) => (
        <UserImg
          key={member.userId}
          src={profileImgs[member.profileImage]}
          alt="profile img"
        />
      ))}
    </>
  );
};
