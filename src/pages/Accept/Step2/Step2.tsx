import React, { useState } from "react";
import StepInterface from "../../../interface/Step";
import Nav from "../../../components/Nav/Nav";
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

type LocationType = {
  name: string;
  address: string;
  star: number;
  comments: number;
  categories: string[];
};

export default function Step2({ data, handleBack, handleExit }: StepInterface) {
  const [popup, setPopup] = useState(false);
  //이 부분 부모로 올려서 props로 받기
  const [selectedLocations, setSelectedLocations] = useState<LocationType[]>(
    []
  );
  const navigate = useNavigate();

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = (locations: string[]) => {
    setPopup(false);
    setSelectedLocations(locations);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<LocationType[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (searchTerm.trim() === "") return;

    try {
      const response = await instance.get(
        `/locations/search?query=${searchTerm}`
      );
      if (response?.data?.locations) {
        setSearchResults(response.data.locations);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("장소 검색 중 오류 발생:", error);
      setSearchResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      {!popup ? (
        <>
          <Wrapper style={{ marginBottom: "50px" }}>
            <ProgressBar percent={66} />
            <SubTitle>만나고 싶은 장소를 알려주세요!</SubTitle>
            <Desc>친구들과 함께 정할 장소를 제안해보세요</Desc>
            <SectionHeader>
              <ImgWrapper>{renderProfileImages(data.peopleNumber)}</ImgWrapper>
            </SectionHeader>
            <Search
              placeholder={"건대입구"}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <KakaoMap
              mapHeight="33vh"
              searchKeyword={data.place}
              buttonOn={false}
              setCurrentLocationName={data.place}
            />
            {/* <Section>
              {selectedLocations.map((location, idx) => (
                <Location
                  key={idx}
                  location={location.name}
                  address={location.address}
                  star={location.star}
                  comments={location.comments}
                  categories={location.categories}
                  onClick={() => toggleLocation(location.name)}
                />
              ))}
            </Section> */}
          </Wrapper>
          <FixedButton>
            <Button onClick={() => navigate("../confirm")}>다음</Button>
          </FixedButton>
        </>
      ) : (
        <Popup
          closePopup={closePopup}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
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
