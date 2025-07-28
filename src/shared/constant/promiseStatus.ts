import { vars } from '@shared/styles/theme.css';

export const PROMISE_STATUS = {
  PENDING: {
    text: '미정',
    color: vars.color.baroBlue,
  },
  VOTING: {
    text: '투표',
    color: vars.color.yellow,
  },
  CONFIRMED: {
    text: '확정',
    color: vars.color.red,
  },
} as const;
