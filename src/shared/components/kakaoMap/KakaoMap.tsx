import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@shared/components/kakaoMap/hooks/useKakaoLoader';
import useGetLocation from '@shared/components/kakaoMap/hooks/useGetLocation';

const KakaoMap = () => {
  const loaded = useKakaoLoader();
  const { center, position } = useGetLocation();

  if (!loaded) return <div>지도 불러오는 중...</div>;

  return (
    <Map center={center} style={{ width: '100%', height: '360px' }}>
      <MapMarker position={position} />
    </Map>
  );
};

export default KakaoMap;
