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
  width: '100%',
  flex: 1,
  overflow: 'auto',
});