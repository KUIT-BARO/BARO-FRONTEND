import React from 'react';
import * as styles from '@shared/components/container/Container.css';
import { clsx } from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  );
}