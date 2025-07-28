import * as styles from '@shared/components/stars/Stars.css'
import SelectStars from '@shared/components/stars/SelectStars';

interface StarsProps {
    score: number;
    size: 'SMALL' | 'BIG' | 'DEFAULT';
}

export function Stars({ score, size }: StarsProps) {
  const clampedScore = Math.max(0, Math.min(5, score));
  const { Fill, None , Half } = SelectStars({ size });

  const renderStar = (index: number) => {
    if (index < Math.floor(clampedScore)) {
      return <span key={index}> {Fill} </span>;
    }
    else if (index < Math.ceil(clampedScore)) {
      return <span key={index}> {Half} </span>;
    }
    else {
      return <span key={index}> {None} </span>;
    }
  };

  return (
    <div className={styles.container}>
      {Array.from({ length: 5 }, (_, index) => renderStar(index))}
    </div>
  )
}
