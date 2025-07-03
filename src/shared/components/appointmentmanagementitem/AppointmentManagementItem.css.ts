import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: '15rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.8rem',
});

export const itembox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  alignSelf: 'stretch',
});

export const textStyle = style({
  fontFamily: 'Pretendard',
  fontFeatureSettings: "'liga' off, 'clig' off",
  letterSpacing: '-0.35px',
  whiteSpace: 'nowrap',
});

export const iconStyle = style({
  width: '1.8rem',
  height: '1.8rem',
  flexShrink: 0,
});
