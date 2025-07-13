import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { textStyle } from '@shared/components/text/Text.css';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?:
    | 'head_bold_16'
    | 'head_bold_18'
    | 'head_bold_22'
    | 'head_bold_24'
    | 'head_bold_36'
    | 'body_bold_11'
    | 'body_bold_12'
    | 'body_bold_13'
    | 'body_bold_14'
    | 'body_bold_16'
    | 'body_bold_19'
    | 'body_bold_20'
    | 'body_bold_22'
    | 'body_bold_25'
    | 'body_10'
    | 'body_12'
    | 'body_14'
    | 'body_16'
    | 'body_17'
    | 'body_thin_14'
    | 'body_thin_16'
    | 'body_thin_20';
  color?:
    | 'black'
    | 'white'
    | 'gray0'
    | 'gray1'
    | 'gray2'
    | 'gray3'
    | 'gray4'
    | 'gray5'
    | 'blue0'
    | 'blue1'
    | 'blue2'
    | 'blue3'
    | 'baroBlue';
}

export default function Text({
  tag = 'body_16',
  color = 'black',
  children,
  className,
  ...props
}: TextProps) {
  return (
    <p className={clsx(className, textStyle({ tag, color }))} {...props}>
      {children}
    </p>
  );
}
