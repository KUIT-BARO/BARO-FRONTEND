import * as styles from '@pages/explore/Explore.css';
import PlaceReviewList from '@shared/components/placeReview/PlaceReview';
import { reviewCategories } from '@pages/explore/mockup';

export default function ExplorePlaces() {
  return (
    <div className={styles.explorePlaces}>
      {reviewCategories.map((category, index) => (
        <PlaceReviewList
          key={index}
          reviewType={category.reviewType}
          description={category.description}
          places={category.places}
          placeReviewSize={category.placeReviewSize}
        />
      ))}
    </div>
  );
}
