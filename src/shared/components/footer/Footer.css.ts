import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const footerWrapper = style({
  position: 'sticky',
  bottom: '0',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '3.3rem',

  height: '8.4rem',
  padding: '1rem 2.6rem',

  border: `1px solid ${vars.color.gray0}`,
  background: `${vars.color.white}`,
});

export const menuWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '0.3rem',

  cursor: 'pointer',
});

export const icon = style({
  width: '2.2rem',
  height: '2.2rem',
});
