import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const categoriesInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 2rem',
  backgroundColor: vars.color.blue0,
  flex: 1,
});

export const categoriesTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginTop: '0.5rem',
});

export const categoriesGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignContent: 'flex-start',
  marginTop: '1.5rem',
  flex: 1,
  rowGap: '0.8rem',
});
