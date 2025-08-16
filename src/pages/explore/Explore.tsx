import * as styles from '@pages/explore/Explore.css';
import ExploreHeader from '@pages/explore/ExploreHeader';
import ExploreContent from '@pages/explore/ExploreContent';
import ExplorePlaces from '@pages/explore/ExplorePlaces';

export default function Explore() {
  return (
    <div className={styles.exploreWrapper}>
      <ExploreHeader />
      <ExploreContent />
      <ExplorePlaces />
    </div>
  );
}
