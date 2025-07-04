import { useEffect, useState } from 'react';
import type { LatLng } from '@shared/components/kakaoMap/types/latLng';

function useGetlocation() {
  const [center, setCenter] = useState<LatLng>({ lat: 33.450701, lng: 126.570667 });
  const [position, setPosition] = useState<LatLng>({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });

    const watchId = navigator.geolocation.watchPosition(pos => {
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { center, position };
}

export default useGetlocation;
