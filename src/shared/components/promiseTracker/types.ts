export type AvatarType = 'dog' | 'man' | 'woman' | 'user';
export type VariantType = 'pending' | 'voting';

export type User = {
  userId: number;
  avatarType: AvatarType;
  isHost: boolean;
  hasSelected: boolean;
};

export type PromiseTrackerProps = {
  users: User[];
  variant: VariantType;
};
