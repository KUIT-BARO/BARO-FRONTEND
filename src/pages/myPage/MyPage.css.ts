import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const scheduleTitleBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '9.4rem 3rem 2rem 2rem',
});

export const optionBox = style({
  display: 'flex',
  gap: '2rem',
});

export const optionSvg = style({
  cursor: 'pointer',
});
