import * as styles from '@pages/explore/Explore.css';
import PlaceReviewList from '@shared/components/placeReview/PlaceReview';
import { mockupReviews } from '@pages/explore/mockup';

export default function ExplorePlaces() {
  return (
    <div className={styles.explorePlaces}>
      {mockupReviews.map((category, index) => (
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
