import React, { useState } from "react";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../components/Steps/Steps.styles";
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
import TopBar from "../../../components/TopBar/TopBar";
import PostPersonalKeywords from "../../../apis/Promise/Personal/PostPersonalKeyword";
import PostPersonalPlace from "../../../apis/Promise/Personal/PostPersonalPlace";
import PostPersonalTime from "../../../apis/Promise/Personal/PostPersonalTime";

type LocationType = {
  id: number;
  placeName: string;
  latitude: number;
  longitude: number;
  address: string;
  star: number;
  comments: number;
  categories: string[];
  isSelected?: boolean;
};

export default function Step2({
  promiseId,
  places,
  setPlaces,
  data,
  handleBack,
  handleExit,
  timeTable,
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
      id: 1,
      placeName: "스타벅스 강남점",
      latitude: 37.4979,
      longitude: 127.0276,
      address: "서울특별시 강남구 강남대로 390",
      star: 4.2,
      comments: 85,
      categories: ["깔끔한", "모던한", "밝은", "시원한", "아늑한"],
    },
    {
      id: 2,
      placeName: "한강공원 반포지구",
      latitude: 37.5123,
      longitude: 126.9989,
      address: "서울특별시 강남구 압구정동 387",
      star: 4.7,
      comments: 150,
      categories: ["자연", "힙한", "밝은", "어두운", "럭셔리한"],
    },
    {
      id: 3,
      placeName: "홍대 북카페",
      latitude: 37.5565,
      longitude: 126.9237,
      address: "동교로 156-10 1층 북카페 산책 마포구 서울특별시 KR",
      star: 4.3,
      comments: 60,
      categories: ["아기자기한", "빈티지한", "따뜻한", "아늑한", "힙한"],
    },
  ];

  // 🔹 장소 선택/해제 핸들러
  const toggleSelection = (id: number) => {
    setPlaces((prev) =>
      prev.map((place) =>
        place.id === id ? { ...place, isSelected: !place.isSelected } : place
      )
    );
  };
  const handlePost = async () => {
    try {
      //  const responseKeyword = await PostPersonalKeywords(promiseId, [1, 3, 5]);
      //const responsePlace = await PostPersonalPlace(promiseId, [1, 2, 3]);
      //  const responseTime = await PostPersonalTime(promiseId, timeTable);
    } catch (error) {
      console.error("Error posting data:", error);
    }
    navigate("../confirm");
  };

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
            <Section style={{ marginBottom: "100px" }}>
              {places.length > 0 ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "17px",
                      fontWeight: "700",
                      marginBottom: "-10px",
                    }}
                  >
                    내가 고른 장소
                  </div>

                  {places.map((place) => (
                    <Location
                      key={place.id}
                      placeName={place.placeName}
                      address={place.address}
                      star={place.star}
                      comments={place.comments}
                      categories={place.categories}
                      isSelected={place.isSelected} // ✅ 선택 여부 적용
                      onClick={() => toggleSelection(place.id)}
                    />
                  ))}
                </>
              ) : (
                <Desc>선택한 장소가 없습니다.</Desc>
              )}
            </Section>
          </Wrapper>
          <FixedButton>
            <Button onClick={() => handlePost()}>다음</Button>
          </FixedButton>
        </>
      ) : (
        <Popup
          locations={locations}
          places={places}
          setPlaces={setPlaces}
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
