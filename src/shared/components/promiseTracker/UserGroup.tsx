import { useState } from 'react';
import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import { IcDog, IcMan, IcWoman, IcUser, IcCrownBlue, IcCrownGold, IcPinCheck } from '@svg/index';
import type { User, VariantType, AvatarType } from '@shared/components/promiseTracker/types';

type UserAvatarProps = {
  user: User;
  variant: VariantType;
  isExpanded: boolean;
  zIndex: number;
};

type UserGroupProps = {
  users: User[];
  variant: VariantType;
};

const renderAvatar = (avatarType: AvatarType) => {
  switch (avatarType) {
  case 'dog':
    return <IcDog className={styles.avatar} />;
  case 'man':
    return <IcMan className={styles.avatar} />;
  case 'woman':
    return <IcWoman className={styles.avatar} />;
  default:
    return <IcUser className={styles.avatar} />;
  }
};

const renderCrown = (variant: VariantType) => {
  return variant === 'pending' ? <IcCrownBlue className={styles.crown} /> : <IcCrownGold className={styles.crown} />;
};

function UserAvatar({ user, variant, isExpanded, zIndex }: UserAvatarProps) {
  return (
    <div
      className={styles.avatarContainer({ expanded: isExpanded })}
      style={{ zIndex }}
    >
      {user.isHost && renderCrown(variant)}
      <IcPinCheck className={styles.avatarBackground} />
      {renderAvatar(user.avatarType)}
    </div>
  );
}

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
