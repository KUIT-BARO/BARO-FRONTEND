import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

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
  color: vars.color.gray3,
  fontFamily: 'Pretendard',
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontSize: vars.font.body_thin_14.fontSize,
  fontWeight: vars.font.body_thin_14.fontWeight,
  lineHeight: vars.font.body_thin_14.lineHeight,
  letterSpacing: '-0.35px',
  whiteSpace: 'nowrap',
});

export const iconStyle = style({
  width: '1.8rem',
  height: '1.8rem',
  flexShrink: 0,
});
