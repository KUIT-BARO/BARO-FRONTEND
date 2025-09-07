import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const pinDetailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  background: `var(--Linear, linear-gradient(180deg, ${vars.color.baroBlue} 10%, ${vars.color.blue8} 100%))`,
});

export const pinDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '8.7rem',
  width: '100%',
  padding: '9rem 2rem 0 2rem',
});

export const pinPlaceImage = style({
  width: '100%',
  height: '22.8rem',
  marginBottom: '1.6rem',
  borderRadius: '10px',
  backgroundColor: vars.color.gray0,
});
