import * as styles from '@shared/components/promiseTracker/PromiseTracker.css';
import { IcDog, IcMan, IcWoman, IcUser, IcCrownBlue, IcCrownGold, IcPinCheck } from '@svg/index';
import type { User, AvatarType, VariantType } from '@shared/components/promiseTracker/types';

type UserAvatarProps = {
  user: User;
  variant: VariantType;
  isExpanded: boolean;
  zIndex: number;
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

export default function UserAvatar({ user, variant, isExpanded, zIndex }: UserAvatarProps) {
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
