import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const placePopUpText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
});

export const placePopUpContainer = style({
  width: '100%',
  height: 'calc(100vh - 9.8rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  backgroundColor: vars.color.blue0,
});

export const placeList = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
});
