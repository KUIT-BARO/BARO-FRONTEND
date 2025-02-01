// src/components/layout/Layout.tsx
import React from "react";
import Header from "./Header/Header.tsx";
import Navigation from "../../Navigation/Navigation.tsx";

import PromiseButton from "../PromiseButton/PromiseButton.tsx";

import ConfirmPromise from "../ConfirmPromise/ConfirmPromise.tsx";
import UpcomingPromise from "../UpcomingPromise/UpcomingPromise.tsx";
import SuggestPromise from "../SuggestPromise/SuggestPromise.tsx";

import ScheduleCalendar from "../ScheduleCalendar/ScheduleCalendar.tsx";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showNavigation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showNavigation = true,
}) => {
  const [active, setActive] = React.useState("promise");
  function handleClick(active: string) {
    setActive(active);
  }

  return (
    <>
      {showHeader && <Header />}
      {children && (
        <main style={{ backgroundColor: "#F4F8FB", height: "100vh" }}>
          <PromiseButton updateActive={handleClick} />
          {active === "promise" && (
            <>
              <ConfirmPromise />
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
