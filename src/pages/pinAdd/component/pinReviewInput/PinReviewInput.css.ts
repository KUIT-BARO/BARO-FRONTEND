import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const reviewInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  marginBottom: '2.7rem',
});

export const reviewTextarea = style({
  width: '100%',
  height: '7.8rem',
  padding: '0 1rem',
  border: 'none',
  fontSize: vars.font.body_14.fontSize,
  color: vars.color.white,
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
});

export const characterCount = style({
  position: 'absolute',
  bottom: '-1rem',
  right: '1rem',
  padding: '0.2rem 0.4rem',
  fontSize: vars.font.body_12.fontSize,
  color: vars.color.white,
});

export const errorMessage = style({
  position: 'absolute',
  bottom: '-1rem',
  left: '1rem',
  padding: '0.2rem 0.4rem',
});
