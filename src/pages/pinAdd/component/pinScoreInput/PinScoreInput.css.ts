import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const scoreInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.blue0,
  padding: '2rem',
});

export const scoreTitle = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
});

export const starsContainer = style({
  display: 'flex',
  gap: '0.5rem',
});

export const starButton = style({
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.1)',
  },
});
