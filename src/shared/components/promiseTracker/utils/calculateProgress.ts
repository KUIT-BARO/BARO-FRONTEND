import { PROMISE_TYPE } from '@shared/constant/promise';
import type { User } from '@shared/components/promiseTracker/types';

export function calculateProgress(
  users: User[],
  variant: string,
  selectedCount: number
): number {
  const total = users.length;

  if (total <= 0) return 0;

  if (variant === PROMISE_TYPE.PENDING) {
    let totalProgress = 0;
    users.forEach(user => {
      switch (user.suggestionProgress) {
      case 'HALF':
        totalProgress += 0.5;
        break;
      case 'COMPLETE':
        totalProgress += 1;
        break;
      default:
        totalProgress += 0;
      }
    });
    return Math.min((totalProgress / total) * 100, 100);
  } else {
    return Math.min((selectedCount / total) * 100, 100);
  }
}
