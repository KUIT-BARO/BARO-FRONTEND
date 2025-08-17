import { AVATAR_TYPE, type AvatarType } from '@shared/constant/promise';
import { IcMan, IcWoman, IcDog, IcUser } from '@svg/index';
import * as styles from '@pages/profile/Profile.css';

export default function renderAvatar(avatarType: AvatarType) {
  switch (avatarType) {
  case AVATAR_TYPE.DOG:
    return <IcDog className={styles.profileImageIcon} />;
  case AVATAR_TYPE.MAN:
    return <IcMan className={styles.profileImageIcon} />;
  case AVATAR_TYPE.WOMAN:
    return <IcWoman className={styles.profileImageIcon} />;
  default:
    return <IcUser className={styles.profileImageIcon} />;
  }
};