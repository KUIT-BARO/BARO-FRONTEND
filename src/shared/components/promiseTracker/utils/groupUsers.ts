import { PROMISE_TYPE } from '@shared/constant/promise';
import type { User } from '@shared/components/promiseTracker/types';

export interface UserGroups {
  selected: User[];
  unselected: User[];
  halfSelected: User[];
}

export function groupUsersByProgress(users: User[], variant: string): UserGroups {
  if (variant === PROMISE_TYPE.PENDING) {
    return {
      selected: users.filter(user => user.suggestionProgress === 'COMPLETE'),
      unselected: users.filter(user => user.suggestionProgress === 'NONE'),
      halfSelected: users.filter(user => user.suggestionProgress === 'HALF'),
    };
  } else {
    return {
      selected: users.filter(user => user.hasVoted === true),
      unselected: users.filter(user => user.hasVoted === false),
      halfSelected: [],
    };
  }
}
