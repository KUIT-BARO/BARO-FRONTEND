import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import type { VariantType } from './types';

type CounterProps = {
  selectedCount: number;
  total: number;
  variant: VariantType;
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
