import { useState, useEffect } from 'react';

interface UseKakaoAddressProps {
  lat: number | null;
  lng: number | null;
}

interface UseKakaoAddressReturn {
  address: string | null;
  isLoading: boolean;
  error: string | null;
}

export const useKakaoAddress = ({ lat, lng }: UseKakaoAddressProps): UseKakaoAddressReturn => {
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!lat || !lng || !window.kakao || !window.kakao.maps) return;

    setIsLoading(true);
    
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        if (result[0].road_address) {
          setAddress(result[0].road_address.building_name || result[0].road_address.address_name);
        } else {
          setAddress(result[0].address.address_name);
        }
        setIsLoading(false);
      } else {
        setError('주소 변환에 실패했습니다.');
        setIsLoading(false);
      }
    });
  }, [lat, lng]);

  return { address, isLoading, error };
};