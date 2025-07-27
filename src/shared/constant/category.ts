export const CATEGORIES = [
  'ALL',
  '캠퍼스',
  '음식점',
  '대중교통',
  '비즈니스',
  '스터디',
  '커플',
  '반려동물',
  '키즈존',
  '실버존',
  '아늑한',
  '북적이는',
  '독특한',
  '전통적인',
] as const;

export type CategoryType = (typeof CATEGORIES)[number];
