import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const buttonSizes = {
  xsmall: {
    width: '4.2rem',
    height: '1.7rem',
    fontSize: '0.7rem',
    fontWeight: '600',
  },
  short: {
    width: '9.1rem',
    height: '2.7rem',
    padding: '0.3rem 0.6rem',
  },
  medium: {
    width: '10.7rem',
    height: '3.5rem',
    padding: '0.5rem 0rem',
  },
  long: {
    width: '22.6rem',
    height: '3.1rem',
    padding: '0.8rem 0rem',
  },
}

export const buttonWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: '0.6rem',
    fontSize: vars.font.body_12.fontSize,
    cursor: 'pointer',
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
      xsmall: buttonSizes.xsmall,
      short: buttonSizes.short,
      medium: buttonSizes.medium,
      long: buttonSizes.long,
    }
  },

  defaultVariants: {
    variant: 'enabled',
    size: 'long',
  },
});