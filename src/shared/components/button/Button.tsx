import * as styles from '@shared/components/button/Button.css';

interface ButtonProps {
  variant?: 'enabled' | 'disabled' | 'white' | 'outlined';
  size?: 'xsmall' | 'short' | 'medium' | 'long';
  text: string;
  onClick?: () => void;
}

const Button = ({
  variant,
  size,
  text,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={styles.buttonWrapper({ variant, size })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;