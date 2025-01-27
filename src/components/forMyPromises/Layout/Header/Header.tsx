import React from 'react';
import styles from './Header.module.css';
import bellIcon from '../../../../assets/icons/forMyPromises/bell-black.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div></div>
        <div className={styles.title}>나의 약속</div>
        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <img src={bellIcon} alt="notifications" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;