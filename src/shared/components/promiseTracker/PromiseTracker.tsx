import { useMemo } from 'react';
import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import AvatarGroup from '@shared/components/promiseTracker/AvatarGroup';
import ProgressBar from '@shared/components/promiseTracker/ProgressBar';
import { groupUsersByProgress } from '@shared/components/promiseTracker/utils/groupUsers';
import type { User } from '@shared/components/promiseTracker/types/user';

type PromiseTrackerProps = {
  users: User[];
};

export default function PromiseTracker({ users }: PromiseTrackerProps) {
  const userGroups = useMemo(() => {
    return groupUsersByProgress(users);
  }, [users]);

  const selectedCount = userGroups.find(group => group.progress === 100)?.users.length || 0;

  return (
    <div className={styles.trackerWrapper}>
      <div className={styles.avatarsWrapper}>
        {userGroups.map((group) => {
          let transform = 'translateX(-50%)';
          if (group.progress === 0) { transform = 'translateX(0%)'; }
          else if (group.progress === 100) { transform = 'translateX(-100%)'; }

          return (
            <div
              key={group.progress}
              className={styles.avatarGroupPositioned}
              style={{
                left: `${group.progress}%`,
                transform,
              }}
            >
              <AvatarGroup users={group.users} />
            </div>
          );
        })}
      </div>
      <ProgressBar users={users} />
      <div className={styles.counterContainer}>
        <span className={styles.selected}>{selectedCount}</span>
        <span>/</span>
        <span>{users.length}</span>
      </div>
    </div>
  );
}
