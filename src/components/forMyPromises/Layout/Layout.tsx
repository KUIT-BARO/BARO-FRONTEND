// src/components/layout/Layout.tsx
import React from "react";
import Header from "./Header/Header.tsx";
import Navigation from "../../Navigation/Navigation.tsx";

import PromiseButton from "../PromiseButton/PromiseButton.tsx";

import PendingPromise from "../PendingPromise/PendingPromise.tsx";
import UpcomingPromise from "../UpcomingPromise/UpcomingPromise.tsx";
import SuggestPromise from "../SuggestPromise/SuggestPromise.tsx";

import ScheduleCalendar from "../ScheduleCalendar/ScheduleCalendar.tsx";

import CheckPromise from "../../../apis/Promise/GetPromise.tsx";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showNavigation?: boolean;
}

interface PendingParams {
  promiseId: string;
  name: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  place: string;
  status: string;
}

interface UpcomingParams {
  promiseId: string;
  name: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  place: string;
}

const handleCheckingPromises = async () => {
  console.log("나의 약속 정보를 조회합니다.");

  try {
    const response = await CheckPromise.checkPromises();
    if (response.status === 200) {
      console.log("나의 약속 정보를 조회했습니다.");
    }
  } catch (error) {
    console.error(error);
  }
};

const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showNavigation = true,
}) => {
  const [active, setActive] = React.useState("promise");
  function handleClick(active: string) {
    setActive(active);
  }

  React.useEffect(() => {
    handleCheckingPromises();
  }, []);

  return (
    <>
      {showHeader && <Header />}
      {children && (
        <main style={{ backgroundColor: "#F4F8FB", height: "100vh" }}>
          <PromiseButton updateActive={handleClick} />
          {active === "promise" && (
            <>
              <PendingPromise />
              <UpcomingPromise />
              <SuggestPromise />
            </>
          )}
          {active === "schedule" && (
            <>
              <ScheduleCalendar />
            </>
          )}
        </main>
      )}
      {showNavigation && <Navigation />}
    </>
  );
};

export default Layout;
