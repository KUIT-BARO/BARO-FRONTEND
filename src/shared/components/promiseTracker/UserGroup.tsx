import { useState } from 'react';
import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import UserAvatar from '@shared/components/promiseTracker/UserAvatar';
import type { User, VariantType } from '@shared/components/promiseTracker/types';

type UserGroupProps = {
  users: User[];
  variant: VariantType;
};

export default function UserGroup({ users, variant }: UserGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (users.length === 0) {
    return null;
  }

  return (
    <div
      className={styles.userGroup}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {users.map((user, index) => (
        <UserAvatar
          key={user.userId}
          user={user}
          variant={variant}
          isExpanded={isExpanded}
          zIndex={isExpanded ? 1 : users.length - index}
        />
      ))}
    </div>
  );
}
