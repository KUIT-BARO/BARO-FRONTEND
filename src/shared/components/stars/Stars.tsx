import React from 'react'
import * as styles from '@shared/components/stars/Stars.css'
import { SelectStars } from './SelectStars';

interface StarsProps {
    score: number;
    size: 'SMALL' | 'BIG' | 'DEFAULT';
}

export const Stars: React.FC<StarsProps> = ({ score, size }) => {
  const clampedScore = Math.max(0, Math.min(5, score));
  const { Fill, None , Half } = SelectStars({ size });
  return (
    <div className={styles.container}>
      {Array.from({ length: 5 }, (_, index) => {
        if (index < Math.floor(clampedScore)) {
          return <span key={index}>{Fill}</span>;
        } else if (index < Math.ceil(clampedScore)) {
          return <span key={index}>{Half}</span>;
        } else {
          return <span key={index}>{None}</span>;
        }
      })}
    </div>
  )
}
