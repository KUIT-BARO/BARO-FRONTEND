import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const tagsWrapper = style({
  width: '100%',
  padding: '0 1.6rem',
  background: vars.color.lightBlue,
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const tagContainer = style({
  display: 'inline-flex',
  gap: '0.5rem',
});

export const tagButton = recipe({
  base: {
    paddingBottom: '0.4rem',
    border: 'none',
    borderBottom: '0.4rem solid transparent',
    background: 'transparent',
    textAlign: 'center',
    fontSize: vars.font.body_15.fontSize,
    transition: 'color 0.2s ease-in-out, border-color 0.2s ease-in-out',
    cursor: 'pointer',
  },

  variants: {
    active: {
      true: {
        color: vars.color.baroBlue,
        borderBottomColor: vars.color.baroBlue,
      },
      false: {
        color: vars.color.gray4,
        borderBottomColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
