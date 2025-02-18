import React, { useState } from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import Nav from "../../../components/Nav/Nav";
import Popup from "./Popup/Popup";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../assets/styles/Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Desc from "../../../components/Desc/Desc";
import styled from "styled-components";
import Search from "../../../components/Search/Search";

export default function Step3({
  placeName,
  setPlaceNames,
  handleBack,
  handleExit,
  onOpenPopup,
}: StepInterface & { onOpenPopup: () => void }) {
  const [popup, setPopup] = useState(false);

  const dummyaddress = [
    {
      placeId: 1,
      placeName: "스타벅스 건대입구점",
      address: "서울 광진구 화양동 5-47",
      status: "ACTIVE",
    },
    {
      placeId: 2,
      placeName: "투썸플레이스 강남역점",
      address: "서울 강남구 역삼동 123-45",
      status: "ACTIVE",
    },
    {
      placeId: 3,
      placeName: "이디야 커피 홍대점",
      address: "서울 마포구 서교동 789-10",
      status: "SUSPENDED",
    },
    {
      placeId: 4,
      placeName: "메가커피 신촌점",
      address: "서울 서대문구 창천동 11-22",
      status: "ACTIVE",
    },
    {
      placeId: 5,
      placeName: "할리스커피 강남시티점",
      address: "서울 강남구 테헤란로 456",
      status: "SUSPENDED",
    },
  ];

  return popup ? (
    <Popup
      onOpenPopup={onOpenPopup}
      setPopup={setPopup}
      address={address}
      setAddress={setAddress}
    />
  ) : (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <ProgressBar percent={75} />

        <SubTitle>어디서 만나실건가요?</SubTitle>
        <Desc>약속 장소의 대략적인 위치를 설정해주세요</Desc>
        <Section>
          <Search placeholder={"건대입구"} />

          <LocationWrapper>
            {dummyaddress.map((address) => (
              <Location
                key={address.placeId}
                onClick={() => {
                  setPlaceName(address.placeName);
                  setPopup(true);
                }}
              >
                <div className="bold">{address.placeName}</div>
                <div>{address.address}</div>
              </Location>
            ))}
          </LocationWrapper>
        </Section>
      </Wrapper>
    </>
  );
}
const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Location = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  cursor: pointer;
  font-size: 14px;
  color: #979797;
  padding: 20px 0;
  border: 1px solid #eeeeee;
  border-left: 0;
  border-right: 0;
  .bold {
    font-size: 17px;
    font-weight: 600;
    color: black;
  }
  box-sizing: border-box;
`;
