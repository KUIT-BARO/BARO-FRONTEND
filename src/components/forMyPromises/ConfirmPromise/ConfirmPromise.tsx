import React from 'react';
import styles from './ConfirmPromise.module.css';

import clock from '../../../assets/icons/forMyPromises/clock.svg';

const ConfirmPromise = () => {
  return (
    <div className={styles.confirmContainer}>
      <div className={styles.confirmStateContainer}>
        <div className={styles.confirmState}>응답대기</div>
        <div className={styles.confirmDate}>제안일 11/30 · 투표 종료 12/2 18:26</div>
      </div>
      <div className={styles.promiseTitle}>회계원리 팀플</div>
      <div className={styles.promiseContainer}>
        <div className={styles.promiseContent}>
          <div className={styles.grayBox}></div>
          <div>팀프로젝트 / 회의</div>
        </div>
        <div className={styles.promiseContent}>
          <div className={styles.grayBox}></div>
          <div>김의중, 김종수, 이병건, 박정민</div>
        </div>
        <div className={styles.promiseContent}>
          <div className={styles.grayBox}></div>
          <div>중간 지점(미정)</div>
        </div>
        <div className={styles.promiseContent}>
          <img className={styles.redClock} src={clock} alt='clock-icon' />
          <div>12/18 - 12/21 중 하루</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.confirmButton}>약속 잡기</button>
        <button className={styles.denyButton}>거절하기</button>
      </div>
    </div>
  );
};

export default ConfirmPromise;