import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import { type PromiseType } from '@shared/constant/promise';
import { calculateProgress } from '@shared/components/promiseTracker/utils/calculateProgress';
import type { User } from '@shared/components/promiseTracker/types';

type ProgressBarProps = {
  selectedCount: number;
  variant: PromiseType;
  users: User[];
};

export default function ProgressBar({ selectedCount, variant, users }: ProgressBarProps) {
  const progress = calculateProgress(users, variant, selectedCount);

  return (
    <div className={styles.progressContainer({ variant })}>
      <div
        className={styles.progressBar({ variant })}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
