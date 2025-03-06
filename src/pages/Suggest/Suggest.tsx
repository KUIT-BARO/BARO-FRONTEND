import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Popup from "./Popup/Popup";

export default function Suggest() {
  const navigate = useNavigate();

  const [promiseId, setPromiseId] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [placeName, setPlaceName] = useState<string>("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [dateStart, dateEnd] = dateRange;
  const [showPopup, setShowPopup] = useState(false);

  // 홈 화면으로 이동
  const handleExit = () => {
    navigate("/main");
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
          path="step1"
          element={
            <Step1 handleExit={handleExit} name={name} setName={setName} />
          }
        />
        <Route
          path="step2"
          element={
            <Step2
              placeName={placeName}
              setPlaceName={setPlaceName}
              handleExit={handleExit}
              dateStart={dateStart}
              dateEnd={dateEnd}
              setDateRange={setDateRange}
              handleOpenPopup={handleOpenPopup}
              handleClosePopup={handleClosePopup}
            />
          }
        />
      </Routes>

      {showPopup && (
        <Popup
          setPromiseId={setPromiseId}
          handleClosePopup={handleClosePopup}
          name={name}
          placeName={placeName}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      )}
    </>
  );
}
