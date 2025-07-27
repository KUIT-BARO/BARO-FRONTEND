import type { Meta, StoryObj } from '@storybook/react-vite';
import PlaceThumbnail from '@shared/components/placeThumbnail/PlaceThumbnail';

const meta: Meta<typeof PlaceThumbnail> = {
  title: 'components/PlaceThumbnail',
  component: PlaceThumbnail,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'small'],
    },
    placeImageUrl: { control: 'text' },
    placeName: { control: 'text' },
    placeRating: { control: 'number' },
    placeSaveNum: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof PlaceThumbnail>;

export const Default: Story = {
  args: {
    size: 'large',
    placeImageUrl: 'https://img1.kakaocdn.net/cthumb/local/C264x196.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNTA2MjNfODUg%2FMDAxNzUwNjY4NDAzMTky.4KaFAcMCZKsszdIj8dgoXLL4INvY9SfriyBTvfeW1iog.bjUgseEARfzGAHMFYo9vV2JU29Utw6L36HY3ztFLWuog.JPEG%2FIMG_5202.JPG%3Ftype%3Dw966',
    placeName: '카페온더플랜 건대점',
    placeRating: 4.5,
    placeSaveNum: 10,
  },
};

export const SmallThumbnail: Story = {
  args: {
    size: 'small',
    placeName: 'Small Place Thumbnail',
    placeRating: 3.0,
    placeSaveNum: 5,
  },
};

export const LargeThumbnail: Story = {
  args: {
    size: 'large',
    placeName: 'Large Place Thumbnail',
    placeRating: 4.9,
    placeSaveNum: 20,
  },
};
