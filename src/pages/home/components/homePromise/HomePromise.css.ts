import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/theme.css';

export const promiseWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '1.7rem 4.1rem',
  borderRadius: '16px',
  // backgroundColor: vars.color.white,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
});

export const placeNameContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.8rem',
  gap: '0.4rem',
});

export const placeIcon = style({
  width: '1.6rem',
  height: '1.6rem',
});

export const promiseDateText = style({
  marginTop: '0.4rem',
  marginBottom: '0.8rem',
});

export const memberDdayContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const promiseMemberInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const memberIcon = style({
  width: '1.8rem',
  height: '1.8rem',
});

export const ddayText = style({
  marginRight: '-1.5rem',
  padding: '0.2rem 1.1rem',
  borderRadius: '100px',
  backgroundColor: vars.color.red1,
});
