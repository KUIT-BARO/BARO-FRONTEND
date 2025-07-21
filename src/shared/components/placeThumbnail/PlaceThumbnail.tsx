import * as styles from '@shared/components/placeThumbnail/PlaceThumbnail.css';
import Text from '@shared/components/text/Text';
import { IcSaveWhite } from '@svg/index'

type PlaceThumbnailSize = 'large' | 'small';

interface PlaceThumbnailProps {
  size?: PlaceThumbnailSize;
  onClick?: () => void;
  placeImageUrl?: string;
  placeName?: string;
  placeRating?: number;
  placeSaveNum?: number;
}

export default function PlaceThumbnail({
  size = 'large',
  onClick,
  placeImageUrl,
  placeName,
  placeRating = 0.0,
  placeSaveNum = 0,
}: PlaceThumbnailProps) {
  return (
    <div
      className={styles.placeThumbnailWrapper({ size })}
      onClick={onClick}
      style={{
        backgroundImage: `url(${placeImageUrl})`,
      }}
    >
      <div className={styles.placeInfoWrapper}>
        <Text className={styles.placeNameContainer} tag='body_bold_16' color='white'>
          {placeName}
        </Text>
        <span className={styles.placeRatingContainer}>
          {placeRating}
          {/* Star 컴포넌트 추가 필요 */}
        </span>
        <span className={styles.placeSaveNumContainer}>
          <IcSaveWhite className={styles.placeSaveIcon} />
          ({placeSaveNum})
        </span>
      </div>
    </div>
  );
}
