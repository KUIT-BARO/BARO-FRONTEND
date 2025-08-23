import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const scheduleWrapper = style({
  display: 'flex',
  width: '100%',
  overflow: 'auto',

  gap: '1rem',

  scrollbarWidth: 'thin',
  scrollbarColor: `${vars.color.gray0} transparent`,
});

export const columnWrapper = style({
  display: 'flex',
});

export const slotWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',

    width: '6.7rem',
    height: '3rem',
    padding: '0.7rem 0.7rem 0 0.7rem',

    gap: '1rem',
    overflow: 'visible',
  },
  variants: {
    backgroundColor: {
      blue3: {
        backgroundColor: vars.color.blue3,
      },
      blue4: {
        backgroundColor: vars.color.blue4,
      },
      blue5: {
        backgroundColor: vars.color.blue5,
      },
      blue6: {
        backgroundColor: vars.color.blue6,
      },
      baroBlue: {
        backgroundColor: vars.color.baroBlue,
      },
      default: {
        backgroundColor: 'transparent',
        border: `0.675px solid ${vars.color.gray2}`,
        pointerEvents: 'none',
      },
    },
    isTitleSlot: {
      true: {
        zIndex: 10,
      },
    },
  },
});

export const column = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '1rem',
});

export const scheduleSlotWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});
