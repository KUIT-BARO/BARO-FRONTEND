import * as styles from '@/pages/setting/component/SettingOption.css';
import Text from '@shared/components/text/Text';
import React from 'react';

interface SettingOptionProps {
  color: 'red' | 'black';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function SettingOption({ color, children, onClick }: SettingOptionProps) {
  const textColor = color === 'red' ? 'red1' : 'black';
  return (
    <div className={styles.container} onClick={onClick}><Text color={textColor} tag='body_17'>{children}</Text></div>
  )
}
