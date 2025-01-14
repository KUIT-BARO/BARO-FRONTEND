import React from 'react';
import styles from './SuggestPromise.module.css';

import plusIcon from '../../../assets/icons/forMyPromises/plus.svg';

const SuggestPromise = () => {
  return (
    <div className={styles.suggestContainer}>
      <button className={styles.plusButton}>
        <img src={plusIcon} alt="add" />
      </button>
      <div className={styles.suggestPromise}>모임 제안하기</div>
    </div>
  );
};

export default SuggestPromise;