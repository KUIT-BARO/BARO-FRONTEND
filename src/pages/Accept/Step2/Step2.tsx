import React, { useState } from "react";
import {
  Wrapper,
  FixedButton,
  Section,
  ImgWrapper,
} from "../../../assets/styles/Steps.styles";

import styled from "styled-components";
import profileImg_1 from "../../../assets/icons/profileImg_1.svg";
import profileImg_2 from "../../../assets/icons/profileImg_2.svg";
import profileImg_3 from "../../../assets/icons/profileImg_3.svg";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Desc from "../../../components/Desc/Desc";
import Search from "../../../components/Search/Search";
import Popup from "./Popup/Popup";
import Location from "../../../components/Location/Location";
import KakaoMap from "../../../components/forSearchPage/KakaoMap/KakaoMap";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/Nav/Nav";

type LocationType = {
  placeId: number;
  name: string;
  address: string;
  star: number;
  comments: number;
  categories: string[];
};

export default function Step2({
  data,
  placeId,
  setPlaceId,
  handleBack,
  handleExit,
}: StepInterface) {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  // 🔹 실제 장소 데이터
  const locations: LocationType[] = [
    {
      placeId: 1,
      name: "스타벅스 건대입구점",
      address: "서울 광진구 화양동 5-47",
      star: 2,
      comments: 12,
      categories: ["아기자기한", "아늑한", "귀여운"],
    },
    {
      placeId: 2,
      name: "스타벅스 건대역점",
      address: "서울 광진구 화양동 5-47",
      star: 5,
      comments: 12,
      categories: ["아기자기한", "아늑한", "귀여운"],
    },
    {
      placeId: 3,
      name: "투썸플레이스 강남역점",
      address: "서울 강남구 역삼동 5-47",
      star: 5,
      comments: 20,
      categories: ["모던한", "깔끔한", "조용한"],
    },
  ];

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      {!popup ? (
        <>
          <Wrapper>
            <ProgressBar percent={66} />
            <SubTitle>만나고 싶은 장소를 알려주세요!</SubTitle>
            <Desc>친구들과 함께 정할 장소를 제안해보세요</Desc>
            <SectionHeader>
              <ImgWrapper>{renderProfileImages(data.peopleNumber)}</ImgWrapper>
            </SectionHeader>
            <Search placeholder={"건대입구"} onClick={openPopup} />
            <KakaoMap
              mapHeight="46vh"
              searchKeyword={data.place}
              buttonOn={false}
              setCurrentLocationName={data.place}
              staticMap={true}
            />
            <Section>
              {placeId.length > 0 ? (
                <>
                  <SubTitle>내가 고른 장소</SubTitle>

                  {placeId.map((id) => {
                    const selectedLocation = locations.find(
                      (loc) => loc.placeId === id
                    );
                    return selectedLocation ? (
                      <Location
                        key={selectedLocation.placeId}
                        location={selectedLocation.name}
                        address={selectedLocation.address}
                        star={selectedLocation.star}
                        comments={selectedLocation.comments}
                        categories={selectedLocation.categories}
                        onClick={() =>
                          setPlaceId((prev) =>
                            prev.filter(
                              (pid) => pid !== selectedLocation.placeId
                            )
                          )
                        }
                      />
                    ) : null;
                  })}
                </>
              ) : (
                <Desc>선택한 장소가 없습니다.</Desc>
              )}
            </Section>
          </Wrapper>
          <FixedButton>
            <Button onClick={() => navigate("../confirm")}>다음</Button>
          </FixedButton>
        </>
      ) : (
        <Popup
          locations={locations}
          placeId={placeId}
          setPlaceId={setPlaceId}
          closePopup={closePopup}
        />
      )}
    </>
  );
}

const renderProfileImages = (peopleNumber: number | undefined) => {
  const profileImages = [profileImg_1, profileImg_2, profileImg_3];
  if (peopleNumber == 0) {
    peopleNumber = 1;
  }
  if (peopleNumber <= 3) {
    return profileImages
      .slice(0, peopleNumber)
      .map((img, index) => <img key={index} src={img} alt="profile img" />);
  } else {
    return (
      <ImgWrapper>
        {profileImages.map((img, index) => (
          <img key={index} src={img} alt="profile img" />
        ))}
        <div className="plus">+{peopleNumber - 3}</div>
      </ImgWrapper>
    );
  }
};
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
