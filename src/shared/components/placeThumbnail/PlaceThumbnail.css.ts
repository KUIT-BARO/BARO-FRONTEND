import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const placeThumbnailWrapper = recipe({
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
      large: {
        width: '34.0rem',
        height: '23.2rem',
      },
      small: {
        width: '16.8rem',
        height: '16.8rem',
      },
    },
  },
});

export const placeInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  fontSize: vars.font.body_bold_16.fontSize,
  color: vars.color.white,
});

export const placeNameContainer = style({
  textAlign: 'center',
  width: '70%',
  margin: '0',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
});

export const placeRatingContainer = style({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0.4rem 0 1.3rem 0',
  fontSize: vars.font.body_14.fontSize,
  color: vars.color.gray4,
});

export const placeSaveNumContainer = style({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  width: '100%',
  fontSize: vars.font.body_14.fontSize,
  color: vars.color.gray4,
});

export const placeSaveIcon = style({
  alignContent: 'center',
  width: '1.6rem',
  height: '1.6rem',
  marginRight: '0.4rem',
});
