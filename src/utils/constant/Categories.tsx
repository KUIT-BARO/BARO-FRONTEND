export const PIN_CATEGORIES: string[] = [
  "비즈니스",
  "스터디",
  "여가 생활",
  "커플",
  "아늑한",
  "북적이는",
  "독특한",
  "전통적인",
  "반려동물",
  "실버",
  "키즈존",
] as const;
export type PIN_category = (typeof PIN_CATEGORIES)[number];
