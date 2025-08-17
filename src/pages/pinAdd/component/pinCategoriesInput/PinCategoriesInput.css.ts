import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const categoriesInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '0 2rem',
  backgroundColor: vars.color.blue0,
});

export const categoriesTitle = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  marginTop: '0.5rem',
});

export const categoriesGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  justifyContent: 'space-between',
  marginTop: '1.5rem',
  rowGap: '0.8rem',
});
