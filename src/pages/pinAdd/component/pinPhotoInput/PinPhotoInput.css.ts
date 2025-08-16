import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const photoInputWrapper = style({
  width: '100%',
  position: 'relative',
  margin: '2rem 0 3rem 0',
});

export const hiddenInput = style({
  display: 'none',
});

export const photoContainer = style({
  width: '100%',
  height: '22.8rem',
  borderRadius: '10px',
  backgroundColor: vars.color.gray0,
  cursor: 'pointer',
});

export const uploadedImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
});

export const uploadPlaceholder = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const placeholderText = style({
  color: vars.color.gray3,
  fontSize: vars.font.body_16.fontSize,
});
