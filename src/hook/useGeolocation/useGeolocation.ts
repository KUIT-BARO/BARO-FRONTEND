import { useState, useEffect } from 'react';

interface LocationState {
  lat: number | null;
  lng: number | null;
}

interface UseGeolocationReturn {
  currentLocation: LocationState;
  error: string | null;
  isLoading: boolean;
}

export const useGeolocation = (): UseGeolocationReturn => {
  const [currentLocation, setCurrentLocation] = useState<LocationState>({ lat: null, lng: null });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
      setIsLoading(false);
      return;
    }

    // 초기 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude: lat, longitude: lng } = coords;
        setCurrentLocation({ lat, lng });
        setIsLoading(false);
      },
      (error) => {
        setError(`위치 정보를 가져오는데 실패했습니다: ${error.message}`);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 60000,
      }
    );

    // 위치 실시간 추적
    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const { latitude: lat, longitude: lng } = coords;
        setCurrentLocation({ lat, lng });
      },
      (error) => {
        setError(`위치 추적에 실패했습니다: ${error.message}`);
      }
    );

    // cleanup
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { currentLocation, error, isLoading };
};