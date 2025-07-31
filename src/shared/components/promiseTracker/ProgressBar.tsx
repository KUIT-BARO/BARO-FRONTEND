import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import { calculateProgress } from '@shared/components/promiseTracker/utils/calculateProgress';
import type { User } from '@shared/components/promiseTracker/types';

type ProgressBarProps = {
  users: User[];
};

export default function ProgressBar({ users }: ProgressBarProps) {
  const progress = calculateProgress(users);

  return (
    <div className={styles.progressContainer({ variant: 'PENDING' })}>
      <div
        className={styles.progressBar({ variant: 'PENDING' })}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
