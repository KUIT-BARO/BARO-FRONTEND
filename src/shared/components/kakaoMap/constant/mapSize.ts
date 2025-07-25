export const MAP_SIZE = {
  SMALL: 's',
  MEDIUM: 'm',
  LARGE: 'l',
} as const;

export type MapSize = (typeof MAP_SIZE)[keyof typeof MAP_SIZE];
