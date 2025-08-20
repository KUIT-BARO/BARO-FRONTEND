import type { AvatarType } from '@shared/constant/avatar';

export type User = {
  userId?: number;
  avatarType: AvatarType;
  isHost: boolean;
  suggestionProgress: number;
};
