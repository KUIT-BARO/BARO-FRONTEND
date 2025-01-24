import React from 'react';
import styles from './PromiseButton.module.css';

export default function PromiseButton(props) {

  const [active, setActive] = React.useState('promise');
  function updateActive(type) {
    setActive(type);
    props.updateActive(type);
  }

  return (
    <div className={styles.container}>
      <div className={styles.toggleContainer}>
        <button
          onClick={() => updateActive('promise')}
          className={`${styles.toggleButton} ${
            active === 'promise' ? styles.active : styles.inactive
          }`}
        >
          나의 약속
        </button>
        <button
          onClick={() => updateActive('schedule')}
          className={`${styles.toggleButton} ${
            active === 'schedule' ? styles.active : styles.inactive
          }`}
        >
          나의 일정
        </button>
      </div>
    </div>
  );
};