import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

import homeIcon from "../../assets/icons/forMyPromises/home.svg";
import homeActiveIcon from "../../assets/icons/forMyPromises/home-black.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import searchActiveIcon from "../../assets/icons/searchIcon-black.svg";
import plusIcon from "../../assets/icons/forMyPromises/plus.svg";
import timeIcon from "../../assets/icons/forMyPromises/time.svg";
import timeActiveIcon from "../../assets/icons/forMyPromises/time-black.svg";
import profileIcon from "../../assets/icons/forMyPromises/profile.svg";
import profileActiveIcon from "../../assets/icons/forMyPromises/profile-black.svg";

interface NavItem {
  path: string;
  label: string;
  icon: string;
  activeIcon: string;
}

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems: NavItem[] = [
    {
      path: "/main",
      label: "홈",
      icon: homeIcon,
      activeIcon: homeActiveIcon,
    },
    {
      path: "/search",
      label: "탐색",
      icon: searchIcon,
      activeIcon: searchActiveIcon,
    },
    {
      path: "/mypromises",
      label: "약속",
      icon: timeIcon,
      activeIcon: timeActiveIcon,
    },
    {
      path: "/mypage",
      label: "나",
      icon: profileIcon,
      activeIcon: profileActiveIcon,
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
        <button
          className={styles.plusButton}
          onClick={() => navigate("/suggest")}
        >
          <img src={plusIcon} alt="약속 만들기" />
        </button>
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

export default Navigation;
