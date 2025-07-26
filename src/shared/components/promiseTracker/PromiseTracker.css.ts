import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@shared/styles/theme.css';

export const trackerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '1.6rem',
  backgroundColor: vars.color.blue0,
});

export const avatarsWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.3rem',
  transition: 'all 0.3s ease',
});

export const avatarGroup = style({
  display: 'flex',
  gap: '0.1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
});

export const avatarContainer = recipe({
  base: {
    position: 'relative',
    width: '4.125rem',
    height: '4.622rem',
    transition: 'all 0.3s ease',
  },
  variants: {
    expanded: {
      false: {
        marginLeft: '-2.4rem',
        '&:first-child': {
          marginLeft: '0',
        },
      },
    },
  },
});

export const crown = style({
  position: 'absolute',
  width: '1.8rem',
  height: '1.8rem',
  top: '-1.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 3,
});

export const avatar = style({
  position: 'absolute',
  width: '3.8rem',
  height: '3.4rem',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
});

export const avatarBackground = style({
  position: 'absolute',
  width: '4.125rem',
  height: '4.622rem',
  top: '50%',
  left: '50%',
  transform: 'translate(-49%, -45%)',
  zIndex: 1,
});

export const progressContainer = recipe({
  base: {
    width: '100%',
    height: '1.4rem',
    marginBottom: '0.8rem',
    borderRadius: '24px',
  },
  variants: {
    variant: {
      PENDING: {
        backgroundColor: vars.color.blue4,
      },
      VOTING: {
        backgroundColor: vars.color.yellow1,
      },
    },
  },
});

export const progressBar = recipe({
  base: {
    height: '100%',
    borderRadius: '24px',
    transition: 'width 0.4s ease',
  },
  variants: {
    variant: {
      PENDING: {
        backgroundColor: vars.color.baroBlue,
      },
      VOTING: {
        backgroundColor: vars.color.yellow0,
      },
    },
  },
});

export const counterContainer = style({
  display: 'flex',
  alignSelf: 'flex-end',
  gap: '0.4rem',
  color: vars.color.gray4,
});

export const selected = recipe({
  variants: {
    variant: {
      PENDING: {
        color: vars.color.baroBlue,
      },
      VOTING: {
        color: vars.color.yellow0,
      },
    },
  },
});
