import type { Place } from '@shared/components/kakaoMap/types/latLng';

function usePlaceSearch() {
  const searchPlace = (placeName: string): Promise<Place[]> => {
    return new Promise((resolve, reject) => {
      if (!window.kakao || !window.kakao.maps) {
        return reject(new Error('Kakao Maps is not loaded'));
      }

      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(placeName, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const places = result.map(
            (place: { place_name: string; address_name: string; x: string; y: string }) => ({
              place_name: place.place_name,
              address_name: place.address_name,
              lng: parseFloat(place.x),
              lat: parseFloat(place.y),
            })
          );
          resolve(places);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          resolve([]);
        } else {
          reject(new Error('Failed to search place'));
        }
      });
    });
  };

  return { searchPlace };
}

export default usePlaceSearch;
