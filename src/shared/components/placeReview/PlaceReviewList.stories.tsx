import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import PlaceList from '@shared/components/placeReview/PlaceReview';
import { mockupPlaces } from '@shared/components/placeReview/mockup';

const meta: Meta<typeof PlaceList> = {
  title: 'Components/PlaceList',
  component: PlaceList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    reviewType: {
      control: 'text',
      description: '장소 리스트의 리뷰 타입',
    },
    description: {
      control: 'text',
      description: '카테고리에 대한 설명',
    },
    placeReviewSize: {
      control: 'select',
      options: ['LARGE', 'SMALL'],
      description: '리뷰 크기',
    },
    places: {
      control: 'object',
      description: '표시할 장소들의 배열',
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BestPlaces: Story = {
  args: {
    reviewType: 'BEST',
    description: '좋아요를 가장 많이 받은 명소',
    places: mockupPlaces,
    placeReviewSize: 'SMALL',
  },
};

export const BuisinessPlaces: Story = {
  args: {
    reviewType: '비즈니스',
    description: '회의와 업무에 딱 맞는 장소',
    places: mockupPlaces,
  },
};

export const StudyPlaces: Story = {
  args: {
    reviewType: '스터디',
    description: '효율적인 공부를 위한 최적의 장소',
    places: mockupPlaces,
  },
};
