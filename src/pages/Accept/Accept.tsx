import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import Introduction from "./Introduction";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Confirm from "./Confrim";
import GetPromise from "../../apis/Promise/GetPromise";
// import Popup from "./Popup/Popup";

export default function Accept() {
  const { promiseId } = useParams();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("");
  const [peopleNum, setPeopleNum] = useState<number>(0);

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
    navigate("/");
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
