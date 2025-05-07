import { PIN_category } from "../../utils/constant/Categories";
export interface PinInterface {
  placeName: string; // 장소 이름
  star: number; // 별점 (예: 3.0)
  pinCount: number; // 핀 수 (유저가 꽂은 수)
  placeAddress: string; // 장소 주소
  placeCategories: PIN_category[]; // 카테고리 배열
}
