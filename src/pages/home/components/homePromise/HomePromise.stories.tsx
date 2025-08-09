import HomePromise from '@pages/home/components/homePromise/HomePromise';

export default {
  title: 'Home/HomePromise',
  component: HomePromise,
};

export const Default = () => <HomePromise 
  placeName='스타벅스 건대입구점'
  promiseName='KUIT 2차 회의'
  promiseDate='2025-08-07'
  promiseDay='토'
  promiseMember='이정연 외 2명'
  promiseDday={2}
/>;
