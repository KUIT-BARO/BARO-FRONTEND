import * as styles from '@shared/components/button/Button.css';
import { type ButtonVariant, type ButtonSize, BUTTON_VARIANTS, BUTTON_SIZES } from '@shared/components/button/constant/button';
import { vars } from '@shared/styles/theme.css';

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  text: string;
  onClick?: () => void;
  backgroundColor?: string;
}

const Button = ({
  variant,
  size,
  text,
  onClick,
  backgroundColor,
}: ButtonProps) => {
  const textColor = size === BUTTON_SIZES.SMALL && backgroundColor
    ? backgroundColor === vars.color.white
      ? vars.color.baroBlue
      : backgroundColor === vars.color.baroBlue
        ? vars.color.white
        : undefined
    : undefined;

  const customStyle = backgroundColor && variant === BUTTON_VARIANTS.ENABLED
    ? {
      backgroundColor,
      ...(textColor && { color: textColor }),
    }
    : {};

  return (
    <button
      className={styles.buttonWrapper({ variant, size })}
      style={customStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
