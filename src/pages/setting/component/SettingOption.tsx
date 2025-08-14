import * as styles from '@/pages/setting/component/SettingOption.css';
import Text from '@shared/components/text/Text';
import React from 'react';

interface SettingOptionProps {
  color: 'red' | 'black';
  children: React.ReactNode;
}

export default function SettingOption({ color, children }: SettingOptionProps) {
  const textColor = color === 'red' ? 'red1' : 'black';
  return (
    <div className={styles.container}><Text color={textColor} tag='body_17'>{children}</Text></div>
  )
}
