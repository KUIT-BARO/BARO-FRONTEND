import { useState } from 'react';
import * as styles from '@pages/pinDetail/component/PinFooter.css';
import Text from '@shared/components/text/Text';
import Stars from '@shared/components/stars/Stars';
import { IcMan, IcSaveNon, IcSaveWhite } from '@svg/index';

export default function PinFooter() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={styles.pinFooterWrapper}>
      <div className={styles.userWrapper}>
        <IcMan />
        <div className={styles.userContainer}>
          <Text tag='body_14' color='white'>
            이지환
          </Text>
          <Text tag='body_12' color='white'>
            @Jiwhan_lee
          </Text>
        </div>
      </div>
      <div className={styles.scoreWrapper}>
        <Text tag='body_14' color='white' className={styles.scoreText}>
          3
        </Text>
        <Stars score={3} size='SMALL' />
        <button
          type='button'
          onClick={handleSaveClick}
          className={styles.saveButton}
        >
          {isSaved
            ? <IcSaveWhite width={'1.6rem'} height={'1.6rem'} />
            : <IcSaveNon width={'1.6rem'} height={'1.6rem'} />}
        </button>
      </div>
    </div>
  );
}
