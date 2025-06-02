import { useState, useEffect, useMemo } from 'react';

interface PinnedPlace {
  placeName: string;
  star: number;
  pinCount: number;
  placeAddress: string;
  placeCategories: string[];
}

interface PinnedCoordinate {
  placeName: string;
  lat: number;
  lng: number;
}

interface UsePinnedPlacesProps {
  places: PinnedPlace[];
  selectedCategory?: string | null;
}

interface UsePinnedPlacesReturn {
  pinnedCoordinates: PinnedCoordinate[];
  filteredCoordinates: PinnedCoordinate[];
  isLoading: boolean;
  error: string | null;
}

export const usePinnedPlaces = ({ places, selectedCategory }: UsePinnedPlacesProps): UsePinnedPlacesReturn => {
  const [pinnedCoordinates, setPinnedCoordinates] = useState<PinnedCoordinate[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 장소 좌표 가져오기
  useEffect(() => {
    if (!places.length || !window.kakao || !window.kakao.maps) {
      setIsLoading(false);
      return;
    }
    
    const ps = new window.kakao.maps.services.Places();

    const fetchCoordinates = async () => {
      try {
        const coordinates = await Promise.all(
          places.map((place) => {
            return new Promise<PinnedCoordinate | null>((resolve) => {
              ps.keywordSearch(place.placeName, (data, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                  resolve({
                    placeName: place.placeName,
                    lat: Number(data[0].y),
                    lng: Number(data[0].x),
                  });
                } else {
                  resolve(null);
                }
              });
            });
          })
        );
        
        setPinnedCoordinates(coordinates.filter((coord): coord is PinnedCoordinate => coord !== null));
        setIsLoading(false);
      } catch (err) {
        setError('좌표 변환 중 오류가 발생했습니다.');
        setIsLoading(false);
      }
    };

    fetchCoordinates();
  }, [places]);

  // 카테고리별 필터링
  const filteredCoordinates = useMemo(() => {
    if (!selectedCategory || selectedCategory === "ALL") {
      return pinnedCoordinates;
    }
    
    return pinnedCoordinates.filter(coord => {
      const place = places.find(p => p.placeName === coord.placeName);
      return place?.placeCategories.includes(selectedCategory);
    });
  }, [pinnedCoordinates, selectedCategory, places]);

  return { pinnedCoordinates, filteredCoordinates, isLoading, error };
};