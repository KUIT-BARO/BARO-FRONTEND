// components/layout/Navigation/Navigation.tsx
import React from 'react';
import styles from './Navigation.module.css';

import homeIcon from '../../../../assets/icons/forMyPromises/home.svg';
import searchIcon from '../../../../assets/icons/searchIcon.svg';
import plusIcon from '../../../../assets/icons/forMyPromises/plus.svg';
import timeIcon from '../../../../assets/icons/forMyPromises/time-black.svg';
import profileIcon from '../../../../assets/icons/forMyPromises/profile.svg';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <button className={styles.navItem}>
          <img src={homeIcon} alt="home" />
          <span>홈</span>
        </button>
        <button className={styles.navItem}>
          <img src={searchIcon} alt="search" />
          <span>탐색</span>
        </button>
        <button className={styles.plusButton}>
          <img src={plusIcon} alt="add" />
        </button>
        <button className={styles.navItem}>
          <img src={timeIcon} alt="time" />
          <span>약속</span>
        </button>
        <button className={styles.navItem}>
          <img src={profileIcon} alt="profile" />
          <span>나</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;