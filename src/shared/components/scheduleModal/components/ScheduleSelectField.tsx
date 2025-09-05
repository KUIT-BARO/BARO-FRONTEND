import React from 'react'
import Text from '@shared/components/text/Text'
import SelectFieldContent from '../constants/SelectFieldContent';
import * as styles from '@shared/components/scheduleModal/ScheduleModal.css';
import clsx from 'clsx';

interface ScheduleSelectFieldProps {
  label: string
  value: string | number;
  onChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
  type: 'day' | 'time';
}

export default function ScheduleSelectField({ label, value, onChange, type }: ScheduleSelectFieldProps) {
  return (
    <div className={styles.selectField}>
      <Text tag='body_bold_19'>{label}</Text>
      <select value={value} onChange={onChange} className={clsx(styles.select({ type }), styles.selectText)}>
        {SelectFieldContent({ type })}
      </select>
    </div>
  )
}
