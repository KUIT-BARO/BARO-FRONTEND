import type { User } from '@shared/components/promiseTracker/types';

export interface UserGroups {
  selected: User[];
  unselected: User[];
  halfSelected: User[];
}

export function groupUsersByProgress(users: User[]): UserGroups {
  return {
    selected: users.filter(user => user.suggestionProgress === 100),
    unselected: users.filter(user => user.suggestionProgress === 0),
    halfSelected: users.filter(user => user.suggestionProgress > 0 && user.suggestionProgress < 100),
  };
}
