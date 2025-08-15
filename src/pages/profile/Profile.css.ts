import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const profileImageEdit = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: ' 4rem 0',
});

export const profileImage = style({
  position: 'relative',
});

export const profileImageIcon = style({
  width: '9.6rem',
  height: '8.4rem',
});

export const editIcon = style({
  position: 'absolute',
  bottom: '0',
  right: '0.5rem',
});

export const profileNameEdit = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
  gap: '4.5rem',
});

export const profileNameText = style({
  whiteSpace: 'nowrap',
});
