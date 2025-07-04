import * as styles from '@shared/components/button/Button.css';
import { type ButtonVariant, type ButtonSize, BUTTON_VARIANTS } from '@shared/constant/button';

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
  const customStyle = backgroundColor && variant === BUTTON_VARIANTS.ENABLED
    ? { backgroundColor }
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
