import { useEffect, useState } from 'react';
import type { LatLng } from '@shared/components/kakaoMap/types/latLng';

function useGetLocation(center?: LatLng) {
  const [currentCenter, setCurrentCenter] = useState<LatLng>({ lat: 33.450701, lng: 126.570667 });
  const [position, setPosition] = useState<LatLng>({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    if (center) {
      setCurrentCenter(center);
    } else {
      navigator.geolocation.getCurrentPosition(pos => {
        setCurrentCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }

    const watchId = navigator.geolocation.watchPosition(pos => {
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, [center]);

  return { currentCenter, position };
}

export default useGetLocation;
