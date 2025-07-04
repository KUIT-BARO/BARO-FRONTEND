import { useCallback } from 'react';
import type { LatLng } from '@shared/components/kakaoMap/types/latLng';

function usePlaceSearch() {
  const searchPlace = useCallback((keyword: string): Promise<LatLng> => {
    return new Promise((resolve, reject) => {
      if (!window.kakao || !window.kakao.maps) {
        return reject(new Error('Kakao Maps is not loaded'));
      }

      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(keyword, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const { x, y } = result[0];
          resolve({ lng: parseFloat(x), lat: parseFloat(y) });
        } else {
          reject(new Error('Place not found'));
        }
      });
    });
  }, []);

  return { searchPlace };
}

export default usePlaceSearch;
