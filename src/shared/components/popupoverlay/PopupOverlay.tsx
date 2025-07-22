import React from 'react';
import * as styles from '@shared/components/popupoverlay/PopupOverlay.css';
import { IcArrowLeft } from '@svg/index';
import Text from '@shared/components/text/Text';

interface PopupOverlayProps {
  open?: boolean;
  top?: boolean;
  toptitle?:string;
  onClose: () => void;
  position?: 'center' | 'bottom';
  children: React.ReactNode;
}

const PopupOverlay: React.FC<PopupOverlayProps> =
  ({ children,onClose,open ,position,top=false,toptitle}) => {
    if (!open) {
      return null;
    }
    return (
      <div className={styles.container} onClick={onClose}>
        {top && <div className={styles.top}>
          <IcArrowLeft/>
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

export default PopupOverlay;