import React, { useState } from 'react';
import * as styles from '@shared/components/inputBar/InputBar.css';
import { IcSearch, IcScope, IcPinLocGray, IcPersonWhite, IcLockWhite } from '@svg/index';

interface SearchBarProps {
  leftIcon?: 'search' | 'scope' | 'location' | 'email' | 'password' | 'none';
  placeholder?: string;
  hasBackground?: boolean;
  backgroundColor?: 'gray6' | 'blue6';
  showMaxLength?: boolean;
  maxLength?: number;
  onSearch?: (_query: string) => void;
}

export default function InputBar({
  leftIcon = 'none',
  placeholder,
  hasBackground = true,
  backgroundColor = 'gray6',
  showMaxLength = false,
  maxLength,
  onSearch,
}: SearchBarProps ) {
  const [inputValue, setInputValue] = useState('');

  const iconMap = {
    search: IcSearch,
    scope: IcScope,
    location: IcPinLocGray,
    email: IcPersonWhite,
    password: IcLockWhite,
  } as const;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      if (onSearch) { onSearch(target.value); }
      target.value = '';
      setInputValue('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (maxLength && value.length > maxLength) {
      return;
    }
    setInputValue(value);
  };

  const getWrapperClass = () => {
    return styles.searchBarWrapper({
      hasBackground,
      backgroundColor: hasBackground ? backgroundColor : undefined,
    });
  };

  const getInputClass = () => {
    return styles.searchInput({
      hasBackground,
      backgroundColor: hasBackground ? backgroundColor : undefined,
    });
  };

  const renderIcon = () => {
    if (leftIcon === 'none') return null;
    const IconComponent = iconMap[leftIcon];
    return IconComponent ? <IconComponent className={styles.searchIcon} /> : null;
  };

  return (
    <div className={getWrapperClass()}>
      {renderIcon()}
      <input
        className={getInputClass()}
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {maxLength && showMaxLength && (
        <span className={styles.characterCount}>
          {inputValue.length}/{maxLength}
        </span>
      )}
    </div>
  )
}
