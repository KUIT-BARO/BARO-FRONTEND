import type { AvatarType } from '@shared/constant/promise';

export type User = {
  userId?: number;
  avatarType: AvatarType;
  isHost: boolean;
  suggestionProgress: number;
};
