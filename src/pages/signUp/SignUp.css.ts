import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const container = style({
  padding: '0 2rem',

  background: `var(--Linear, linear-gradient(180deg, ${vars.color.baroBlue} 0%, ${vars.color.blue8} 100%))`,
});

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  minHeight: '100vh',
  gap: '3.4rem',
});
