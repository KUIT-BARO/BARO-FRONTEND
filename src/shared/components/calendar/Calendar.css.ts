import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: '1.2rem',
  borderRadius: '15px',

  background: vars.color.white,

  boxShadow: `0px 12px 16px -4px ${vars.color.calendarborder1}, 0px 4px 6px -2px ${vars.color.calendarborder2}`,
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
  padding: '0.8rem',
});

export const weekdayContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const calendarTexts = style({
  fontFamily: 'Roboto',
});

export const weekdayItem = style({
  fontFamily: 'Roboto',

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
        background: vars.color.isToday,
      },
      default: {},
    },
    isSelected: {
      True: {
        borderRadius: '99px',
        background: vars.color.calendarText,
      },
      default: {},
    },
    isInRange: {
      True: {
        borderRadius: '99px',
        background: vars.color.calendarText,
      },
      default: {},
    },
  },
});

export const dayText = style({
  transform: 'translateY(1px)',
});
