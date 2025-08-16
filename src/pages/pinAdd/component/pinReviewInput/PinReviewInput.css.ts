import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const reviewInputWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2.7rem',
});

export const reviewTextarea = style({
  width: '100%',
  height: '7.8rem',
  padding: '0 1rem',
  border: 'none',
  color: vars.color.white,
  fontSize: vars.font.body_14.fontSize,
  wordWrap: 'break-word',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'break-word',
  '::placeholder': {
    color: vars.color.white,
  },
});

export const characterCount = style({
  position: 'absolute',
  padding: '0.2rem 0.4rem',
  bottom: '-1rem',
  right: '1rem',
  color: vars.color.white,
  fontSize: vars.font.body_12.fontSize,
});

export const errorMessage = style({
  position: 'absolute',
  padding: '0.2rem 0.4rem',
  bottom: '-1rem',
  left: '1rem',
  marginTop: '0.5rem',
});
