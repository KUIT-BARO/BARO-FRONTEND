import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const categoryWrapper = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '0.4rem 1rem',
    borderRadius: '1.5rem',
    boxSizing: 'border-box',
  },
  variants: {
    type: {
      normal: { backgroundColor: `${vars.color.baroBlue}` },
      outline: {
        backgroundColor: 'inherit',
        border: `1.5px solid ${vars.color.baroBlue}`,
      },
    },
  },
  defaultVariants: {
    type: 'normal',
  },
});
