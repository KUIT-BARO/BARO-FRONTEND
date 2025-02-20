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
  const dummyaddress = [
    {
      id: 1,
      placeName: "스타벅스 강남점",
      latitude: 37.4979,
      longitude: 127.0276,
      address: "서울특별시 강남구 강남대로 390",
    },
    {
      id: 2,
      placeName: "한강공원 반포지구",
      latitude: 37.5123,
      longitude: 126.9989,
      address: "서울특별시 강남구 압구정동 387",
    },
    {
      id: 3,
      placeName: "홍대 북카페",
      latitude: 37.5565,
      longitude: 126.9237,
      address: "동교로 156-10 1층 북카페 산책, 마포구 서울특별시 KR",
    },
  ];
  const navigate = useNavigate();
  const [promiseId, setPromiseId] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [purpose, setPurpose] = useState<string | null>(null);
  const [peopleNum, setPeopleNum] = useState<number>(0);
  const [placeId, setPlaceId] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [dateStart, dateEnd] = dateRange;
  const [showPopup, setShowPopup] = useState(false);
  const [codeList, setCodeList] = useState<[string]>([]);

  const placeIndex = placeId ? Number(placeId) - 1 : 0; // 숫자로 변환하고, 유효하지 않은 경우 -1 설정
  const selectedPlaceName =
    placeIndex >= 0 && placeIndex < dummyaddress.length
      ? dummyaddress[placeIndex].placeName
      : "장소 미정";

  // 뒤로 가기
  const handleBack = () => {
    navigate(-1);
  };

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
              dummyaddress={dummyaddress}
              handleBack={handleBack}
              handleExit={handleExit}
              setPlaceId={setPlaceId}
              onOpenPopup={handleOpenPopup}
            />
          }
        />

        <Route
          path="confirm"
          element={
            <Confirm
              promiseId={promiseId}
              handleBack={handleBack}
              handleExit={handleExit}
              name={name}
              purpose={purpose}
              peopleNum={peopleNum}
              placeName={selectedPlaceName}
              dateStart={dateStart}
              dateEnd={dateEnd}
            />
          }
        />
        <Route
          path="step4"
          element={
            <Step4
              codeList={codeList}
              setCodeList={setCodeList}
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
          placeId={placeId}
          placeName={selectedPlaceName}
          dateStart={dateStart}
          dateEnd={dateEnd}
          promiseId={promiseId}
          codeList={codeList}
        />
      )}
    </>
  );
}
