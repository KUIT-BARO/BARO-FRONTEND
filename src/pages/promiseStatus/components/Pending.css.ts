import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const pendingWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: vars.color.blue0,
  height: '100vh',
});

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  height: 'calc(100vh - 9.8rem)',
  background: vars.color.blue0,
});

export const pendingText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

export const buttonGroupWrapper = style({
  display: 'flex',
  gap: '10px',
});

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  width: '17.8rem',
  height: '32.6rem',
  cursor: 'pointer',
  borderRadius: '1rem',
  background: vars.color.white,
});

export const buttonImage = style({
  height: '15.6rem',
});

export const votingButton = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  padding: '1.6rem',
  background: vars.color.blue0,
});
