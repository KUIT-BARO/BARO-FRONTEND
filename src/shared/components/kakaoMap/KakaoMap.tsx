import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@shared/components/kakaoMap/hooks/useKakaoLoader';
import useGetLocation from '@shared/components/kakaoMap/hooks/useGetLocation';
import type { LatLng } from '@shared/components/kakaoMap/types/latLng';
import { MAP_SIZE, type MapSize } from '@shared/components/kakaoMap/constant/mapSize';
import * as styles from '@shared/components/kakaoMap/KakaoMap.css';

import type { PinData } from '@shared/components/kakaoMap/mockup';

interface KakaoMapProps {
  center?: LatLng;
  size?: MapSize;
  pinData?: PinData[];
}

const KakaoMap = ({ center, size = MAP_SIZE.MEDIUM, pinData }: KakaoMapProps) => {
  const loaded = useKakaoLoader();
  const { currentCenter, position } = useGetLocation(center);

  const fallbackCenter = center ?? currentCenter;

  if (!loaded) return <div>지도 불러오는 중...</div>;

  return (
    <Map center={fallbackCenter} className={styles.mapWrapper({ size })}>
      {/* 검색된 장소가 있으면 검색된 장소에, 없으면 현재 위치에 마커 */}
      <MapMarker
        position={center || position}
        image={{
          src: '/icon/ic_location_dot.svg',
          size: { width: 50, height: 50 },
        }}
      />

      {/* pinData가 있으면 해당 위치들에 마커 표시 */}
      {pinData &&
        pinData.map((pin, index) => (
          <MapMarker
            key={`pin-${pin.pinId}-${index}`}
            position={{
              lat: pin.latitude,
              lng: pin.longitude,
            }}
            image={{
              // TODO: 핀 컴포넌트로 변경 필요
              src: '/icon/ic_location_dot.svg',
              size: { width: 35, height: 35 },
            }}
          />
        ))}
    </Map>
  );
};

export default KakaoMap;
