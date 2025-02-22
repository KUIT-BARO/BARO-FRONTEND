import React, { useState } from "react";

import formatDate from "../../../utils/formatDate";
import TopBar from "../../../components/TopBar/TopBar";
import SubTitle from "../../../components/SubTitle/SubTitle";
import { SectionTitle } from "./Step2.styles";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../assets/styles/Steps.styles";
import Button from "../../../components/Button/Button";
import Desc from "../../../components/Desc/Desc";

export default function Step2({
  navigate,
  handleBack,
  handleExit,
  timeDummyDate,
  locationDummyDate,
  selectedTimeIndex,
  selectedLocationIndex,
}) {
  return (
    <>
      <TopBar handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <SubTitle>최종 투표가 완료되었습니다</SubTitle>
        <Desc>곧 결과가 발표됩니다.</Desc>

        {/* 약속 시간 선택 */}
        <Section>
          <SectionTitle>약속 시간을 정해주세요</SectionTitle>
          {timeDummyDate.map((time, index) => (
            <Button
              key={time.promisePersonalTimeId} // ID를 key로 사용
              color={selectedTimeIndex === index ? "Gray" : "White"}
              onClick={() => {}}
              disabled={true}
            >
              {`${formatDate(time.date)} ${time.timeStart} ~ ${time.timeEnd}`}
            </Button>
          ))}
        </Section>

        {/* 약속 장소 선택 */}
        <Section style={{ marginBottom: "100px" }}>
          <SectionTitle>약속 장소를 정해주세요</SectionTitle>
          {locationDummyDate.map((location, index) => (
            <Button
              key={location.placeId} // ID를 key로 사용
              color={selectedLocationIndex === index ? "Gray" : "White"}
              disabled={true}
              onClick={() => {}}
            >
              {location.placeName}
            </Button>
          ))}
        </Section>

        {/* 다음 버튼 */}
        <FixedButton>
          <Button onClick={() => navigate(-1)}>수정하기</Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}
