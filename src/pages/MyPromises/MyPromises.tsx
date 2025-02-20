import React from "react";
import styled from "styled-components";

import Navigation from "../../components/Navigation/Navigation.tsx";

import Header from "../../components/forMyPromises/Header/Header.tsx";
import PromiseButton from "../../components/forMyPromises/PromiseButton/PromiseButton.tsx";

import PendingPromise from "../../components/forMyPromises/PendingPromise/PendingPromise.tsx";
import UpcomingPromise from "../../components/forMyPromises/UpcomingPromise/UpcomingPromise.tsx";
import SuggestPromise from "../../components/forMyPromises/SuggestPromise/SuggestPromise.tsx";

import ScheduleCalendar from "../../components/forMyPromises/ScheduleCalendar/ScheduleCalendar.tsx";

import { getPromises } from "../../apis/user/getPromises.tsx";
import getPromiseConfirm from "../../apis/promise/Confirm/GetPromiseConfirm.tsx";

export default function MyPromises() {
  const [active, setActive] = React.useState("promise");
  function handleClick(active: string) {
    setActive(active);
  }

  const [upcomingDday, setUpcomingDday] = React.useState({
    promiseId: 0,
    name: "",
    purpose: "",
    date: "",
    timeStart: "",
    timeEnd: "",
    place: "",
    peopleNumber: 0,
  });
  const [upcomingPromise, setUpcomingPromise] = React.useState([
    {
      promiseId: 0,
      name: "",
      purpose: "",
      date: "",
      timeStart: "",
      timeEnd: "",
      place: "",
      peopleNumber: 0,
    },
  ]);
  React.useEffect(() => {
    const fetchPromises = async () => {
      try {
        const response = await getPromises.checkPromises();
        console.log(response);

        if (response.status === 200 && response.data) {
          console.log(response.data);

          setUpcomingDday({
            promiseId: response.data.upcomingDday.promiseId,
            name: response.data.upcomingDday.name,
            purpose: response.data.upcomingDday.purpose,
            date: response.data.upcomingDday.date,
            timeStart: response.data.upcomingDday.timeStart,
            timeEnd: response.data.upcomingDday.timeEnd,
            place: response.data.upcomingDday.place,
            peopleNumber: response.data.upcomingDday.peopleNumber,
          });
          setUpcomingPromise(
            response.data.upcomingPromise.map((promise) => ({
              promiseId: promise.promiseId,
              name: promise.name,
              purpose: promise.purpose,
              date: promise.date,
              timeStart: promise.timeStart,
              timeEnd: promise.timeEnd,
              place: promise.place,
              peopleNumber: promise.peopleNumber,
            }))
          );
          console.log("나의 약속 정보를 조회했습니다.");
        }
      } catch (error) {
        console.error("나의 약속 정보 조회 실패", error);
      }
    };
    fetchPromises();

    const fetchPromiseConfirm = async () => {
      try {
        const response = await getPromiseConfirm(upcomingDday.promiseId);
        if (response.status === 200 && response.data) {
          console.log(response.data);

          const confirmedPromise = response.data.promiseConfirmDto || {};

          const formattedPromise = {
            promiseId: confirmedPromise.promiseId || 0,
            name: confirmedPromise.name || "약속 이름 없음",
            purpose: confirmedPromise.purpose || "목적 없음",
            date: confirmedPromise.date ? confirmedPromise.date : "날짜 미정",
            placeName: confirmedPromise.placeName || "장소 미정",
            peopleNum: confirmedPromise.peopleNum || 0,
          };

          console.log("확정된 약속 정보:", formattedPromise);
        }
      } catch (error) {
        console.error("나의 약속 확인 정보 조회 실패", error);
      }
    };
    fetchPromiseConfirm();
  }, []);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#F4F8FB", height: "100vh" }}>
        <PromiseButton updateActive={handleClick} />
        {active === "promise" && (
          <PromiseWrapper>
            <PendingPromise />
            {/* {upcomingDday && <UpcomingPromise upcomingDday={upcomingDday} />} */}
            {upcomingPromise.map((promise) => (
              <UpcomingPromise key={promise.promiseId} upcomingDday={promise} />
            ))}
            <SuggestPromise />
          </PromiseWrapper>
        )}
        {active === "schedule" && (
          <PromiseWrapper>
            <ScheduleCalendar />
            {/* <UpcomingPromise /> */}
            {upcomingPromise.map((promise) => (
              <UpcomingPromise key={promise.promiseId} upcomingDday={promise} />
            ))}
          </PromiseWrapper>
        )}
      </main>
      <Navigation />
    </>
  );
}

export const PromiseWrapper = styled.div`
  padding-top: 7.5rem;
  padding-bottom: 5rem;
  background-color: #f4f8fb;
`;
