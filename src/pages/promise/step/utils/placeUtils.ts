import type { Place } from '@shared/components/kakaoMap/types/latLng';

export const isSamePlace = (place1: Place, place2: Place): boolean => {
  return (
    place1.place_name === place2.place_name &&
    place1.address_name === place2.address_name &&
    place1.lat === place2.lat &&
    place1.lng === place2.lng
  );
};

export const updatePlaceSelection = (
  places: Place[],
  targetPlace: Place,
  isSelected: boolean
): Place[] => {
  return places.map(place => ({
    ...place,
    isSelected: isSamePlace(place, targetPlace) ? isSelected : place.isSelected,
  }));
};
