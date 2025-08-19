import React from 'react';
import * as styles from '@shared/components/popupOverlay/PopupOverlay.css';
import { IcArrowLeft } from '@svg/index';
import Text from '@shared/components/text/Text';

interface PopupOverlayProps {
  open?: boolean;
  top?: boolean;
  toptitle?: string;
  onClose: () => void;
  position?: 'center' | 'bottom';
  children: React.ReactNode;
}

export default function PopupOverlay({
  children,
  onClose,
  open = true,
  position,
  top = false,
  toptitle,
}: PopupOverlayProps) {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className={styles.container} onClick={onClose}></div>
      {top && (
        <div className={styles.top}>
          <IcArrowLeft />
          <Text tag="body_bold_19" color="white" className={styles.title}>
            {toptitle}
          </Text>
          <div />
        </div>
      )}
      <div className={styles.content({ position })} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </>
  );
}
