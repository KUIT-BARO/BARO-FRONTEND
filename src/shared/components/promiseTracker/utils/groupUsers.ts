import type { User } from '@shared/components/promiseTracker/types/user';

export interface UserGroup {
  progress: number;
  users: User[];
}

export function groupUsersByProgress(users: User[]): UserGroup[] {
  const groupMap = new Map<number, User[]>();

  for (const user of users) {
    const progress = user.suggestionProgress;
    const currentUsers = groupMap.get(progress) ?? [];
    groupMap.set(progress, [...currentUsers, user]);
  }

  return Array.from(groupMap.entries())
    .map(([progress, users]) => ({ progress, users }))
    .sort((a, b) => a.progress - b.progress);
}
