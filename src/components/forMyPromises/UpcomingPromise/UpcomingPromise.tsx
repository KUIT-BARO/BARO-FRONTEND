import React from 'react';
import styles from './UpcomingPromise.module.css';

import BackIcon from '../../../assets/icons/backIcon.svg';

const UpcomingPromise = () => {
  return (
    <div className={styles.upcomingContainer}>
      <div className={styles.dateContainer}>
        <div className={styles.upcomingDday}>D-2</div>
        <div className={styles.upcomingDate}>11월28일 17시 30분</div>
        <img className={styles.goToPromise} src={BackIcon} alt="back-icon" />
      </div>
      <div className={styles.promiseContainer}>
        <div className={styles.promiseTitle}>마케팅 관리 팀플</div>
        <div className={styles.promiseContent}>
          <div className={styles.grayBox}></div>
          <div>김의중, 김종수, 이병건, 박정민</div>
        </div>
        <div className={styles.promiseContent}>
          <div className={styles.grayBox}></div>
          <div>스타벅스 신논현점</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPromise;