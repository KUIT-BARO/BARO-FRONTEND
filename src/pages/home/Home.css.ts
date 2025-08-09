import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const homeWrapper = style({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const logoutButton = style({
  width: '100%',
  marginRight: '2.1rem',
  color: vars.color.blue0,
  fontSize: vars.font.body_10.fontSize,
  fontWeight: vars.font.body_10.fontWeight,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});
