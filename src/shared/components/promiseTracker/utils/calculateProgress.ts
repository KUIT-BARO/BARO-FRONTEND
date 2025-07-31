import type { User } from '@shared/components/promiseTracker/types';

export function calculateProgress(users: User[]): number {
  const total = users.length;
  if (total <= 0) return 0;
  const totalProgress = users.reduce((acc, user) => acc + user.suggestionProgress, 0);
  return Math.min(totalProgress / total, 100);
}
