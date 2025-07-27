import * as styles from '@shared/components/placeList/PlaceList.css';
import PlaceThumbnail from '@shared/components/placeThumbnail/PlaceThumbnail';
import Text from '@shared/components/text/Text';
import type { PlaceData } from '@shared/components/placeList/mockup';
import { useNavigate } from 'react-router-dom';

interface PlaceListProps {
  category: string;
  description: string;
  places: PlaceData[];
  thumbnailSize?: 'large' | 'small';
}

export default function PlaceList({
  category,
  description,
  places,
  thumbnailSize = 'large',
}: PlaceListProps) {
  const navigate = useNavigate();

  const handlePlaceClick = (placeId: number) => {
    navigate(`/place/${placeId}/reviews`);
  };

  return (
    <div className={styles.placeListContainer}>
      <div className={styles.placeListHeader}>
        <div>
          <Text className={styles.placeListTitle} tag='head_bold_22'>
            {category}
          </Text>
          <Text className={styles.placeListDescription} tag='body_14' color='gray4'>
            {description}
          </Text>
        </div>
      </div>

      <div className={styles.placeListItems}>
        {places.map((place) => (
          <div key={place.placeId}>
            <PlaceThumbnail
              size={thumbnailSize}
              placeImageUrl={place.imageUrl}
              placeName={place.placeName}
              placeRating={place.rating}
              placeSaveNum={place.saveNum}
              onClick={() => {
                handlePlaceClick(place.placeId);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
