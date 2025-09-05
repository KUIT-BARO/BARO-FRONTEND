import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  minHeight: '100vh',
});

export const line = style({
  borderBottom: '1px solid #eee',
});

export const passwordChangeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.4rem',

  padding: '0 2rem',
});

export const withdrawalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.2rem',

  padding: '4.3rem 2rem 5rem 2rem',

  backgroundColor: vars.color.white,

  borderTopLeftRadius: '1.2rem',
  borderTopRightRadius: '1.2rem',
});

export const withdrawalTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  padding: '0 4.4rem',
});

export const withdrawalButtonContainer = style({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'space-evenly',

  width: '100%',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
