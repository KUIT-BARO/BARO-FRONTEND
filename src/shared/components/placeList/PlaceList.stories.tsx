import type { Meta, StoryObj } from '@storybook/react-vite';
import PlaceList from '@shared/components/placeList/PlaceList';

const meta: Meta<typeof PlaceList> = {
  title: 'Components/PlaceList',
  component: PlaceList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'text',
      description: '장소 리스트의 카테고리',
    },
    description: {
      control: 'text',
      description: '카테고리에 대한 설명',
    },
    thumbnailSize: {
      control: 'select',
      options: ['large', 'small'],
      description: '썸네일 크기',
    },
    places: {
      control: 'object',
      description: '표시할 장소들의 배열',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 장소 더미 데이터
const mockPlaces = [
  {
    id: 1,
    name: '건국대학교 일감호',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fbea95d60432c8a58414758de4303e4edbcdf1456%3Foriginal',
    rating: 4.5,
    saveNum: 128,
  },
  {
    id: 2,
    name: '어린이대공원 놀이동산',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNTA3MDRfMjU1%2FMDAxNzUxNjA1MTEyNDM5.8J0iMxZmgXqDOH7I-y3dp7BlW6WQmW9g8en9DCq-eSYg.iYCmMwsGdJ39-zu5Ww0uEkVnjPW-mR7XUmtO1MfWoTIg.JPEG%2Foutput%25EF%25BC%25BF1338689891.jpg%3Ftype%3Dw966',
    rating: 4.2,
    saveNum: 256,
  },
  {
    id: 3,
    name: '카페온더플랜 건대점',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNTA2MjNfODUg%2FMDAxNzUwNjY4NDAzMTky.4KaFAcMCZKsszdIj8dgoXLL4INvY9SfriyBTvfeW1iog.bjUgseEARfzGAHMFYo9vV2JU29Utw6L36HY3ztFLWuog.JPEG%2FIMG_5202.JPG%3Ftype%3Dw966',
    rating: 4.8,
    saveNum: 189,
  },
  {
    id: 4,
    name: '오소리베이커리',
    imageUrl: 'https://img1.kakaocdn.net/cthumb/local/C800x800.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC65917A56D7D4CD9BFE9971D5BBD159B',
    rating: 4.1,
    saveNum: 95,
  },
];

export const BestPlaces: Story = {
  args: {
    category: 'BEST',
    description: '좋아요를 가장 많이 받은 명소',
    places: mockPlaces,
    thumbnailSize: 'small',
  },
};

export const BuisinessPlaces: Story = {
  args: {
    category: '비즈니스',
    description: '회의와 업무에 딱 맞는 장소',
    places: mockPlaces,
  },
};

export const StudyPlaces: Story = {
  args: {
    category: '스터디',
    description: '효율적인 공부를 위한 최적의 장소',
    places: mockPlaces,
  },
};
