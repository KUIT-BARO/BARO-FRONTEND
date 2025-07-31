import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';

type CounterProps = {
  selectedCount: number;
  total: number;
};

export default function Counter({ selectedCount, total }: CounterProps) {
  return (
    <div className={styles.counterContainer}>
      <span className={styles.selected({ variant: 'PENDING' })}>{selectedCount}</span>
      <span>/</span>
      <span>{total}</span>
    </div>
  );
}
