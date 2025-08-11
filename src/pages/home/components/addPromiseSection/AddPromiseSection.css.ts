import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const addIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const addPromiseButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  width: '100%',
  height: '12.1rem',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  boxShadow: `0 0 4px 0 ${vars.color.blue2}`,
  cursor: 'pointer',
});
