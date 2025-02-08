import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Introduction from "./Introduction";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Confirm from "./Confrim";
// import Popup from "./Popup/Popup";

export default function Accept() {
  const navigate = useNavigate();
  //서버로부터 받아온 시작, 끝 날짜, timeTable
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [timeTable, setTimeTable] = useState<[]>([]);

  const dummyData = {
    suggestTitle: "마케팅 전략 회의",
    suggestPurpose: "새로운 제품 런칭 논의",
    suggestPeople: "3명",
    selectedLocation: "서울 강남구 삼성동",
    startDate: new Date(),
    endDate: new Date(), // ISO 8601 형식
  };

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
            <Introduction
              data={dummyData}
              handleBack={handleBack}
              handleExit={handleExit}
            />
          }
        />
        <Route
          path="step1"
          element={
            <Step1
              data={dummyData}
              handleBack={handleBack}
              handleExit={handleExit}
              startDate={new Date("2025-01-02")}
              endDate={new Date("2025-01-12")}
              timeTable={timeTable}
              setTimeTable={setTimeTable}
            />
          }
        />
        <Route
          path="step2"
          element={
            <Step2
              data={dummyData}
              handleBack={handleBack}
              handleExit={handleExit}
            />
          }
        />
        <Route path="confirm" element={<Confirm data={dummyData} />} />
      </Routes>
    </>
  );
}
