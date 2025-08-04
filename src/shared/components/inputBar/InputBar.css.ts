import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const inputBarWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0.8rem 1.7rem',
  },
  variants: {
    hasBackground: {
      true: {
        borderRadius: '10px',
      },
      false: {
        padding: '0.8rem 0',
        borderRadius: '0',
        borderBottom: `2px solid ${vars.color.gray2}`,
        backgroundColor: 'transparent',
      },
    },
    backgroundColor: {
      gray6: {
        backgroundColor: vars.color.gray6,
      },
      blue6: {
        backgroundColor: vars.color.blue6,
      },
    },
  },
});

export const leftIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  marginRight: '1.2rem',
});

export const textInput = recipe({
  base: {
    width: '100%',
    border: 'none',
    fontSize: vars.font.body_17.fontSize,
    color: vars.color.gray2,
    outline: 'none',
  },
  variants: {
    hasBackground: {
      false: {
        backgroundColor: 'transparent',
        selectors: {
          '&::placeholder': {
            color: vars.color.gray2,
          },
        },
      },
    },
    backgroundColor: {
      gray6: {
        backgroundColor: vars.color.gray6,
        selectors: {
          '&::placeholder': {
            color: vars.color.gray2,
          },
        },
      },
      blue6: {
        backgroundColor: vars.color.blue6,
        color: vars.color.blue7,
        selectors: {
          '&::placeholder': {
            color: vars.color.blue7,
          },
        },
      },
    },
  },
});

export const characterCount = style({
  fontSize: vars.font.body_17.fontSize,
  color: vars.color.gray2,
});
