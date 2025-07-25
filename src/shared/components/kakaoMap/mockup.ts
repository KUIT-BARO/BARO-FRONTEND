// 첫 번째 요청 응답: 현재 위치 2km 내의 장소들
export interface PlaceLocation {
  placeId: number;
  latitude: number;
  longitude: number;
}

// 두 번째 요청 응답: 장소의 상세 핀 정보들
export interface PinData {
  pinId: number;
  userName: string;
  placeName: string;
  placeAddress: string;
  pinCategories: string[];
  latitude: number;
  longitude: number;
}

// 목업 데이터
export const mockupPlaces: PlaceLocation[] = [
  {
    placeId: 1,
    latitude: 37.5423265,
    longitude: 127.0759204,
  },
  {
    placeId: 2,
    latitude: 37.5441234,
    longitude: 127.0789012,
  },
  {
    placeId: 3,
    latitude: 37.5409876,
    longitude: 127.0723456,
  },
];

export const mockupPinData: PinData[] = [
  {
    pinId: 1,
    userName: '이지환',
    placeName: '스타벅스 건대입구점',
    placeAddress: '서울 광진구 화양동 5-47',
    pinCategories: ['키즈존', '북적이는'],
    latitude: 37.5423265,
    longitude: 127.0759204,
  },
  {
    pinId: 2,
    userName: '고정현',
    placeName: '스타벅스 건대입구점',
    placeAddress: '서울 광진구 화양동 5-47',
    pinCategories: [],
    latitude: 37.5423265,
    longitude: 127.0759204,
  },
  {
    pinId: 3,
    userName: '김민수',
    placeName: '올리브영 건대점',
    placeAddress: '서울 광진구 화양동 5-48',
    pinCategories: ['쇼핑', '화장품'],
    latitude: 37.5441234,
    longitude: 127.0789012,
  },
  {
    pinId: 4,
    userName: '박영희',
    placeName: '건대입구역',
    placeAddress: '서울 광진구 화양동 5-49',
    pinCategories: ['교통', '랜드마크'],
    latitude: 37.5409876,
    longitude: 127.0723456,
  },
  {
    pinId: 5,
    userName: '최민수',
    placeName: '건국대학교',
    placeAddress: '서울 광진구 화양동 5-50',
    pinCategories: ['교육', '대학교'],
    latitude: 37.5434567,
    longitude: 127.076789,
  },
];
