import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Introduction from "./Introduction";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Confirm from "./Confrim";
// import Popup from "./Popup/Popup";

export default function Accept() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("");
  const [peopleNum, setPeopleNum] = useState<number>(0);

  const [timeTable, setTimeTable] = useState<[]>([]);

  // useEffect(() => {
  //   const fetchPromiseData = async () => {
  //     try {
  //       const response = await GetPromise(promiseId);
  //       if (response?.data?.promise) {
  //         const { promiseId, name, purpose, dateStart, dateEnd, place, peopleNumber } = response.data.promise;

  //         setPromiseName(name);
  //         setPromisePurpose(purpose);
  //         setPromiseStartDate(new Date(dateStart));
  //         setPromiseEndDate(new Date(dateEnd));
  //         setPromiseLocation(place);
  //         setPromisePeopleNum(peopleNumber);
  //       }
  //     } catch (error) {
  //       console.error("약속 데이터를 불러오는 중 오류 발생:", error);
  //     }
  //   };

  //   fetchPromiseData();
  // }, [promiseId]);
  const data = {
    promiseId: 123,
    name: "친구 모임",
    purpose: "팀 프로젝트/회의",
    dateStart: new Date("2025-01-15"),
    dateEnd: new Date("2025-01-25"),
    place: "강남역 카페",
    peopleNumber: 5,
  };

  // 뒤로 가기
  const handleBack = () => {
    console.log("in");
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
              data={data}
              handleBack={handleBack}
              handleExit={handleExit}
            />
          }
        />
        <Route
          path="step1"
          element={
            <Step1
              peopleNumber={data.peopleNumber}
              handleBack={handleBack}
              handleExit={handleExit}
              dateStart={data.dateStart}
              dateEnd={data.dateEnd}
              timeTable={timeTable}
              setTimeTable={setTimeTable}
            />
          }
        />
        <Route
          path="step2"
          element={
            <Step2
              data={data}
              handleBack={handleBack}
              handleExit={handleExit}
            />
          }
        />
        <Route
          path="confirm"
          element={
            <Confirm
              data={data}
              handleBack={handleBack}
              handleExit={handleExit}
            />
          }
        />
      </Routes>
    </>
  );
}
