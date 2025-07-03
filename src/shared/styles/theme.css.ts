import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#FFFFFF',
    black: '#000000',

    gray0: '#C1C1C1',
    gray1: '#919191',
    gray2: '#979797',
    gray3: '#121212',

    blue0: '#F4F8FB',
    blue1: ' #7BB2FF',
    blue2: '#6699FF',
    blue3: '#708AFF',
    blue4: '#EDF1FF',
    baroBlue: '#5175FF',

    yellow1: '#FB0',
    yellow2: '#FFFBDE',

    red1: '#FF6467',
    red2: '#F9D7D8',
  },

  font: {
    head_bold_16: { fontSize: '1.6rem', fontWeight: '600', lineHeight: '150%' },
    head_bold_18: { fontSize: '1.8rem', fontWeight: '600', lineHeight: '150%' },
    head_bold_22: { fontSize: '2.2rem', fontWeight: '600', lineHeight: '150%' },
    head_bold_24: { fontSize: '2.4rem', fontWeight: '600', lineHeight: '150%' },
    head_bold_36: { fontSize: '3.6rem', fontWeight: '700', lineHeight: '150%' },

    body_bold_11: { fontSize: '1.1rem', fontWeight: '700', lineHeight: '140%' },
    body_bold_12: { fontSize: '1.2rem', fontWeight: '600', lineHeight: '140%' },
    body_bold_13: { fontSize: '1.3rem', fontWeight: '600', lineHeight: '140%' },
    body_bold_14: { fontSize: '1.4rem', fontWeight: '600', lineHeight: '150%' },
    body_bold_16: { fontSize: '1.6rem', fontWeight: '600', lineHeight: '140%' },
    body_bold_19: { fontSize: '1.9rem', fontWeight: '600', lineHeight: '140%' },
    body_bold_20: { fontSize: '2.0rem', fontWeight: '600', lineHeight: '140%' },
    body_bold_22: { fontSize: '2.2rem', fontWeight: '600', lineHeight: '140%' },
    body_bold_25: { fontSize: '2.5rem', fontWeight: '600', lineHeight: '140%' },

    body_10: { fontSize: '1.0rem', fontWeight: '500', lineHeight: '140%' },
    body_12: { fontSize: '1.2rem', fontWeight: '500', lineHeight: '140%' },
    body_14: { fontSize: '1.4rem', fontWeight: '500', lineHeight: '140%' },
    body_16: { fontSize: '1.6rem', fontWeight: '500', lineHeight: '140%' },
    body_17: { fontSize: '1.7rem', fontWeight: '500', lineHeight: '140%' },

    body_thin_14: { fontSize: '1.4rem', fontWeight: '400', lineHeight: '140%' },
    body_thin_16: { fontSize: '1.6rem', fontWeight: '400', lineHeight: '140%' },
    body_thin_20: { fontSize: '2.0rem', fontWeight: '400', lineHeight: '140%' },
  },
});
