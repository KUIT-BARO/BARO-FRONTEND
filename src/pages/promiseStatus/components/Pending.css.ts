import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const pendingWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const buttonGroupWrapper = style({
  display: 'flex',
  gap: '10px',
});

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  width: '17.8rem',
  height: '32.6rem',
  flexShrink: 0,
  borderRadius: '1rem',
  background: vars.color.white,
});

export const buttonImage = style({
  width: '10.6rem',
});
