import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const popupContents = style({
  backgroundColor: vars.color.white,
  borderRadius: '16px 16px 0 0',
  padding: '8.2rem 2.4rem 1.4rem 2.4rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const reviewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const scoreContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const categoriesWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginTop: '3.2rem',
});

export const categoriesGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignContent: 'flex-start',
  marginBottom: '4.5rem',
  rowGap: '0.8rem',
});
