import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const pinAddWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  background: `var(--Linear, linear-gradient(180deg, ${vars.color.baroBlue} 0%, ${vars.color.blue8} 100%))`,
});

export const submitButton = style({
  width: '100%',
  marginRight: '2.1rem',
  fontSize: vars.font.body_bold_16.fontSize,
  fontWeight: vars.font.body_bold_16.fontWeight,
  color: vars.color.white,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
});

export const pinReviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
});
