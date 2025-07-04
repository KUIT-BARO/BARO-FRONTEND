import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const buttonSizes = {
  long: {
    width: '100%',
    // width: '36.2rem',
    height: '5rem',
    padding: '1.6rem 14.9rem',
  },
  short: {
    width: '50%',
    // width: '17.1rem',
    height: '5.6rem',
    padding: '1.6rem 7.1rem',
  },
  short_s: {
    width: '14.6rem',
    height: '4.4rem',
    padding: '1.6rem 7.1rem',
  },
  xsmall: {
    width: '6.8rem',
    height: '2.8rem',
    padding: '0.4rem 1.0rem',
    fontSize: vars.font.body_12.fontSize,
  },
  category: {
    width: '8.3rem',
    height: '4.0rem',
    fontSize: vars.font.body_12.fontSize,
  },
  cancel: {
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
    fontSize: vars.font.body_16.fontSize,
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
      short_s: buttonSizes.short_s,
      xsmall: buttonSizes.xsmall,
      category: buttonSizes.category,
      cancel: buttonSizes.cancel,
    },
  },

  defaultVariants: {
    variant: 'enabled',
    size: 'long',
  },
});
