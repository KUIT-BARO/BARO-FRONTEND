import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const pinAddWrapper = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  // background: `linear-gradient(180deg, ${vars.color.baroBlue} 14.4%, ${vars.color.blue6} 38.9%, ${vars.color.white} 62.4%, ${vars.color.gray4} 120%) !important`,
  background: `var(--Linear, linear-gradient(180deg, #5175FF 0%, #CFDAE6 100%))`,
});

// export const pinAddContainer = style({
//   padding: '0',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '24px',
// });

export const submitButton = style({
  width: '100%',
  marginRight: '2.1rem',
  fontSize: vars.font.body_bold_16.fontSize,
  fontWeight: vars.font.body_bold_16.fontWeight,
  color: vars.color.white,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
});

export const pinReviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const locationSection = style({
  padding: '16px 20px',
  backgroundColor: vars.color.baroBlue,
  color: vars.color.white,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const locationText = style({
  fontSize: '16px',
  fontWeight: '500',
});

export const imageSection = style({
  width: '100%',
  height: '300px',
  backgroundColor: vars.color.gray0,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const placeholderImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const characterCount = style({
  position: 'absolute',
  bottom: '16px',
  right: '16px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: vars.color.white,
  padding: '4px 8px',
  borderRadius: '12px',
  fontSize: '12px',
});

export const imagePlaceholder = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
});

export const imagePlaceholderText = style({
  fontSize: '16px',
  color: vars.color.gray3,
  margin: '0',
  textAlign: 'center',
});

export const inputSection = style({
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});