import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import { PROMISE_TYPE, type PromiseType } from '@shared/constant/promise';
import type { User } from '@shared/components/promiseTracker/types';

type ProgressBarProps = {
  selectedCount: number;
  total: number;
  variant: PromiseType;
  users?: User[];
};

export default function ProgressBar({ selectedCount, total, variant, users }: ProgressBarProps) {
  const calculateProgress = () => {
    if (total <= 0) return 0;

    if (variant === PROMISE_TYPE.PENDING && users) {
      let totalProgress = 0;
      users.forEach(user => {
        switch (user.suggestionProgress) {
        case 'HALF':
          totalProgress += 0.5;
          break;
        case 'COMPLETE':
          totalProgress += 1;
          break;
        default:
          totalProgress += 0;
        }
      });
      return Math.min((totalProgress / total) * 100, 100);
    } else {
      return Math.min((selectedCount / total) * 100, 100);
    }
  };

  const progress = calculateProgress();

  return (
    <div className={styles.progressContainer({ variant })}>
      <div
        className={styles.progressBar({ variant })}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
