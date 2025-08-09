import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '2.4rem',

  width: '100%',
  height: '100vh',
  padding: '12.4rem 2rem 0 2rem',

  background: `var(--Linear, linear-gradient(180deg, ${vars.color.baroBlue} 0%, ${vars.color.blue8} 100%))`,
});

export const subTitle = style({
  paddingBottom: '3.7rem',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  width: '100%',
});

export const input = style({
  width: '100%',
  height: '2.4rem',

  lineHeight: '2.4rem',
});

export const autoBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',

  padding: '1.2rem 0',
});

export const square = recipe({
  base: style({
    position: 'relative',

    width: '1.6rem',
    height: '1.6rem',

    borderRadius: '0.2rem',
    border: 'white 1px solid',

    cursor: 'pointer',
  }),
  variants: {
    checked: {
      true: style({
        backgroundColor: vars.color.white,

        '::after': {
          content: '✓',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          color: vars.color.baroBlue,
          fontSize: '1.5rem',
        },
      }),
      false: style({
        backgroundColor: 'transparent',
      }),
    },
  },
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  width: '100%',
});

export const signUpButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  width: '100%',
});

export const line = style({
  width: '6.4rem',
  height: '1px',

  backgroundColor: vars.color.blue1,
});
