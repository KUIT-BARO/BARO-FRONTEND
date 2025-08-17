import * as styles from '@shared/components/placeReview/PlaceReview.css';
import Text from '@shared/components/text/Text';
import { IcSaveWhite } from '@svg/index';
import type { PlaceData } from '@shared/components/placeReview/mockup';
import type { placeReviewSize } from '@shared/components/placeReview/types/placeReviewSize';
import { useNavigate } from 'react-router-dom';

interface PlaceReviewProps {
  size?: placeReviewSize;
  onClick: () => void;
  placeImageUrl?: string;
  placeName: string;
  placeRating: number;
  placeReviewCount: number;
}

interface PlaceReviewListProps {
  reviewType: string;
  description: string;
  places: PlaceData[];
  placeReviewSize?: placeReviewSize;
}

export const PlaceReview = ({
  size = 'LARGE',
  onClick,
  placeImageUrl,
  placeName,
  placeRating,
  placeReviewCount,
}: PlaceReviewProps) => {
  return (
    <div
      className={styles.placeReviewWrapper({ size })}
      onClick={onClick}
      style={{
        backgroundImage: `url(${placeImageUrl})`,
      }}
    >
      <div className={styles.placeReviewDesc}>
        <Text tag="body_bold_16" color="white">
          {placeName}
        </Text>
        <span className={styles.placeReviewRatingContainer}>
          <Text tag="body_14" color="gray4">
            {placeRating}
          </Text>

          {/* TODO: Star 컴포넌트 추가 필요 */}
        </span>
        <span className={styles.placeReviewCountContainer}>
          <IcSaveWhite className={styles.placeReviewCountIcon} />
          <Text tag="body_14" color="gray4">
            ({placeReviewCount})
          </Text>
        </span>
      </div>
    </div>
  );
};

export default function PlaceReviewList({
  reviewType,
  description,
  places,
  placeReviewSize = 'LARGE',
}: PlaceReviewListProps) {
  const navigate = useNavigate();

  const handlePlaceClick = (placeId: number, placeName: string) => {
    navigate(`/place/${placeId}/pins?placeName=${placeName}`);
  };

  return (
    <div className={styles.placeReviewListContainer}>
      <div className={styles.placeReviewListHeader}>
        <Text tag="head_bold_22" color="black">
          {reviewType}
        </Text>
        <Text tag="body_14" color="gray3">
          {description}
        </Text>
      </div>

      <div className={styles.placeReviewItems}>
        {places.map(place => (
          <div key={place.placeId}>
            <PlaceReview
              size={placeReviewSize}
              placeImageUrl={place.placeImageUrl}
              placeName={place.placeName}
              placeRating={place.placeRating}
              placeReviewCount={place.placeReviewCount}
              onClick={() => {
                handlePlaceClick(place.placeId, place.placeName);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
