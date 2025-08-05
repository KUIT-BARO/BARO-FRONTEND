import { createQueryKeys } from '@lukemorales/query-key-factory';

// 약속 관련 쿼리키 팩토리
export const promiseKeys = createQueryKeys('promise', {
  // 기본 약속 쿼리키
  all: null,
  detail: (promiseId: string) => [promiseId],

  // 약속 상태별 쿼리키
  status: (promiseId: string, userId: number) => ['status', promiseId, userId],

  // 상태별 약속 쿼리키
  pending: (promiseId: string, isHost: boolean) => ['pending', promiseId, isHost],
  voting: (promiseId: string, isHost: boolean) => ['voting', promiseId, isHost],
  confirmed: (promiseId: string) => ['confirmed', promiseId],

  // 투표 관련 쿼리키
  voteCandidates: (promiseId: string, userId: number, hasVoted: boolean) => [
    'vote',
    'candidates',
    promiseId,
    userId,
    hasVoted,
  ],
  voteStatus: (promiseId: string, userId: number) => ['vote', 'status', promiseId, userId],
  voteRemainingTime: (promiseId: string) => ['vote', 'remaining-time', promiseId],

  // 약속 제안 관련 쿼리키
  suggestRemainingTime: (promiseId: string) => ['suggest', 'remaining-time', promiseId],

  // 약속 관리 페이지 쿼리키
  management: (isHost: boolean) => ['management', isHost],
});
