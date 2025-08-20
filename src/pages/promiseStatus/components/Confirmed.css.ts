import { style } from '@vanilla-extract/css';

export const confirmedWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '9.8rem',
  height: '100vh',
});

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '40px',
});

export const confirmedText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
});

export const promiseDetailWrapper = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const confirmedButton = style({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: '1.5rem',
});
