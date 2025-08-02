import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const promiseWrapper = style({
  background: vars.color.blue0,
  minHeight: '100vh',
});

export const stepWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  gap: '1.6rem',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});
