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
  const [promiseId, setPromiseId] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [purpose, setPurpose] = useState<string | null>(null);
  const [peopleNum, setPeopleNum] = useState<number>(0);
  const [address, setAddress] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [dateStart, dateEnd] = dateRange;
  const [showPopup, setShowPopup] = useState(false);
  const [selectFriends, setSelectFriends] = useState(false);
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
            <Introduction handleBack={handleBack} handleExit={handleExit} />
          }
        />
        <Route
          path="step1"
          element={
            <Step1
              handleBack={handleBack}
              handleExit={handleExit}
              name={name}
              setName={setName}
              purpose={purpose}
              setPurpose={setPurpose}
              peopleNum={peopleNum}
              setPeopleNum={setPeopleNum}
            />
          }
        />
        <Route
          path="step2"
          element={
            <Step2
              handleBack={handleBack}
              handleExit={handleExit}
              dateRange={dateRange}
              setDateRange={setDateRange}
              dateStart={dateStart}
              dateEnd={dateEnd}
            />
          }
        />
        <Route
          path="step3"
          element={
            <Step3
              handleBack={handleBack}
              handleExit={handleExit}
              address={address}
              setAddress={setAddress}
              onOpenPopup={handleOpenPopup}
            />
          }
        />

        <Route
          path="confirm"
          element={
            <Confirm
              promiseId={promiseId}
              selectFriends={selectFriends}
              handleBack={handleBack}
              handleExit={handleExit}
              name={name}
              purpose={purpose}
              peopleNum={peopleNum}
              address={address}
              dateStart={dateStart}
              dateEnd={dateEnd}
            />
          }
        />
        <Route
          path="step4"
          element={
            <Step4
              setSelectFriends={setSelectFriends}
              handleBack={handleBack}
              handleExit={handleExit}
            />
          }
        />
      </Routes>

      {showPopup && (
        <Popup
          setPromiseId={setPromiseId}
          onClose={handleClosePopup}
          name={name}
          purpose={purpose}
          peopleNum={peopleNum}
          address={address}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      )}
    </>
  );
}
