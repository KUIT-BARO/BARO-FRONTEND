import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import UserGroup from '@shared/components/promiseTracker/UserGroup';
import ProgressBar from '@shared/components/promiseTracker/ProgressBar';
import Counter from '@shared/components/promiseTracker/Counter';
import type { PromiseTrackerProps } from '@shared/components/promiseTracker/types';

export default function PromiseTracker({ users, variant }: PromiseTrackerProps) {
  const total = users.length;
  const selectedCount = users.filter(user => user.hasSelected).length;

  const unselectUsers = users.filter(user => !user.hasSelected);
  const selectUsers = users.filter(user => user.hasSelected);

  return (
    <div className={styles.trackerWrapper}>
      <div className={styles.avatarsWrapper}>
        <UserGroup users={unselectUsers} variant={variant} />
        <UserGroup users={selectUsers} variant={variant} />
      </div>
      <ProgressBar selectedCount={selectedCount} total={total} variant={variant} />
      <Counter selectedCount={selectedCount} total={total} variant={variant} />
    </div>
  );
}
