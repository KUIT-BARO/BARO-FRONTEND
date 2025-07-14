import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  width: '36.2rem',
  height: '19.9rem',

  background: vars.color.white,
  boxShadow: `0px 0px 4px 0px ${vars.color.borderline}`,
  borderRadius: '10px',
});

export const topBox = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: '6.4rem',
    padding: '1.8rem 2.6rem',
    boxSizing: 'border-box',
  },
  variants: {
    background: {
      suggestedPromises: { background: vars.color.blue4 },
      votingPromises: { background: vars.color.yellow2 },
      confirmedPromises: { background: vars.color.red2 },
    },
  },
});

export const bottomBox = style({
  display: 'flex',

  width: '100%',
  height: '13.5rem',
  padding: '2.6rem 2.8rem',
  boxSizing: 'border-box',
});

export const imgStyle = style({
  width: '1rem',
  height: '1.9rem',
});
