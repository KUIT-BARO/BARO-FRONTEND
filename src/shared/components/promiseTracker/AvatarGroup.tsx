import { useState } from 'react';
import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import { IcDog, IcMan, IcWoman, IcUser, IcCrownBlue, IcCrownGold, IcPinCheck } from '@svg/index';
import { AVATAR_TYPE, PROMISE_TYPE, type AvatarType, type PromiseType } from '@shared/constant/promise';
import type { User } from '@shared/components/promiseTracker/types';

type UserAvatarProps = {
  user: User;
  variant: PromiseType;
  isExpanded: boolean;
  zIndex: number;
};

type AvatarGroupProps = {
  users: User[];
  variant: PromiseType;
};

const renderAvatar = (avatarType: AvatarType) => {
  switch (avatarType) {
  case AVATAR_TYPE.DOG:
    return <IcDog className={styles.avatar} />;
  case AVATAR_TYPE.MAN:
    return <IcMan className={styles.avatar} />;
  case AVATAR_TYPE.WOMAN:
    return <IcWoman className={styles.avatar} />;
  default:
    return <IcUser className={styles.avatar} />;
  }
};

const renderCrown = (variant: PromiseType) => {
  return variant === PROMISE_TYPE.PENDING ? <IcCrownBlue className={styles.crown} /> : <IcCrownGold className={styles.crown} />;
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

export default function AvatarGroup({ users, variant }: AvatarGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!users) {
    return null;
  }

  return (
    <div
      className={styles.avatarGroup}
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
