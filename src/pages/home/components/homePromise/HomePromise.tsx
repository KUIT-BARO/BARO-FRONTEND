import * as styles from '@pages/home/components/homePromise/HomePromise.css';
import Text from '@shared/components/text/Text';
import { IcPinLocGray, IcPersonGray } from '@svg/index';
import { formatDateWithDay } from '@shared/utils/formatDateWithDay';
import type { UserHomePagePromiseDTO } from 'api/data-contracts';

export default function HomePromise({
  placeName,
  promiseName,
  promiseDate,
  promiseDay,
  promiseMember,
  promiseDday
}: UserHomePagePromiseDTO) {
  return (
    <div className={styles.promiseWrapper}>
      <div className={styles.placeNameContainer}>
        <IcPinLocGray className={styles.placeIcon} />
        <Text tag='body_10' color='gray3'>
          {placeName}
        </Text>
      </div>
      <Text tag='head_bold_24' color='baroBlue'>
        {promiseName}
      </Text>
      <Text tag='head_bold_24' color='black' className={styles.promiseDateText}>
        {promiseDate ? formatDateWithDay(promiseDate).slice(0, -3) : ''} ({promiseDay})
      </Text>
      <div className={styles.memberDdayContainer}>
        <div className={styles.promiseMemberInfo}>
          <IcPersonGray className={styles.memberIcon} />
          <Text tag='body_14' color='black'>
            {promiseMember}
          </Text>
        </div>
        <Text tag='body_14' color='white' className={styles.ddayText}>
          {Number.isFinite(promiseDday) ? `D-${promiseDday}` : ''}
        </Text>
      </div>
    </div>
  )
}
