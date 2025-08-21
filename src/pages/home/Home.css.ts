import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const homeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
});

export const logoutButton = style({
  width: '100%',
  marginRight: '2.1rem',
  fontSize: vars.font.body_10.fontSize,
  fontWeight: vars.font.body_10.fontWeight,
  color: vars.color.blue0,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
});
