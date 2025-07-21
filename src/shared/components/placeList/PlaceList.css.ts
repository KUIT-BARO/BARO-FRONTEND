import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const placeListContainer = style({
  width: '100%',
  padding: '1.5rem 0',
  backgroundColor: vars.color.blue0,
});

export const placeListHeader = style({
  marginBottom: '2.7rem',
  padding: '0 2.0rem',
});

export const placeListTitle = style({
  margin: '0',
  fontSize: vars.font.head_bold_22.fontSize,
  fontWeight: vars.font.head_bold_22.fontWeight,
  color: vars.color.black,
});

export const placeListDescription = style({
  marginTop: '0.4rem',
  fontSize: vars.font.body_14.fontSize,
  color: vars.color.gray3,
});

export const placeListItems = style({
  display: 'flex',
  padding: '0 2.0rem',
  gap: '0.8rem',
  overflowX: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
