export const mockUp = {
  promiseName: 'KUIT BARO 2차 회의',
  isVotingReady: true,
  promiseMemberSuggestStates: [
    {
      suggestionProgress: 'COMPLETE',
      isHost: true,
      profileImage: 'DOG',
    },
    {
      suggestionProgress: 'NONE',
      isHost: false,
      profileImage: 'DOG',
    },
    {
      suggestionProgress: 'HALF',
      isHost: false,
      profileImage: 'DOG',
    },
  ],
};

export const mockUpTime = {
  suggestedStartDate: '2025-04-03',
  suggestedEndDate: '2025-04-20',
  promiseMembers: [
    {
      userId: 1,
      profileImage: 'image',
    },
    {
      userId: 2,
      profileImage: 'DOG',
    },
    {
      userId: 3,
      profileImage: 'MAN',
    },
    {
      userId: 4,
      profileImage: 'WOMAN',
    },
  ],
  promiseAvailableTimes: [
    {
      promiseMemberId: 1,
      availableTimes: [
        {
          date: '2025-04-03',
          startTime: '12:00:00',
          endTime: '12:00:00',
        },
      ],
    },
  ],
};

export const mockUpPlace = {
  promisePlace: [
    {
      placeName: '강남역 스타벅스',
      placeAddress: '서울특별시 강남구 역삼동 123-123',
    },
    {
      placeName: '건국대학교 중앙도서관',
      placeAddress: '서울특별시 강남구 역삼동 123-123',
    },

    {
      placeName: '강남역 투썸플레이스',
      placeAddress: '서울특별시 강남구 역삼동 123-123',
    },
    {
      placeName: '건국대학교 신공학관',
      placeAddress: '서울특별시 강남구 역삼동 123-123',
    },
  ],
};
