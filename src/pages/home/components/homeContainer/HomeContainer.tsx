import * as styles from '@pages/home/components/homeContainer/HomeContainer.css';
import Text from '@shared/components/text/Text';
import Container from '@shared/components/container/Container';
import HomePromise from '@pages/home/components/homePromise/HomePromise';
import HomeAddPromise from '@pages/home/components/homeAddPromise/HomeAddPromise';
import { type HomePromiseDTO, type HomeResponseDTO } from '@pages/home/types/HomeData';

interface HomeContainerProps {
  homeData: HomeResponseDTO | null;
}

export default function HomeContainer({ homeData }: HomeContainerProps) {
  if (!homeData || !homeData.promiseDTOs || homeData.promiseDTOs.length === 0) {
    return (
      <Container className={styles.homeContainer}>
        <Text tag='head_bold_36' color='white'>
          {homeData?.userName || '사용자'} 님
        </Text>
        <Text tag='head_bold_24' color='white' className={styles.noPromisesText}>
          지금은 예정된 약속이 없어요
        </Text>
        <img 
          src='/icon/ic_note_pen.svg'
          alt='note image'
          className={styles.noPromisesImage}
        />
        <HomeAddPromise />
      </Container>
    );
  } else {
    return (
      <Container className={styles.homeContainer}>
        {homeData.fastestDday && (
          <div className={styles.fastestDdayText}>
            D-{homeData.fastestDday}
          </div>
        )}
        <div className={styles.promisesList}>
          {homeData.promiseDTOs.map((promise: HomePromiseDTO) => {
            return (
              <HomePromise
                key={promise.promiseId}
                placeName={promise.placeName || ''}
                promiseName={promise.promiseName || ''}
                promiseDate={promise.promiseDate || ''}
                promiseDay={promise.promiseDay || ''}
                promiseMember={promise.promiseMember || ''}
                promiseDday={promise.promiseDday || 0}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}
