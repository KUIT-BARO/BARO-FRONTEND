import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const exploreWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
});

export const exploreHeader = style({
  position: 'sticky',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '1rem',
  padding: '2rem',
  backgroundColor: vars.color.blue0,
  zIndex: 10,
});

export const addPinIcon = style({
  width: '4rem',
  height: '4rem',
});

export const exploreContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: vars.color.blue0,
});

export const explorePlaces = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.blue0,
  flex: 1,
});
