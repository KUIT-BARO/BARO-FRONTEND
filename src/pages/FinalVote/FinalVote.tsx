import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Step1 from "./Step1/Step1";

import Confirm from "./Confrim";
// import Popup from "./Popup/Popup";

export default function Accept() {
  const navigate = useNavigate();

  const dummyData = {
    suggestTitle: "마케팅 전략 회의",
    suggestPurpose: "새로운 제품 런칭 논의",
    suggestPeople: "3명",
    selectedLocation: "서울 강남구 삼성동",
    startDate: new Date(),
    endDate: new Date(), // ISO 8601 형식
  };
  const timeDummyDate = [
    "1월 2일 14:00 ~ 16:00",
    "1월 2일 14:00 ~ 16:00",
    "1월 2일 14:00 ~ 16:00",
  ];

  const locationDummyDate = [
    "1월 2일 14:00 ~ 16:00",
    "1월 2일 14:00 ~ 16:00",
    "1월 2일 14:00 ~ 16:00",
  ];

  // 뒤로 가기
  const handleBack = () => {
    navigate(-1);
  };

  // 홈 화면으로 이동
  const handleExit = () => {
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Step1
              navigate={navigate}
              handleBack={handleBack}
              handleExit={handleExit}
              timeDummyDate={timeDummyDate}
              locationDummyDate={locationDummyDate}
            />
          }
        />

        <Route path="confirm" element={<Confirm data={dummyData} />} />
      </Routes>
    </>
  );
}
