import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const stepWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: ' 0 1.6rem',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const stepSectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.6rem',
  minHeight: 'calc(100vh - 18.8rem)',
});

export const buttonWrapper = style({
  width: '100%',
  position: 'sticky',
  bottom: '0',
  left: '0',
  right: '0',

  paddingBottom: '1.25rem',
  background: vars.color.blue0,
});

export const calendarWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
});

export const selectedPlaces = style({
  marginTop: '1rem',
  padding: '1rem',
  backgroundColor: '#f5f5f5',
  borderRadius: '0.5rem',
});

export const selectedPlace = style({
  padding: '0.5rem 0',
  borderBottom: '1px solid #ddd',
  ':last-child': {
    borderBottom: 'none',
  },
});

export const mapWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const placeListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const placeList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.1rem',
});

export const placeWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2em',
    padding: '2.4rem 2rem',
    borderRadius: '1rem',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.color.blue5,
        border: `1px solid ${vars.color.blue0}`,
      },
      false: {
        backgroundColor: vars.color.blue0,
        border: `1px solid ${vars.color.blue5}`,
      },
    },
  },
});

export const placeNameWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const confirmContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '3.2rem 2rem',
});

export const confirmDetailWrapper = style({
  display: 'flex',
  backgroundColor: vars.color.blue0,
  borderRadius: '1rem',
  padding: '3.2rem 1.6rem',
});

export const confirmButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  backgroundColor: 'white',
  zIndex: '1000',
});
