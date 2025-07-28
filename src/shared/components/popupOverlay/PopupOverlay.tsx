import React from 'react';
import * as styles from '@shared/components/popupOverlay/PopupOverlay.css';
import { IcArrowLeft } from '@svg/index';
import Text from '@shared/components/text/Text';

interface PopupOverlayProps {
  openPopup?: boolean;
  top?: boolean;
  toptitle?:string;
  onClose: () => void;
  position?: 'center' | 'bottom';
  children: React.ReactNode;
}

export function PopupOverlay({ children,onClose,openPopup ,position,top=false,toptitle}: PopupOverlayProps) {
  if (!openPopup) {
    return null;
  }
  return (
    <div className={styles.container}>
      {top && <div className={styles.top}>
        <IcArrowLeft onClick={onClose}/>
        <Text tag="body_bold_19" color="white"
          className={styles.title}>{toptitle}</Text>
        <div/>
      </div>}
      <div className={styles.content({position})}
        onClick={(e) => e.stopPropagation()}
      >{children}</div>
    </div>
  );
};
