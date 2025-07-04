import { useMemo } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@shared/components/kakaoMap/hooks/useKakaoLoader';
import useGetLocation from '@shared/components/kakaoMap/hooks/useGetLocation';
import type { LatLng } from '@shared/components/kakaoMap/types/latLng';
import { MAP_SIZE, type MapSize } from '@shared/components/kakaoMap/constant/mapSize';
import * as styles from '@shared/components/kakaoMap/KakaoMap.css';

interface KakaoMapProps {
  center: LatLng | null;
  size?: MapSize;
}

const KakaoMap = ({ center, size = MAP_SIZE.MEDIUM }: KakaoMapProps) => {
  const loaded = useKakaoLoader();
  const { position } = useGetLocation();

  const fallbackCenter = useMemo(() => center ?? position, [center, position]);

  if (!loaded) return <div>지도 불러오는 중...</div>;

  return (
    <Map center={fallbackCenter} className={styles.mapWrapper({ size })}>
      <MapMarker position={fallbackCenter} />
    </Map>
  );
};

export default KakaoMap;
