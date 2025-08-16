import { mockupPlaces, type PlaceData } from '@shared/components/placeReview/mockup';

export interface ReviewCategory {
  reviewType: string;
  description: string;
  places: PlaceData[];
  placeReviewSize: 'SMALL' | 'LARGE';
}

export const mockupReviews: ReviewCategory[] = [
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
