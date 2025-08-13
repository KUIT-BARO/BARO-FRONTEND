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
      userId: 1,
      profileImage: 'DOG',
    },
    {
      userId: 1,
      profileImage: 'MAN',
    },
    {
      userId: 1,
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
