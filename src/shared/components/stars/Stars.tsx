import React from 'react'
import * as styles from '@shared/components/stars/Stars.css'
import { SelectStars } from './SelectStars';

interface StarsProps {
    score: number;
    size: 'small' | 'big' | 'default';
}

export const Stars: React.FC<StarsProps> = ({ score, size }) => {
  const { Fill, None } = SelectStars({ size });
  return (
    <div className={styles.container}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          {index < score ? Fill : None}
        </span>
      ))}
    </div>
  )
}
