import { useEffect, useState } from 'react';

function useKakaoLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APP_KAKAO_MAP_KEY}&autoload=false&libraries=services,clusterer,drawing`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        setLoaded(true);
      });
    };

    document.head.appendChild(script);
  }, []);

  return loaded;
}

export default useKakaoLoader;
