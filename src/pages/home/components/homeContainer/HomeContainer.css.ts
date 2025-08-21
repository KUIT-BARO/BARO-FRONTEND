import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const homeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  border: 'none',
  background: `linear-gradient(180deg, ${vars.color.baroBlue} 14.4%, ${vars.color.blue6} 38.9%, ${vars.color.white} 62.4%, ${vars.color.gray4} 120%) !important`,
});

export const noPromisesText = style({
  marginTop: '1.6rem',
});

export const noPromisesImage = style({
  width: '14.8rem',
  height: '15.4rem',
  margin: '3.6rem 0 6.6rem 0',
});

export const fastestDdayText = style({
  marginBottom: '7.1rem',
  fontSize: '12.8rem',
  fontWeight: '700',
  color: vars.color.white,
});

export const promisesList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.3rem',
  width: '100%',
});
