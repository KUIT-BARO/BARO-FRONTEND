import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

// PlaceReviewList 스타일
export const placeReviewListContainer = style({
  width: '100%',
  padding: '1.5rem 0',
  backgroundColor: vars.color.blue0,
});

export const placeReviewListHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '0 2.0rem',
  marginBottom: '2.7rem',
});

export const placeReviewItems = style({
  display: 'flex',
  padding: '0 2.0rem',
  gap: '0.8rem',
  overflowX: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

// PlaceReviewThumbnail 스타일
export const placeReviewWrapper = recipe({
  base: {
    borderRadius: '1.2rem',
    backgroundColor: vars.color.gray0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  variants: {
    size: {
      LARGE: {
        width: '34.0rem',
        height: '23.2rem',
      },
      SMALL: {
        width: '16.8rem',
        height: '16.8rem',
      },
    },
  },
});

export const placeReviewDesc = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
});

export const placeReviewRatingContainer = style({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',

  width: '100%',
  padding: '0.4rem 0 1.3rem 0',
});

export const placeReviewCountContainer = style({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

export const placeReviewCountIcon = style({
  alignContent: 'center',
  width: '1.6rem',
  height: '1.6rem',
  marginRight: '0.4rem',
});
