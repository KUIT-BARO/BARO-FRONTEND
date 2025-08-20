import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const votingWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: vars.color.blue0,
});

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  minHeight: 'calc(100vh - 9.8rem - 8rem)',
  background: vars.color.blue0,
});

export const votingText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
});

export const votingPlaceWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
});

export const votingButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});

export const votingButton = style({
  position: 'sticky',
  bottom: '0',
  left: '0',
  right: '0',
  width: '100%',
  padding: '1.5rem',
});
