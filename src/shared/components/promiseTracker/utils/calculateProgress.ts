import { PROMISE_TYPE, type PromiseType } from '@shared/constant/promise';
import type { User } from '@shared/components/promiseTracker/types';

export function calculateProgress(
  users: User[],
  variant: PromiseType,
  selectedCount: number
): number {
  const total = users.length;

  if (total <= 0) return 0;

  if (variant === PROMISE_TYPE.PENDING) {
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
  } else {
    return Math.min((selectedCount / total) * 100, 100);
  }
}
