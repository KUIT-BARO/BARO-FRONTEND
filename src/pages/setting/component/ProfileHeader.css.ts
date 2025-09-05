import { style } from '@vanilla-extract/css';

export const profileHeader = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.4rem 2rem',
  gap: '1.8rem',
});

export const profileImage = style({
  width: '8.4rem',
  height: '8.4rem',
});

export const profileInfo = style({
  display: 'flex',
  flexDirection: 'column',
});

export const profileDetails = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});
