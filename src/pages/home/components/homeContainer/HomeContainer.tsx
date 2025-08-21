import * as styles from '@pages/home/components/homeContainer/HomeContainer.css';
import Text from '@shared/components/text/Text';
import Container from '@shared/components/container/Container';
import HomePromise from '@pages/home/components/homePromise/HomePromise';
import AddPromise from '@pages/home/components/addPromiseSection/AddPromiseSection';
import type { UserHomePageResponseDTO, UserHomePagePromiseDTO } from 'api/data-contracts';

interface HomeContainerProps {
  homeData: UserHomePageResponseDTO | null;
}

export default function HomeContainer({ homeData }: HomeContainerProps) {


  const hasNoPromises = !homeData?.promiseDTOs?.length;

  return (
    <Container className={styles.homeContainer}>
      {hasNoPromises ? (
        <>
          <Text tag='head_bold_36' color='white'>
            {homeData?.userName} 님
          </Text>
          <Text tag='head_bold_24' color='white' className={styles.noPromisesText}>
            지금은 예정된 약속이 없어요
          </Text>
          <img
            src='/icon/ic_note_pen.svg'
            alt='note image'
            className={styles.noPromisesImage}
          />
          <AddPromise />
        </>
      ) : (
        <>
          {homeData.fastestDday && (
            <div className={styles.fastestDdayText}>
              D-{homeData.fastestDday}
            </div>
          )}
          <div className={styles.promisesList}>
            {homeData.promiseDTOs?.map((promise: UserHomePagePromiseDTO, idx: number) => {
              return (
                <HomePromise
                  key={promise.promiseId ?? idx}
                  {...promise}
                />
              );
            })}
          </div>
        </>
      )}
    </Container>
  );
}
