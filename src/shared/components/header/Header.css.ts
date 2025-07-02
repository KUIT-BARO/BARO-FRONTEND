import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const headerWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    width: '100%',
    height: '9.8rem',
  },
  variants: {
    background: {
      blue0: {
        background: vars.color.blue0,
      },
      baroblue: {
        background: vars.color.baroBlue,
      },
    },
  },
});

export const iconWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.1rem',
    cursor: 'pointer',
  },
  variants: {
    type: {
      icon: {
        width: '4.4rem',
        height: '4.4rem',
      },
      logo: {
        width: '6rem',
        height: '5rem',
      },
    },
  },
  defaultVariants: {
    type: 'icon',
  },
});
