import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const itembox = style({
  padding: '0.4rem 0',

  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  alignSelf: 'stretch',
});

export const textStyle = style({
  whiteSpace: 'nowrap',
});

export const iconStyle = style({
  width: '1.8rem',
  height: '1.8rem',
});

export const thirdStyle = style({
  width: '32rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const minibutton = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',

    height: '2.4rem',
    padding: '0.2rem 1.1rem',
    flexShrink: 0,
    borderRadius: '10rem',
  },
  variants: {
    background: {
      PENDING: { background: vars.color.baroBlue },
      VOTING: { background: vars.color.yellow1 },
      CONFIRMED: { background: vars.color.red1 },
    },
  },
});
