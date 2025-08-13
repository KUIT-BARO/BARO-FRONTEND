import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  gap: '1.1rem',
});

export const content = style({
  display: 'flex',
  justifyContent: 'space-between',

  gap: '1.6rem',
});

export const dummy = style({
  width: '8.9rem',
});
