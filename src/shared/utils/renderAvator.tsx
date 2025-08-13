import { IcDog, IcMan, IcWoman, IcUser } from '@svg/index';
import { AVATAR_TYPE, type AvatarType } from '@shared/constant/avatar';

export default function renderAvatar(avatarType: AvatarType, className: string) {
  switch (avatarType) {
    case AVATAR_TYPE.DOG:
      return <IcDog className={className} />;
    case AVATAR_TYPE.MAN:
      return <IcMan className={className} />;
    case AVATAR_TYPE.WOMAN:
      return <IcWoman className={className} />;
    default:
      return <IcUser className={className} />;
  }
}
