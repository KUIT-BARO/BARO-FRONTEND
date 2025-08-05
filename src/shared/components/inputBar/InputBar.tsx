import React from 'react';
import * as styles from '@shared/components/inputBar/InputBar.css';
import { IcSearch, IcScope, IcPinLocGray, IcPersonWhite, IcLockWhite } from '@svg/index';

interface InputBarProps {
  leftIcon?: 'search' | 'scope' | 'location' | 'email' | 'password' | 'none';
  placeholder?: string;
  hasBackground?: boolean;
  backgroundColor?: 'gray6' | 'blue6';
  showMaxLength?: boolean;
  maxLength?: number;
  value?: string;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function InputBar({
  leftIcon = 'none',
  placeholder,
  hasBackground = true,
  backgroundColor = 'gray6',
  showMaxLength = false,
  maxLength,
  value = '',
  onChange,
  props,
}: InputBarProps) {
  const iconMap = {
    search: IcSearch,
    scope: IcScope,
    location: IcPinLocGray,
    email: IcPersonWhite,
    password: IcLockWhite,
  } as const;

  const getWrapperClass = () => {
    return styles.inputBarWrapper({
      hasBackground,
      backgroundColor: hasBackground ? backgroundColor : undefined,
    });
  };

  const getInputClass = () => {
    return styles.textInput({
      hasBackground,
      backgroundColor: hasBackground ? backgroundColor : undefined,
    });
  };

  const renderIcon = () => {
    if (leftIcon === 'none') return null;
    const Icon = iconMap[leftIcon];
    return Icon ? <Icon className={styles.leftIcon} /> : null;
  };

  return (
    <div className={getWrapperClass()}>
      {renderIcon()}
      <input
        className={getInputClass()}
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        {...props}
      />
      {maxLength && showMaxLength && (
        <span className={styles.characterCount}>
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  );
}
