import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const popupContents = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '8.2rem 2.4rem 1.4rem 2.4rem',
  backgroundColor: vars.color.white,
  borderRadius: '16px 16px 0 0',
});

export const reviewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.6rem',
});

export const categoriesContainer = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
  marginTop: '3.2rem',
});

export const categoriesGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '4.5rem',
  rowGap: '0.8rem',
});
