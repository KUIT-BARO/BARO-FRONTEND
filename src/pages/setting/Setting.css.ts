import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const line = style({
  borderBottom: '1px solid #eee',
});
