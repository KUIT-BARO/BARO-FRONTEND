import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const progressWrapper = style({
  width: '100%',
  height: '0.6rem',
  background: vars.color.gray1,
  marginBottom: '1.6rem',
  borderRadius: '2.4rem',
});

export const progressBar = style({
  width: '100%',
  height: '100%',
  background: vars.color.baroBlue,
  borderRadius: '2.4rem',
});
