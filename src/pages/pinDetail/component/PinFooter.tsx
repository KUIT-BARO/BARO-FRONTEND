import { useState } from 'react';
import * as styles from '@pages/pinDetail/component/PinFooter.css';
import Text from '@shared/components/text/Text';
import Stars from '@shared/components/stars/Stars';
import { IcMan, IcSaveNon, IcSaveWhite } from '@svg/index';

interface PinFooterProps {
  userName: string;
  score: number;
}

export default function PinFooter({
  userName,
  score
}: PinFooterProps) {
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
            {userName}
          </Text>
          <Text tag='body_12' color='white'>
            @Jiwhan_lee
          </Text>
        </div>
      </div>
      <div className={styles.scoreWrapper}>
        <Text tag='body_14' color='white' className={styles.scoreText}>
          {score}
        </Text>
        <Stars score={score} size='SMALL' />
        <button
          type='button'
          onClick={handleSaveClick}
          className={styles.saveButton}
          aria-pressed={isSaved}
          aria-label={isSaved ? '핀 저장 해제' : '핀 저장'}
        >
          {isSaved
            ? <IcSaveWhite width={'1.6rem'} height={'1.6rem'} />
            : <IcSaveNon width={'1.6rem'} height={'1.6rem'} />}
        </button>
      </div>
    </div>
  );
}
