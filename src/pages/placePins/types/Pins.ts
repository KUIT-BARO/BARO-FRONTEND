import type { PinListResponseDTO, PinResponseDTO } from 'api/data-contracts';
import type { CategoryType } from '@shared/constant/category';

export interface PinListData {
  pinId: PinListResponseDTO['pinId'];
  pin: PinResponseDTO;
  categories: CategoryType[];
}
