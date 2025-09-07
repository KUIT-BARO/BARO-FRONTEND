import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const placePinsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  backgroundColor: vars.color.blue0,
  overflow: 'hidden',
});

export const placePinsContainer = style({
  flex: 1,
  width: '100%',
  overflow: 'auto',
});