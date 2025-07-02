import React from 'react';
import * as styles from '@shared/components/header/Header.css';
import Text from '@shared/components/text/Text';

interface HeaderProps {
  background?: 'blue0' | 'baroblue';
  leftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClickLeftIcon?: () => void;
  leftIconType?: HeaderIconType;
  text?: string;
  rightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClickRightIcon?: () => void;
}

type HeaderIconType = 'icon' | 'logo';

const Header = ({
  background = 'blue0',
  leftIcon: LeftIcon,
  leftIconType = 'icon',
  text,
  rightIcon: RightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}: HeaderProps) => {
  const leftIconSizeWidth = leftIconType === 'logo' ? '5rem' : '2.2rem';
  const leftIconSizeHeight = leftIconType === 'logo' ? '2.7rem' : '2.2rem';

  return (
    <div className={styles.headerWrapper({ background })}>
      <div className={styles.iconWrapper({ type: leftIconType })}>
        {LeftIcon && (
          <LeftIcon
            width={leftIconSizeWidth}
            height={leftIconSizeHeight}
            onClick={onClickLeftIcon}
          />
        )}
      </div>
      <div>{text && <Text tag="body_bold_19">{text}</Text>}</div>
      <div className={styles.iconWrapper({ type: 'icon' })}>
        {RightIcon && <RightIcon width="2.2rem" height="2.2rem" onClick={onClickRightIcon} />}
      </div>
    </div>
  );
};

export default Header;
