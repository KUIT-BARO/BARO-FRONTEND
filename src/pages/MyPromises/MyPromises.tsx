import React from 'react';

import Navigation from "../../components/Navigation/Navigation.tsx";

import Header from "../../components/forMyPromises/Header/Header.tsx";
import PromiseButton from "../../components/forMyPromises/PromiseButton/PromiseButton.tsx";

import PendingPromise from "../../components/forMyPromises/PendingPromise/PendingPromise.tsx";
import UpcomingPromise from "../../components/forMyPromises/UpcomingPromise/UpcomingPromise.tsx";
import SuggestPromise from "../../components/forMyPromises/SuggestPromise/SuggestPromise.tsx";

import ScheduleCalendar from "../../components/forMyPromises/ScheduleCalendar/ScheduleCalendar.tsx";

import { getPromises } from "../../apis/user/getPromises.tsx";

export default function MyPromises () {
  const [active, setActive] = React.useState("promise");
  function handleClick(active: string) {
    setActive(active);
  };

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
        if (response.status === 200 && response.data) {
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
  }, []);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#F4F8FB", height: "100vh" }}>
        <PromiseButton updateActive={handleClick} />
        {active === "promise" && (
          <>
            <PendingPromise />
            {upcomingDday && <UpcomingPromise upcomingDday={upcomingDday} />}
            <SuggestPromise />
          </>
        )}
        {active === "schedule" && (
          <>
            <ScheduleCalendar />
            <UpcomingPromise />
          </>
        )}
      </main>
      <Navigation />
    </>
  );
};

