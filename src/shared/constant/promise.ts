export const AVATAR_TYPE = {
  DOG: 'DOG',
  MAN: 'MAN',
  WOMAN: 'WOMAN',
  USER: 'USER',
} as const;

export const PROMISE_TYPE = {
  PENDING: 'PENDING',
  VOTING: 'VOTING',
} as const;

export type AvatarType = (typeof AVATAR_TYPE)[keyof typeof AVATAR_TYPE];
export type PromiseType = (typeof PROMISE_TYPE)[keyof typeof PROMISE_TYPE];
