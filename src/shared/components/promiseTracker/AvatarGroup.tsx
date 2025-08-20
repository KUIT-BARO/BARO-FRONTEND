import { useState } from 'react';
import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import { IcCrownBlue, IcPinCheck } from '@svg/index';
import type { User } from '@shared/components/promiseTracker/types/user';
import renderAvatar from '@shared/utils/renderAvator';

type AvatarGroupProps = {
  users: User[];
};

export default function AvatarGroup({ users }: AvatarGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!users) {
    return null;
  }

  return (
    <div className={styles.avatarGroup} onClick={() => setIsExpanded(!isExpanded)}>
      {users.map((user, index) => (
        <div
          key={user.userId}
          className={styles.avatarContainer({
            expanded: isExpanded,
          })}
          style={{ zIndex: isExpanded ? 1 : users.length - index }}
        >
          {user.isHost && <IcCrownBlue className={styles.crown} />}
          <IcPinCheck className={styles.avatarBackground} />
          {renderAvatar(user.avatarType, styles.avatar)}
        </div>
      ))}
    </div>
  );
}
