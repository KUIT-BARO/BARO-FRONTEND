import React, { useState } from "react";

import Nav from "../../../components/Nav/Nav";
import SubTitle from "../../../components/SubTitle/SubTitle";
import { SectionTitle } from "./Step1.styles";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../assets/styles/Steps.styles";
import Button from "../../../components/Button/Button";
import Desc from "../../../components/Desc/Desc";

export default function Step1({
  navigate,
  handleBack,
  handleExit,
  timeDummyDate,
  locationDummyDate,
}) {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <SubTitle>최종 투표를 진행해주세요</SubTitle>
        <Desc>최적의 약속 시간과 장소입니다</Desc>

        {/* 약속 시간 선택 */}
        <Section>
          <SectionTitle>약속 시간을 정해주세요</SectionTitle>
          {timeDummyDate.map((time, index) => (
            <Button
              key={index}
              color={selectedTimeIndex === index ? "Blue" : "White"}
              onClick={() => setSelectedTimeIndex(index)}
            >
              {time}
            </Button>
          ))}
        </Section>

        {/* 약속 장소 선택 */}
        <Section style={{ marginBottom: "100px" }}>
          <SectionTitle>약속 장소를 정해주세요</SectionTitle>
          {locationDummyDate.map((location, index) => (
            <Button
              key={index}
              color={selectedLocationIndex === index ? "Blue" : "White"}
              onClick={() => setSelectedLocationIndex(index)}
            >
              {location}
            </Button>
          ))}
        </Section>

        {/* 다음 버튼 */}
        <FixedButton>
          <Button onClick={() => navigate("/finalvote/confirm")}>다음</Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}
