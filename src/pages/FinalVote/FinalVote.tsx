import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";

import Confirm from "./Confrim";
// import Popup from "./Popup/Popup";

import GetPromiseVote from "../../apis/promise/Vote/GetPromiseVote";

export default function Accept(placeId: number) {
  const navigate = useNavigate();

  interface promisePersonalTimeDto {
    promisePersonalTimeId: number;
    date: string;
    timeStart: string;
    timeEnd: string;
  }
  const [promisePersonalTimeDtoList] = useState<promisePersonalTimeDto[]>([]);
  interface placeDto {
    promisePersonalPlaceId: number;
    placeName: string;
  }
  const [placeDtoList] = useState<placeDto[]>([]);

  React.useEffect(() => {
    const fetchVote = async () => {
      try {
        const response = await GetPromiseVote(placeId);
        console.log(response);
        if (response) {
          for (let i = 0; i < response.data.data.promisePersonalTimeDtoList.length; i++) {
            promisePersonalTimeDtoList.push(response.data.data.promisePersonalTimeDtoList[i]);
          }
          for (let i = 0; i < response.data.data.placeDtoList.length; i++) {
            placeDtoList.push(response.data.data.placeDtoList[i]);
          }
        }
      } catch (error) {
        console.error("약속 정보 불러오기 실패:", error);
      }
    }
    fetchVote
  }, []);

  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);

  const dummyData = {
    suggestTitle: "마케팅 전략 회의",
    suggestPurpose: "새로운 제품 런칭 논의",
    suggestPeople: "3명",
    selectedLocation: "서울 강남구 삼성동",
    startDate: new Date(),
    endDate: new Date(), // ISO 8601 형식
  };
  const timeDummyDate = [
    {
      promisePersonalTimeId: 1,
      date: "2025-02-06",
      timeStart: "14:00",
      timeEnd: "16:00",
      status: "SUSPENDED",
    },
    {
      promisePersonalTimeId: 2,
      date: "2025-02-07",
      timeStart: "13:00",
      timeEnd: "15:00",
      status: "SUSPENDED",
    },
  ];

  const locationDummyDate = [
    {
      placeId: 1,
      placeName: "스타벅스 강남점",
      status: "SUSPENDED",
    },
    {
      placeId: 2,
      placeName: "투썸플레이스 서초점",
      status: "SUSPENDED",
    },
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
              selectedTimeIndex={selectedTimeIndex}
              setSelectedTimeIndex={setSelectedTimeIndex}
              selectedLocationIndex={selectedLocationIndex}
              setSelectedLocationIndex={setSelectedLocationIndex}
            />
          }
        />
        <Route
          path="/step2"
          element={
            <Step2
              navigate={navigate}
              handleBack={handleBack}
              handleExit={handleExit}
              timeDummyDate={timeDummyDate}
              locationDummyDate={locationDummyDate}
              selectedTimeIndex={selectedTimeIndex}
              selectedLocationIndex={selectedLocationIndex}
            />
          }
        />

        <Route path="confirm" element={<Confirm data={dummyData} />} />
      </Routes>
    </>
  );
}
