export interface PlaceData {
  placeId: number;
  imageUrl: string;
  placeName: string;
  rating: number;
  saveNum: number;
}

export const mockupPlaces: PlaceData[] = [
  {
    placeId: 1,
    placeName: '건국대학교 일감호',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fbea95d60432c8a58414758de4303e4edbcdf1456%3Foriginal',
    rating: 4.5,
    saveNum: 128,
  },
  {
    placeId: 2,
    placeName: '어린이대공원 놀이동산',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNTA3MDRfMjU1%2FMDAxNzUxNjA1MTEyNDM5.8J0iMxZmgXqDOH7I-y3dp7BlW6WQmW9g8en9DCq-eSYg.iYCmMwsGdJ39-zu5Ww0uEkVnjPW-mR7XUmtO1MfWoTIg.JPEG%2Foutput%25EF%25BC%25BF1338689891.jpg%3Ftype%3Dw966',
    rating: 4.2,
    saveNum: 256,
  },
  {
    placeId: 3,
    placeName: '카페온더플랜 건대점',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNTA2MjNfODUg%2FMDAxNzUwNjY4NDAzMTky.4KaFAcMCZKsszdIj8dgoXLL4INvY9SfriyBTvfeW1iog.bjUgseEARfzGAHMFYo9vV2JU29Utw6L36HY3ztFLWuog.JPEG%2FIMG_5202.JPG%3Ftype%3Dw966',
    rating: 4.8,
    saveNum: 189,
  },
  {
    placeId: 4,
    placeName: '오소리베이커리',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC65917A56D7D4CD9BFE9971D5BBD159B',
    rating: 4.1,
    saveNum: 95,
  },
];
