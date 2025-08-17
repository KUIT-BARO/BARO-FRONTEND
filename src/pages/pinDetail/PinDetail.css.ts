import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const pinDetailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  background: `var(--Linear, linear-gradient(180deg, #5175FF 0%, #CFDAE6 100%))`,
});

export const pinDetailContainer = style({
  width: '100%',
  flex: 1,
  padding: '2rem',
  display: 'flex',
  paddingTop: '9rem',
  flexDirection: 'column',
  gap: '8.7rem',
});

export const pinPlaceImage = style({
  width: '100%',
  height: '22.8rem',
  borderRadius: '10px',
  marginBottom: '1.6rem',
  backgroundColor: vars.color.gray0,
});
