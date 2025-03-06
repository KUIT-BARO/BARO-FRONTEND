import React, { useState } from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import TopBar from "../../../components/TopBar/TopBar";
import Popup from "./Popup/Popup";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../components/Steps/Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Desc from "../../../components/Desc/Desc";
import styled from "styled-components";
import Search from "../../../components/Search/Search";

export default function Step3({
  dummyaddress,
  setPlaceId,
  handleBack,
  handleExit,
  onOpenPopup,
}: StepInterface & { onOpenPopup: () => void }) {
  const [popup, setPopup] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  return popup ? (
    <Popup
      onOpenPopup={onOpenPopup}
      setPopup={setPopup}
      address={dummyaddress.find((item) => item.id === selectedPlaceId) || null}
    />
  ) : (
    <>
      <TopBar handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <ProgressBar percent={75} />

        <SubTitle>어디서 만나실건가요?</SubTitle>
        <Desc>약속 장소의 대략적인 위치를 설정해주세요</Desc>
        <Section>
          <LocationWrapper>
            {dummyaddress.map((address) => (
              <Location
                key={address.placeId}
                onClick={() => {
                  setSelectedPlaceId(address.id);
                  setPlaceId(address.id);
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
