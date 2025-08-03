import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const searchBarWrapper = style({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  padding: '0.8rem 1.7rem',
  borderRadius: '10px',

  backgroundColor: vars.color.gray6,
});

export const searchIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  marginRight: '1.2rem',

  color: vars.color.gray2,
});

export const searchInput = style({
  width: '100%',
  border: 'none',
  borderRadius: '10px',

  backgroundColor: vars.color.gray6,

  fontSize: vars.font.body_17.fontSize,
  color: vars.color.gray2,

  outline: 'none',
  selectors: {
    '&::placeholder': {
      color: vars.color.gray2,
    },
  },
});
