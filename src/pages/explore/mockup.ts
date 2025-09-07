import { mockupPlaces, type PlaceData } from '@shared/components/placeReview/mockup';
import type { PinListData } from '@pages/placePins/types/Pins';

interface ReviewCategory {
  reviewType: string;
  description: string;
  places: PlaceData[];
  placeReviewSize: 'SMALL' | 'LARGE';
}

export const reviewCategories: ReviewCategory[] = [
  {
    reviewType: 'BEST',
    description: '좋아요를 가장 많이 받은 명소',
    places: mockupPlaces,
    placeReviewSize: 'SMALL',
  },
  {
    reviewType: '비즈니스',
    description: '회의와 업무에 딱 맞는 장소',
    places: mockupPlaces,
    placeReviewSize: 'LARGE',
  },
  {
    reviewType: '스터디',
    description: '효율적인 공부를 위한 최적의 장소',
    places: mockupPlaces,
    placeReviewSize: 'LARGE',
  },
];

export const mockupExplore: PinListData[] = [
  {
    pinId: 1,
    pin: {
      userName: '이지환',
      userEmail: 'hong@example.com',
      profileImage: 'https://example.com/profile.jpg',
      review: '아주 좋은 장소였습니다.',
      score: 3,
      placeName: '서울 광진구 화양동 5-47',
    },
    categories: ['아늑한', '키즈존', '북적이는'],
  },
  {
    pinId: 2,
    pin: {
      userName: '이지환',
      userEmail: 'hong@example.com',
      profileImage: 'https://example.com/profile.jpg',
      review: '아주 좋은 장소였습니다.',
      score: 2,
      placeName: '서울 광진구 화양동 5-47',
    },
    categories: ['아늑한', '키즈존', '북적이는'],
  },
];
