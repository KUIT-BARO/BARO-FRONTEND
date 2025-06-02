import { useState, useEffect } from 'react';

interface LocationState {
  lat: number | null;
  lng: number | null;
}

interface UseKakaoSearchProps {
  keyword: string | null;
}

interface UseKakaoSearchReturn {
  searchLocation: LocationState;
  isLoading: boolean;
  error: string | null;
  placeName: string | null;
}

export const useKakaoSearch = ({ keyword }: UseKakaoSearchProps): UseKakaoSearchReturn => {
  const [searchLocation, setSearchLocation] = useState<LocationState>({ lat: null, lng: null });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [placeName, setPlaceName] = useState<string | null>(null);

  useEffect(() => {
    if (!keyword || !window.kakao || !window.kakao.maps) return;

    setIsLoading(true);
    
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
        const firstResult = data[0];
        setSearchLocation({
          lat: Number(firstResult.y),
          lng: Number(firstResult.x),
        });
        setPlaceName(firstResult.place_name);
        setIsLoading(false);
      } else {
        setError('검색 결과가 없습니다.');
        setIsLoading(false);
      }
    });
  }, [keyword]);

  return { searchLocation, isLoading, error, placeName };
};