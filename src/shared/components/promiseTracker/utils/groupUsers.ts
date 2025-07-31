import type { User } from '@shared/components/promiseTracker/types';

export interface UserGroups {
  selected: User[];
  unselected: User[];
  halfSelected: User[];
}

export function groupUsersByProgress(users: User[]): UserGroups {
  return {
    selected: users.filter(user => user.suggestionProgress === 'COMPLETE'),
    unselected: users.filter(user => user.suggestionProgress === 'NONE'),
    halfSelected: users.filter(user => user.suggestionProgress === 'HALF'),
  };
}
