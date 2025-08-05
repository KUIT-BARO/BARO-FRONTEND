import { vars } from '@shared/styles/theme.css';

export const PROMISE_STATUS = {
  PENDING: 'PENDING',
  VOTING: 'VOTING',
  CONFIRMED: 'CONFIRMED',
} as const;

export const PROMISE_STATUS_CONFIG = {
  PENDING: {
    text: '미정',
    color: vars.color.baroBlue,
  },
  VOTING: {
    text: '투표',
    color: vars.color.yellow1,
  },
  CONFIRMED: {
    text: '확정',
    color: vars.color.red1,
  },
} as const;

export type PromiseStatusType = keyof typeof PROMISE_STATUS;
