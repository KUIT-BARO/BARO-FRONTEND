import { useMemo } from 'react';
import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import AvatarGroup from '@shared/components/promiseTracker/AvatarGroup';
import ProgressBar from '@shared/components/promiseTracker/ProgressBar';
import Counter from '@shared/components/promiseTracker/Counter';
import { PROMISE_TYPE } from '@shared/constant/promise';
import { groupUsersByProgress } from '@shared/components/promiseTracker/utils/groupUsers';
import { calculateProgress } from '@shared/components/promiseTracker/utils/calculateProgress';
import type { PromiseTrackerProps } from '@shared/components/promiseTracker/types';

export default function PromiseTracker({ users, variant }: PromiseTrackerProps) {
  const total = users.length;

  const userGroups = useMemo(() => {
    return groupUsersByProgress(users, variant);
  }, [users, variant]);

  const { selected: selectedUsers, unselected: unselectedUsers, halfSelected: halfSelectedUsers } = userGroups;
  const selectedCount = selectedUsers.length;

  const progressPercentage = useMemo(() => {
    return calculateProgress(users, variant, selectedCount);
  }, [users, variant, selectedCount]);

  return (
    <div className={styles.trackerWrapper}>
      <div className={styles.avatarsWrapper}>
        <AvatarGroup users={unselectedUsers} variant={variant} />
        {variant === PROMISE_TYPE.PENDING && halfSelectedUsers.length > 0 && (
          <div
            className={styles.avatarGroupPositioned}
            style={{ left: `${progressPercentage}%`, transform: 'translateX(-50%)' }}
          >
            <AvatarGroup users={halfSelectedUsers} variant={variant} />
          </div>
        )}
        <AvatarGroup users={selectedUsers} variant={variant} />
      </div>
      <ProgressBar
        selectedCount={selectedCount}
        variant={variant}
        users={users}
      />
      <Counter selectedCount={selectedCount} total={total} variant={variant} />
    </div>
  );
}
