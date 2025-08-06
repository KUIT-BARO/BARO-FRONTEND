import React from 'react';
import * as styles from '@shared/components/container/Container.css';
import { clsx } from 'clsx';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export default function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={clsx(styles.container, className)} {...rest}>
      {children}
    </div>
  );
}