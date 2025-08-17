import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const placePinWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  backgroundColor: vars.color.white,
});

export const userWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const scoreWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  marginTop: '1.2rem',
});

export const categoryWrapper = style({
  display: 'flex',
  gap: '0.4rem',
  marginTop: '1.2rem',
});
