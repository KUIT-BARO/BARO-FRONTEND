// ✅ 리팩토링된 Suggest.tsx
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Popup from "./Popup/Popup";
import usePromiseSuggest from "../../hook/usePromiseSuggest/usePromiseSuggest";

export default function Suggest() {
  const navigate = useNavigate();
  const {
    promiseId,
    setPromiseId,
    name,
    setName,
    placeName,
    setPlaceName,
    dateRange,
    setDateRange,
    showPopup,
    handleOpenPopup,
    handleClosePopup,
  } = usePromiseSuggest();

  const [dateStart, dateEnd] = dateRange;

  const handleExit = () => navigate("/main");

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
