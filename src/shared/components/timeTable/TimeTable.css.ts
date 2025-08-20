import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const slotWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '6.7rem',
    height: '3rem',
    border: `0.675px solid ${vars.color.gray2}`,
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.color.baroBlue,
      },
    },
    default: {
      backgroundColor: vars.color.blue0,
    },
  },
});

export const timeTableWrapper = style({
  display: 'flex',
  overflow: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: `${vars.color.gray0} transparent`,
  width: '100%',
  gap: '1rem',
});

export const columnWrapper = style({
  display: 'flex',
});

export const column = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const timeSlotWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const slotTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.45rem',
  marginTop: '2rem',
});
