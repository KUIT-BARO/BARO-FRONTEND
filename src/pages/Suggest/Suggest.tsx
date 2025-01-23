import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Introduction from "./Introduction";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Popup from "./Popup/Popup";
import Confirm from "./Confirm";
import Step4 from "./Step4/Step4";

export default function Suggest() {
  const navigate = useNavigate();

  // ✅ 모든 상태를 Suggest 컴포넌트에서 관리
  const [suggestTitle, setSuggestTitle] = useState("");
  const [suggestPurpose, setSuggestPurpose] = useState<string[]>([]);
  const [suggestPeople, setSuggestPeople] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [showPopup, setShowPopup] = useState(false);

  // 뒤로 가기
  const handleBack = () => {
    navigate(-1);
  };

  // 홈 화면으로 이동
  const handleExit = () => {
    navigate("/");
  };

  // 팝업 열기
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  // 팝업 닫기
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Introduction
              navigate={navigate}
              handleBack={handleBack}
              handleExit={handleExit}
            />
          }
        />
        <Route
          path="step1"
          element={
            <Step1
              handleBack={handleBack}
              handleExit={handleExit}
              navigate={navigate}
              suggestTitle={suggestTitle}
              setSuggestTitle={setSuggestTitle}
              suggestPurpose={suggestPurpose}
              setSuggestPurpose={setSuggestPurpose}
              suggestPeople={suggestPeople}
              setSuggestPeople={setSuggestPeople}
            />
          }
        />
        <Route
          path="step2"
          element={
            <Step2
              handleBack={handleBack}
              handleExit={handleExit}
              navigate={navigate}
              dateRange={dateRange}
              setDateRange={setDateRange}
              startDate={startDate}
              endDate={endDate}
            />
          }
        />
        <Route
          path="step3"
          element={
            <Step3
              handleBack={handleBack}
              handleExit={handleExit}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              navigate={navigate}
              onOpenPopup={handleOpenPopup}
            />
          }
        />

        <Route
          path="confirm"
          element={
            <Confirm
              navigate={navigate}
              handleBack={handleBack}
              handleExit={handleExit}
              suggestTitle={suggestTitle}
              suggestPurpose={suggestPurpose}
              suggestPeople={suggestPeople}
              selectedLocation={selectedLocation}
              startDate={startDate}
              endDate={endDate}
            />
          }
        />
        <Route
          path="step4"
          element={
            <Step4
              handleBack={handleBack}
              handleExit={handleExit}
              navigate={navigate}
            />
          }
        />
      </Routes>

      {showPopup && (
        <Popup
          navigate={navigate}
          onClose={handleClosePopup}
          suggestTitle={suggestTitle}
          suggestPurpose={suggestPurpose}
          suggestPeople={suggestPeople}
          selectedLocation={selectedLocation}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    </>
  );
}
