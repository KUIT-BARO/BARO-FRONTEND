import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',

  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: vars.color.black,
  opacity: '0.8',

  zIndex: 9999,
});

export const content = recipe({
  base: { width: '100%' },
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
      },
    },
  },
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
