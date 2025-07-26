import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import type { PromiseType } from '@shared/constant/promise';

type CounterProps = {
  selectedCount: number;
  total: number;
  variant: PromiseType;
};

export default function Counter({ selectedCount, total, variant }: CounterProps) {
  return (
    <div className={styles.counterContainer}>
      <span className={styles.selected({ variant })}>{selectedCount}</span>
      <span>/</span>
      <span>{total}</span>
    </div>
  );
}
