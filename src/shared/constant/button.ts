export const BUTTON_VARIANTS = {
  ENABLED: 'enabled',
  DISABLED: 'disabled',
  WHITE: 'white',
  OUTLINED: 'outlined',
} as const;

export const BUTTON_SIZES = {
  LONG: 'long',
  SHORT: 'short',
  SHORT_S: 'short_s',
  XSMALL: 'xsmall',
  CATEGORY: 'category',
  CANCEL: 'cancel',
} as const;

export type ButtonVariant = typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];