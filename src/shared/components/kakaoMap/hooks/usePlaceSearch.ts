import type { LatLng } from '@shared/components/kakaoMap/types/latLng';

function usePlaceSearch() {
  const searchPlace = (placeName: string): Promise<LatLng[]> => {
    return new Promise((resolve, reject) => {
      if (!window.kakao || !window.kakao.maps) {
        return reject(new Error('Kakao Maps is not loaded'));
      }

      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(placeName, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          console.log(result);
          const places = result.map((place: any) => ({
            lng: parseFloat(place.x),
            lat: parseFloat(place.y),
          }));
          resolve(places);
        } else {
          reject(new Error('Place not found'));
        }
      });
    });
  };

  return { searchPlace };
}

export default usePlaceSearch;
