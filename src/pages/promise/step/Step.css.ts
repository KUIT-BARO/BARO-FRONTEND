import { style } from '@vanilla-extract/css';

export const stepWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.6rem',
  minHeight: 'calc(100vh - 10.4rem)',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const stepSectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const buttonWrapper = style({
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',

  padding: '0 1.25rem 1.25rem 1.25rem',
  background: 'blue0',
});
