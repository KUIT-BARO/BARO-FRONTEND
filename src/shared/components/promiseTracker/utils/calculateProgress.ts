import type { User } from '@shared/components/promiseTracker/types';

export function calculateProgress(users: User[]): number {
  const total = users.length;

  if (total <= 0) return 0;

  const totalProgress = users.reduce((acc, user) => {
    switch (user.suggestionProgress) {
    case 'HALF':
      return acc + 0.5;
    case 'COMPLETE':
      return acc + 1;
    default:
      return acc;
    }
  }, 0);

  return Math.min((totalProgress / total) * 100, 100);
}
