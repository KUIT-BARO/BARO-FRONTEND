import React, { useState } from "react";
import StepInterface from "../../../interface/Step";
import Nav from "../../../components/Nav/Nav";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../assets/styles/Steps.styles";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Desc from "../../../components/Desc/Desc";

import Search from "../../../components/Search/Search";
import Popup from "./Popup/Popup";
import Location from "../../../components/Location/Location";
import KakaoMap from "../../../components/forSearchPage/KakaoMap/KakaoMap";

type LocationType = {
  name: string;
  address: string;
  star: number;
  comments: number;
  categories: string[];
};

export default function Step2({
  navigate,
  handleBack,
  handleExit,
}: StepInterface) {
  const [popup, setPopup] = useState(false);
  //이 부분 부모로 올려서 props로 받기
  const [selectedLocations, setSelectedLocations] = useState<LocationType[]>(
    []
  );

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = (locations: string[]) => {
    setPopup(false);
    setSelectedLocations(locations);
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
            <Search placeholder={"건대입구"} onClick={openPopup} />
            <KakaoMap />
            <Section>
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
            </Section>
          </Wrapper>
          <FixedButton>
            <Button onClick={() => navigate("/accept/confirm")}>다음</Button>
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
