import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import AvatarGroup from '@shared/components/promiseTracker/AvatarGroup';
import ProgressBar from '@shared/components/promiseTracker/ProgressBar';
import Counter from '@shared/components/promiseTracker/Counter';
import { PROMISE_TYPE } from '@shared/constant/promise';
import type { PromiseTrackerProps } from '@shared/components/promiseTracker/types';

export default function PromiseTracker({ users, variant }: PromiseTrackerProps) {
  const total = users.length;

  const getSelectedUsers = () => {
    if (variant === PROMISE_TYPE.PENDING) {
      return users.filter(user => user.suggestionProgress === 'COMPLETE');
    } else {
      return users.filter(user => user.hasVoted === true);
    }
  };

  const getUnselectedUsers = () => {
    if (variant === PROMISE_TYPE.PENDING) {
      return users.filter(user => user.suggestionProgress === 'NONE');
    } else {
      return users.filter(user => user.hasVoted === false);
    }
  };

  const getHalfSelectedUsers = () => {
    if (variant === PROMISE_TYPE.PENDING) {
      return users.filter(user => user.suggestionProgress === 'HALF');
    } else {
      return [];
    }
  };

  const selectedUsers = getSelectedUsers();
  const unselectedUsers = getUnselectedUsers();
  const halfSelectedUsers = getHalfSelectedUsers();
  const selectedCount = selectedUsers.length;

  return (
    <div className={styles.trackerWrapper}>
      <div className={styles.avatarsWrapper}>
        <AvatarGroup users={unselectedUsers} variant={variant} />
        {variant === PROMISE_TYPE.PENDING && halfSelectedUsers.length > 0 && (
          <AvatarGroup users={halfSelectedUsers} variant={variant} />
        )}
        <AvatarGroup users={selectedUsers} variant={variant} />
      </div>
      <ProgressBar
        selectedCount={selectedCount}
        total={total}
        variant={variant}
        users={users}
      />
      <Counter selectedCount={selectedCount} total={total} variant={variant} />
    </div>
  );
}
