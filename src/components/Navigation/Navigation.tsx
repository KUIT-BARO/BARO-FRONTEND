import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

import home from "../../assets/icons/Buttons/home.svg";
import homeActive from "../../assets/icons/Buttons/homeBlack.svg";
import search from "../../assets/icons/Buttons/search.svg";
import searchActive from "../../assets/icons/Buttons/searchBlack.svg";
import 약속잡기 from "../../assets/icons/Buttons/약속잡기.svg";
import timer from "../../assets/icons/Buttons/timer.svg";
import timerActive from "../../assets/icons/Buttons/timerBlack.svg";
import person from "../../assets/icons/Buttons/person.svg";
import personActive from "../../assets/icons/Buttons/personBlack.svg";

interface NavItem {
  path: string;
  label: string;
  icon: string;
  activeIcon: string;
};

const Bar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems: NavItem[] = [
    {
      path: "/main",
      label: "홈",
      icon: home,
      activeIcon: homeActive,
    },
    {
      path: "/search",
      label: "탐색",
      icon: search,
      activeIcon: searchActive,
    },
    {
      path: "/mypromises",
      label: "약속",
      icon: timer,
      activeIcon: timerActive,
    },
    {
      path: "/mypage",
      label: "나",
      icon: person,
      activeIcon: personActive,
    },
  ];

  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        {navItems.slice(0, 2).map((item) => (
          <button
            key={item.path}
            className={`${styles.navItem} ${
              isActive(item.path) ? styles.active : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            <img
              src={isActive(item.path) ? item.activeIcon : item.icon}
              alt={item.label}
            />
            <span>{item.label}</span>
          </button>
        ))}

        <img
          src={약속잡기}
          alt="약속잡기 btn"
          className={styles.plusButton}
          onClick={() => navigate("/suggest")}
        />

        {navItems.slice(2).map((item) => (
          <button
            key={item.path}
            className={`${styles.navItem} ${
              isActive(item.path) ? styles.active : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            <img
              src={isActive(item.path) ? item.activeIcon : item.icon}
              alt={item.label}
            />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default function Navigation() {
  return (
    <>
      {/* 네비게이션 바의 공간을 차지하는 placeholder */}
      <div className={styles.placeholder}></div>
      <Bar />
    </>
  );
};