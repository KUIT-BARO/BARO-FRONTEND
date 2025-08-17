import { style } from '@vanilla-extract/css';

export const pinFooterWrapper = style({
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  top: 'auto',
  justifyContent: 'space-between',
  padding: '1.2rem 2rem 4.4rem 2rem',
});

export const userWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const userContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const scoreWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const scoreText = style({
  marginRight: '0.4rem',
});

export const saveButton = style({
  marginLeft: '2.1rem',
  cursor: 'pointer',
});

