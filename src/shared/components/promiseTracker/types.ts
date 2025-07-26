import type { AvatarType, PromiseType } from '@shared/constant/promise';

export type User = {
  userId: number;
  avatarType: AvatarType;
  isHost: boolean;
  hasSelected: boolean;
};

export type PromiseTrackerProps = {
  users: User[];
  variant: PromiseType;
};
