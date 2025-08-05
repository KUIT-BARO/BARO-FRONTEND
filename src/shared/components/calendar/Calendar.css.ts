import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: '1.2rem',
  borderRadius: '15px',

  background: vars.color.white,
  fontFamily: 'Roboto',
  boxShadow: `0px 12px 16px -4px ${vars.color.gray0}, 0px 4px 6px -2px ${vars.color.gray0}`,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '29.6rem',
  height: '4.4rem',
});

export const monthMove = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.7rem',
});

export const arrow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.8rem',
  cursor: 'pointer',
  width: '24px',
  height: '24px',

  borderRadius: '50%',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: vars.color.blue0,
  },
});

export const weekdayContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const weekdayItem = style({
  textAlign: 'center',
  width: '3.2rem',
});

export const dateRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.2rem',

  padding: '0.8rem 0',
});

export const dateItem = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    width: '3.2rem',
    height: '3.2rem',

    cursor: 'pointer',
  },
  variants: {
    isToday: {
      True: {
        borderRadius: '99px',
        background: vars.color.gray2,
      },
      default: {},
    },
    isHighlighted: {
      True: {
        borderRadius: '99px',
        background: vars.color.baroBlue,
      },
      default: {},
    },
  },
});

export const dayText = recipe({
  base: {
    transform: 'translateY(1px)',
  },
  variants: {
    color: {
      white: {
        color: vars.color.white,
      },
      isMonth: {
        color: vars.color.gray4,
      },
      notMonth: {
        color: vars.color.gray1,
      },
    },
  },
});
