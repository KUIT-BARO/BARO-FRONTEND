import { useMemo } from 'react';
import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import AvatarGroup from '@shared/components/promiseTracker/AvatarGroup';
import ProgressBar from '@shared/components/promiseTracker/ProgressBar';
import Counter from '@shared/components/promiseTracker/Counter';
import { groupUsersByProgress } from '@shared/components/promiseTracker/utils/groupUsers';
import { calculateProgress } from '@shared/components/promiseTracker/utils/calculateProgress';
import type { PromiseTrackerProps } from '@shared/components/promiseTracker/types';

export default function PromiseTracker({ users }: PromiseTrackerProps) {
  const total = users.length;

  const userGroups = useMemo(() => {
    return groupUsersByProgress(users);
  }, [users]);

  const { selected: selectedUsers, unselected: unselectedUsers, halfSelected: halfSelectedUsers } = userGroups;
  const selectedCount = selectedUsers.length;

  const progressPercentage = useMemo(() => {
    return calculateProgress(users);
  }, [users]);

  return (
    <div className={styles.trackerWrapper}>
      <div className={styles.avatarsWrapper}>
        <AvatarGroup users={unselectedUsers} />
        {halfSelectedUsers.length > 0 && (
          <div
            className={styles.avatarGroupPositioned}
            style={{ left: `${progressPercentage}%`, transform: 'translateX(-50%)' }}
          >
            <AvatarGroup users={halfSelectedUsers} />
          </div>
        )}
        <AvatarGroup users={selectedUsers} />
      </div>
      <ProgressBar users={users} />
      <Counter selectedCount={selectedCount} total={total} />
    </div>
  );
}
