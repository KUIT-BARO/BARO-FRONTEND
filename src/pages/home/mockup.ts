import type { UserHomePageResponseDTO } from 'api/data-contracts';

export const homeData: UserHomePageResponseDTO = {
  userName: '이지환',
  fastestDday: 2,
  promiseDTOs: [
    {
      promiseId: 1,
      placeName: '스타벅스 건대입구점',
      promiseName: 'KUIT 2차 회의',
      promiseDate: '2025-02-24',
      promiseDay: '토',
      promiseMember: '이지환 외 2명',
      promiseDday: 2,
    },
    {
      promiseId: 2,
      placeName: '모츠커피 건대입구점',
      promiseName: 'KUIT 3차 회의',
      promiseDate: '2025-02-26',
      promiseDay: '수',
      promiseMember: '이지환 외 2명',
      promiseDday: 5,
    },
  ],
};
