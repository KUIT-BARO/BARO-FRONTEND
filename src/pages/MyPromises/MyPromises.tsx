import React from "react";
import styled from "styled-components";

import Navigation from "../../components/Navigation/Navigation.tsx";

import Header from "../../components/forMyPromises/Header/Header.tsx";
import PromiseButton from "../../components/forMyPromises/PromiseButton/PromiseButton.tsx";

import PendingPromise from "../../components/forMyPromises/PendingPromise/PendingPromise.tsx";
import UpcomingPromise from "../../components/forMyPromises/UpcomingPromise/UpcomingPromise.tsx";
import SuggestPromise from "../../components/forMyPromises/SuggestPromise/SuggestPromise.tsx";

import PromiseConfirm from "../../components/forMyPromises/PromiseConfirm/PromiseConfirm.tsx";

import ScheduleCalendar from "../../components/forMyPromises/ScheduleCalendar/ScheduleCalendar.tsx";

import { getPromises } from "../../apis/user/getPromises.tsx";
import getPromise from "../../apis/promise/GetPromise.tsx";

export default function MyPromises() {
  const [active, setActive] = React.useState("promise");
  function handleClick(active: string) {
    setActive(active);
  }

  interface PromiseId {
    promiseId: number[];
  }
  const [pendingPromisesId] = React.useState<PromiseId>({
    promiseId: [],
  });
  interface pendingPromises {
    promises: Array<{
      promiseId: number;
      name: string;
      purpose: string;
      dateStart: string;
      dateEnd: string;
      place: string;
      peopleNumber: number;
    }>;
  }
  interface upcomingPromises {
    promises: Array<{
      promiseId: number;
      name: string;
      purpose: string;
      date: string;
      timeStart: string;
      timeEnd: string;
      place: string;
      peopleNumber: number;
    }>;
  }
  const [pendingPromises] = React.useState<pendingPromises>({
    promises: [],
  });
  const [upcomingPromises] = React.useState<upcomingPromises>({
    promises: [],
  });

  React.useEffect(() => {
    const fetchPromises = async () => {
      try {
        const response = await getPromises.checkPromises();

        if (response.status === 200 && response.data) {
          console.log(response.data.data.upcomingPromises[0]);

          for (let i = 0; i < response.data.data.pendingPromises.length; i++) {
            pendingPromisesId.promiseId.push(
              response.data.data.pendingPromises[i].promiseId
            );
          }
          if (pendingPromisesId.promiseId.length > 0) {
            try {
              for (let i = 0; i < pendingPromisesId.promiseId.length; i++) {
                const response2 = await getPromise(
                  pendingPromisesId.promiseId[i]
                );
                pendingPromises.promises.push(response2.data.data);
              }
            } catch (error) {
              console.error("대기 중인 약속 정보 조회 실패", error);
            }
          }

          for (let i = 0; i < response.data.data.upcomingPromises.length; i++) {
            upcomingPromises.promises.push(
              response.data.data.upcomingPromises[i]
            );
          }

          console.log("나의 약속 정보를 조회했습니다.");
          console.log("대기 중인 약속 정보:", pendingPromises.promises);
          console.log("예정된 약속 정보:", upcomingPromises.promises);
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
          <PromiseWrapper>
            <PendingPromise
              promise={{
                promiseId: 87,
                name: "BARO 데모데이이",
                purpose: "팀프로젝트 / 회의",
                dateStart: "2025-02-21",
                dateEnd: "2025-02-22",
                place: "성수역 주변",
                peopleNumber: 9,
                leaderName: "이지환",
              }}
            />
            {/* {pendingPromises.promises.map((item, index) => (
              <PendingPromise key={index} promise={item} />
            ))} */}

            <UpcomingPromise
              upcomingDday={{
                promiseId: 1,
                name: "쿠잇 BARO 데모데이",
                purpose: "팀프로젝트/회의",
                date: "2025-02-21",
                timeStart: "15:30:15",
                timeEnd: "16:50:15",
                place: "성수 앨리스랩",
                peopleNumber: 5,
                leaderName: "이지환",
              }}
            />
            {/* {upcomingPromises.promises.map((item, index) => (
              <UpcomingPromise key={index} upcomingDday={item} />
            ))} */}
            <SuggestPromise />
          </PromiseWrapper>
        )}
        {active === "schedule" && (
          <PromiseWrapper>
            <ScheduleCalendar />
            <UpcomingPromise
              upcomingDday={{
                promiseId: 1,
                name: "쿠잇 BARO 데모데이",
                purpose: "팀프로젝트/회의",
                date: "2025-02-21",
                timeStart: "15:30:15",
                timeEnd: "16:50:15",
                place: "성수 앨리스랩",
                peopleNumber: 5,
                leaderName: "이지환",
              }}
            />
            {/* {upcomingPromises.promises.map((item, index) => (
              <UpcomingPromise key={index} upcomingDday={item} />
            ))} */}
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
