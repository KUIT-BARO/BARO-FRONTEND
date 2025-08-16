import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const timePopUpText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
});

export const timePopUpContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  backgroundColor: vars.color.blue0,
  overflow: 'hidden',
});

export const avatar = style({
  width: '3.8rem',
  height: '3.4rem',
});

export const avatarGroup = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
});
