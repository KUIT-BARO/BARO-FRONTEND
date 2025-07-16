import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const buttonSizes = {
  long: {
    width: '100%',
    height: '5rem',
    padding: '1.6rem 14.9rem',
    fontSize: vars.font.body_16.fontSize,
  },
  short: {
    width: '50%',
    height: '5.6rem',
    padding: '1.6rem 7.1rem',
    fontSize: vars.font.body_16.fontSize,
  },
  category: {
    width: '8.3rem',
    height: '4.0rem',
    fontSize: vars.font.body_12.fontSize,
  },
  small: {
    width: '4.1rem',
    height: '2.8rem',
    padding: '0.4rem 1.0rem',
    fontSize: vars.font.body_12.fontSize,
    color: vars.color.baroBlue,
  },
}

export const buttonWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: '1rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  variants: {
    variant: {
      enabled: {
        backgroundColor: vars.color.baroBlue,
        color: vars.color.white,
      },
      disabled: {
        backgroundColor: vars.color.gray0,
        color: vars.color.white,
        cursor: 'not-allowed',
      },
      white: {
        backgroundColor: vars.color.white,
        color: vars.color.black,
      },
      outlined: {
        border: `0.15rem solid ${vars.color.baroBlue}`,
        backgroundColor: 'transparent',
        color: vars.color.baroBlue,
      },
    },

    size: {
      long: buttonSizes.long,
      short: buttonSizes.short,
      category: buttonSizes.category,
      small: buttonSizes.small,
    },
  },

  defaultVariants: {
    variant: 'enabled',
    size: 'long',
  },
});
