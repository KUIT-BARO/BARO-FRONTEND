import React from 'react';

interface HeaderProps {
  leftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text?: string;
  rightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Header = ({ leftIcon: LeftIcon, text, rightIcon: RightIcon }: HeaderProps) => {
  return (
    <>
      <div>{LeftIcon && <LeftIcon width={24} height={24} />}</div>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{text}</div>
      <div>{RightIcon && <RightIcon width={24} height={24} />}</div>
    </>
  );
};

export default Header;
