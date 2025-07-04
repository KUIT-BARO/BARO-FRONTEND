import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const minibutton = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    position: 'absolute',
    right: '2.2rem',
    bottom: '2.2rem',

    width: '4.6rem',
    height: '2.4rem',
    padding: '0.2rem 1.1rem',
    flexShrink: 0,
    borderRadius: '10rem',
  },
  variants: {
    background: {
      suggestedPromises: { background: vars.color.baroBlue },
      votingPromises: { background: vars.color.yellow1 },
      confirmedPromises: { background: vars.color.red1 },
    },
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  width: '36.2rem',
  height: '19.9rem',
  boxShadow: '0px 0px 4px 0px #D7DEF7',
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
  position: 'relative',

  width: '100%',
  height: '13.5rem',
  padding: '2.6rem 2.8rem',
  boxSizing: 'border-box',
});

export const imgStyle = style({
  width: '1rem',
  height: '1.9rem',
  flexShrink: 0,
});
