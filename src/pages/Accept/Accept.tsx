import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import Introduction from "./Introduction";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Confirm from "./Confrim";
import GetPromise from "../../apis/promise/GetPromise";
// import Popup from "./Popup/Popup";
type LocationType = {
  id: number;
  placeName: string;
  latitude: number;
  longitude: number;
  address: string;
  star: number;
  comments: number;
  categories: string[];
};
export default function Accept() {
  const { promiseId } = useParams();

  const navigate = useNavigate();
  const [placeId, setPlaceId] = useState<[]>([]);
  const [places, setPlaces] = useState<LocationType>([]);

  const [timeTable, setTimeTable] = useState<[]>([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (promiseId) {
      fetchPromiseData(Number(promiseId));
    }
  }, [promiseId]);

  const fetchPromiseData = async (id: number) => {
    try {
      const response = await GetPromise(id);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("약속 데이터를 불러오는 중 오류 발생:", error);
    }
  };

  // 뒤로 가기
  const handleBack = () => {
    console.log("in");
    navigate(-1);
  };

  // 홈 화면으로 이동
  const handleExit = () => {
    navigate("/main");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            data ? (
              <Introduction
                data={data}
                handleBack={handleBack}
                handleExit={handleExit}
              />
            ) : (
              <div>로딩 중...</div> // ✅ 이제 항상 <Route> 내부에서 반환됨
            )
          }
        />

        <Route
          path="step1"
          element={
            data ? (
              <Step1
                peopleNumber={data.peopleNumber}
                handleBack={handleBack}
                handleExit={handleExit}
                dateStart={data.dateStart}
                dateEnd={data.dateEnd}
                timeTable={timeTable}
                setTimeTable={setTimeTable}
              />
            ) : (
              <div>로딩중</div>
            )
          }
        />
        <Route
          path="step2"
          element={
            data ? (
              <Step2
                promiseId={promiseId}
                places={places}
                setPlaces={setPlaces}
                data={data}
                handleBack={handleBack}
                handleExit={handleExit}
                timeTable={timeTable}
              />
            ) : (
              <div>로딩중</div>
            )
          }
        />
        <Route
          path="confirm"
          element={
            data ? (
              <Confirm
                data={data}
                handleBack={handleBack}
                handleExit={handleExit}
              />
            ) : (
              <div>로딩중</div>
            )
          }
        />
      </Routes>
    </>
  );
}
