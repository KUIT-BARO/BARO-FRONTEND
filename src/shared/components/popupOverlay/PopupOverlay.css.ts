import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  position: 'fixed',
  inset: '0',

  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: 9999,
});

export const content = recipe({
  base: { width: '100%', opacity: '1', zIndex: '1000' },
  variants: {
    position: {
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      bottom: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
      },
    },
  },
});

export const dim = style({
  position: 'absolute',
  inset: '0',

  backgroundColor: vars.color.black,
  opacity: '0.8',
});

export const top = style({
  position: 'fixed',
  top: '0',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  padding: '0 16px',
});
