import { vars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  backgroundColor: vars.color.blue0,
  padding: '0 2rem',
  display: 'flex',
  flexDirection: 'column',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2.7rem 0',
});

export const selectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  paddingBottom: '5.2rem',
});

export const selectTimeContainer = style({
  display: 'flex',
  gap: '2.1rem',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.4rem',
  paddingBottom: '5.4rem',
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.6rem 0',
});

export const selectField = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const select = recipe({
  base: {
    width: '10.4rem',
    padding: '0.9rem 2rem',

    borderRadius: '1rem',
    background: vars.color.white,
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.05)',

    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.2rem center',
  },
  variants: {
    type: {
      day: {
        backgroundImage: `url(/icon/ic_arrow_day.svg)`,
      },
      time: {
        backgroundImage: `url(/icon/ic_arrow_time.svg)`,
      },
    },
  },
});

//select에 컴포넌트가 올 수 없다고함.
export const selectText = style({
  fontSize: '1.6rem',
});

//option에는 컴포넌트가 올 수 없다고함.
export const optionText = style({
  ...vars.font.body_16,
});
