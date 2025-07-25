// KakaoMap.css.ts
import { recipe } from '@vanilla-extract/recipes';
import { MAP_SIZE } from '@shared/components/kakaoMap/constant/mapSize';

export const mapWrapper = recipe({
  base: { width: '100%' },
  variants: {
    size: {
      [MAP_SIZE.SMALL]: { height: '40rem' },
      [MAP_SIZE.MEDIUM]: { height: '54rem' },
      [MAP_SIZE.LARGE]: { height: '64rem' },
    },
  },
  defaultVariants: {
    size: MAP_SIZE.MEDIUM,
  },
});
