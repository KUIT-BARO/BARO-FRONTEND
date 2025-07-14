import type { AppointmentManagementItemProps } from '@shared/components/appointmentmanagementbox/appointmentmanagementitemtype/AppointmentManagementItem.type';
import * as styles from '@shared/components/appointmentmanagementbox/AppointmentManagementBox.css';
import AppointmentManagementItem from '@shared/components/appointmentmanagementitem/AppointmentManagementItem';
import { IcArrow } from '@svg/index';
import Text from '@shared/components/text/Text';


export default function AppointmentManagementBox(props: AppointmentManagementItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection({ background: props.status })}>
        <Text tag="body_bold_20" color="black">{props.promiseName}</Text>
        <IcArrow className={styles.imgStyle}/>
      </div>
      <div className={styles.contentSection}>
        <AppointmentManagementItem {...props} />
      </div>
    </div>
  )
}
