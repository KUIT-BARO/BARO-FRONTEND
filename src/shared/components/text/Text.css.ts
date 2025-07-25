import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const textStyle = recipe({
  variants: {
    tag: {
      head_bold_16: vars.font.head_bold_16,
      head_bold_18: vars.font.head_bold_18,
      head_bold_22: vars.font.head_bold_22,
      head_bold_24: vars.font.head_bold_24,
      head_bold_36: vars.font.head_bold_36,

      body_bold_11: vars.font.body_bold_11,
      body_bold_12: vars.font.body_bold_12,
      body_bold_13: vars.font.body_bold_13,
      body_bold_14: vars.font.body_bold_14,
      body_bold_16: vars.font.body_bold_16,
      body_bold_19: vars.font.body_bold_19,
      body_bold_20: vars.font.body_bold_20,
      body_bold_22: vars.font.body_bold_22,
      body_bold_25: vars.font.body_bold_25,

      body_10: vars.font.body_10,
      body_12: vars.font.body_12,
      body_14: vars.font.body_14,
      body_16: vars.font.body_16,
      body_17: vars.font.body_17,

      body_thin_14: vars.font.body_thin_14,
      body_thin_16: vars.font.body_thin_16,
      body_thin_20: vars.font.body_thin_20,
    },
    color: {
      black: { color: vars.color.black },
      white: { color: vars.color.white },

      gray0: { color: vars.color.gray0 },
      gray1: { color: vars.color.gray1 },
      gray2: { color: vars.color.gray2 },
      gray3: { color: vars.color.gray3 },
      gray4: { color: vars.color.gray4 },
      gray5: { color: vars.color.gray5 },

      blue0: { color: vars.color.blue0 },
      blue1: { color: vars.color.blue1 },
      blue2: { color: vars.color.blue2 },
      blue3: { color: vars.color.blue3 },
      baroBlue: { color: vars.color.baroBlue },

      red0: { color: vars.color.red0 },
    },
  },
});
