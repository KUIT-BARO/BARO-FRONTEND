import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import type { PromiseType } from '@shared/constant/promise';

type ProgressBarProps = {
  selectedCount: number;
  total: number;
  variant: PromiseType;
};

export default function ProgressBar({ selectedCount, total, variant }: ProgressBarProps) {
  const progress = total <= 0 ? 0 : Math.min((selectedCount / total) * 100, 100);

  return (
    <div className={styles.progressContainer({ variant })}>
      <div
        className={styles.progressBar({ variant })}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
