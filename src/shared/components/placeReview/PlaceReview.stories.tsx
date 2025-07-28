import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlaceReview } from '@shared/components/placeReview/PlaceReview';

const meta: Meta<typeof PlaceReview> = {
  title: 'Components/PlaceReview',
  component: PlaceReview,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['LARGE', 'SMALL'],
      description: '썸네일 크기',
    },
    placeImageUrl: {
      control: 'text',
      description: '장소 이미지 URL',
    },
    placeName: {
      control: 'text',
      description: '장소 이름',
    },
    placeRating: {
      control: 'number',
      description: '장소 평점',
    },
    placeReviewCount: {
      control: 'number',
      description: '리뷰 개수',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeReview: Story = {
  args: {
    size: 'LARGE',
    placeImageUrl: 'https://via.placeholder.com/340x232',
    placeName: '스타벅스 강남점',
    placeRating: 4.5,
    placeReviewCount: 123,
  },
};

export const SmallReview: Story = {
  args: {
    size: 'SMALL',
    placeImageUrl: 'https://via.placeholder.com/168x168',
    placeName: '카페베네',
    placeRating: 4.2,
    placeReviewCount: 89,
  },
};
