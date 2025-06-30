import { style } from '@vanilla-extract/css';

//maxWidth 432px 정도를 rem으로 환산하면 27rem (모바일 기준)
//패딩 20px을 rem으로 환산하면 1.25rem
export const container = style({
  width: '100%',
  maxWidth: '27rem',
  padding: '0 1.25rem',
  margin: '0 auto',
});
