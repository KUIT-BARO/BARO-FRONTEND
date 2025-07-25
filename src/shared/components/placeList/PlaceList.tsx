import * as styles from '@shared/components/placeList/PlaceList.css';
import PlaceThumbnail from '@shared/components/placeThumbnail/PlaceThumbnail';
import Text from '@shared/components/text/Text';

interface Place {
  id: number;
  imageUrl: string;
  name: string;
  rating: number;
  saveNum: number;
}

interface PlaceListProps {
  category: string;
  description: string;
  places: Place[];
  thumbnailSize?: 'large' | 'small';
  onPlaceClick: (_placeId: number) => void;
}

export default function PlaceList({
  category,
  description,
  places = [],
  thumbnailSize = 'large',
  onPlaceClick,
}: PlaceListProps) {
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
          <div key={place.id}>
            <PlaceThumbnail
              size={thumbnailSize}
              placeImageUrl={place.imageUrl}
              placeName={place.name}
              placeRating={place.rating}
              placeSaveNum={place.saveNum}
              onClick={() => {
                onPlaceClick?.(place.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
