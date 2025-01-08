import React from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import Nav from "../../../components/Nav/Nav";

import { Wrapper, FixedButton, Section } from "../Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Desc from "../../../components/Desc/Desc";
import styled from "styled-components";
import Search from "../../../components/Search/Search";
export default function Step3({
  navigate,
  onOpenPopup,
  selectedLocation,
  setSelectedLocation,
  handleBack,
  handleExit,
}: StepInterface & { onOpenPopup: () => void }) {
  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };
  const isLocationSelected = selectedLocation !== null;

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <ProgressBar percent={75} />

        <SubTitle>어디서 만나실건가요?</SubTitle>
        <Desc>약속 장소의 대략적인 위치를 설정해주세요</Desc>
        <Section>
          <Search placeholder={"건대입구"} />

          <ButtonWrapper>
            {[
              "신촌역",
              "건대입구역",
              "홍대입구",
              "혜화역",
              "강남역",
              "잠실역",
            ].map((location) => (
              <Location
                key={location}
                className={selectedLocation === location ? "active" : ""}
                onClick={() => handleLocationClick(location)}
              >
                {location}
              </Location>
            ))}
          </ButtonWrapper>
        </Section>
        <FixedButton>
          <Button disabled={!isLocationSelected} onClick={onOpenPopup}>
            다음
          </Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* ✅ 줄바꿈 적용 */
  gap: 16px; /* ✅ 버튼 간격 설정 */
`;
const Location = styled.button`
  flex: 1 1 calc(50% - 8px);
  padding: 16px;
  border-radius: 30px;
  border: none;
  background-color: white;
  color: black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;

  :focus {
    outline: none;
  }

  &.active {
    background-color: #5175ff;
    color: white;
  }
`;
