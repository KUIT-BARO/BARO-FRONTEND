export const AVATAR_TYPE = {
  DOG: 'DOG',
  MAN: 'MAN',
  WOMAN: 'WOMAN',
  USER: 'USER',
} as const;
export type AvatarType = (typeof AVATAR_TYPE)[keyof typeof AVATAR_TYPE];
