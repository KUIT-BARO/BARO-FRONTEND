import React from "react";

import KakaoMap from '../../../components/forSearchPage/KakaoMap/KakaoMap';

import { 
  Layout, Header, 
  LocationsWrapper, Location, 
  SettingLocationHeader, SettingLocation, SettingButton
} from "./AddPinLocation.styles.tsx";

import BackIcon from '../../../assets/icons/Search/backIcon_white.svg';
import Scope from '../../../assets/icons/Search/scope.svg';

interface SetLocationProps {
  updateIsLocationOpen: (isLocationOpen: boolean) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedPosition: (position: { lat: number; lng: number; radius: number }) => void;
  setPlaceAddress: (address: string) => void;
}

export default function AddPinLocation(props: SetLocationProps) {

  function updateIsLocationOpen() {
    props.updateIsLocationOpen(false);
  };

  const handleLocationSet = () => {
    props.setSelectedLocation(currentLocationName);
    props.setSelectedPosition({
      lat: currentLocation.lat,
      lng: currentLocation.lng,
      radius: 50
    });
    updateIsLocationOpen();
  };
  const handleListLocationSet = (place: any) => {
    props.setSelectedLocation(place.place_name);
    props.setSelectedPosition({
      lat: place.y,
      lng: place.x,
      radius: 50
    });
    updateIsLocationOpen();
  };

  const [isSettingLocation, setIsSettingLocation] = React.useState(false);
  const handleSettingLocation = () => {
    setIsSettingLocation(!isSettingLocation);
  };

  const [currentLocationName, setCurrentLocationName] = React.useState<string>("");
  const [currentLocationDetail, setCurrentLocationDetail] = React.useState<string>("");
  const [currentLocation, setCurrentLocation] = React.useState<{ lat: number; lng: number; }>({ lat: 33.450701, lng: 126.570667 });

  const [locationList, setLocationList] = React.useState<any[]>([]);

  // 주소 정보도 함께 설정
  const handlePlaceSelect = (place: kakao.maps.services.PlacesSearchResultItem) => {
    // 기존 코드: 장소명, 위치 설정
    props.setSelectedLocation(place.place_name);
    props.setSelectedPosition({
      lat: parseFloat(place.y),
      lng: parseFloat(place.x),
      radius: 50
    });

    // 추가: 주소 정보 설정
    // 도로명 주소가 있으면 사용하고, 없으면 지번 주소 사용
    const address = place.road_address_name || place.address_name;
    props.setPlaceAddress(address);

    // 위치 선택 후 돌아가기
    props.updateIsLocationOpen(false);
  };

  React.useEffect(() => {
    const fetchLocation = () => {
      console.log('start fetch');
      
      if (navigator.geolocation) {
        console.log('start geo');
        
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;

          // 현재 위치의 주소명 가져오기
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.coord2Address(lng, lat, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              if (result[0].road_address) {
                console.log(result[0].road_address.building_name, result);
                setCurrentLocationName(result[0].road_address.building_name);
                setCurrentLocationDetail(result[0].address.address_name);
                setCurrentLocation({ lat, lng });

                const places = new window.kakao.maps.services.Places();
                const searchCallback = (result, status) => {
                  if (status === window.kakao.maps.services.Status.OK) {
                    console.log('주변 카페 검색 결과:', result.slice(0, 10));
                    setLocationList(result.slice(0, 10));
                    for (const i of result.slice(0, 10)) {
                      setLocationList((prev) => [...prev, i]);
                    }        
                  }
                };
                places.keywordSearch('카페', searchCallback, {
                  location: new window.kakao.maps.LatLng(lat, lng),
                  radius: 1000,
                  sort: window.kakao.maps.services.SortBy.DISTANCE
                });
              }
              else {
                console.log(result[0].address.address_name, result);
                // console.log(result[0].address.place_name);
                setCurrentLocationName(result[0].address.address_name);
                setCurrentLocationDetail(result[0].address.address_name);
              }              
            }
          });
        }, (error) => { console.error('위치 정보를 가져오는데 실패했습니다:', error); },
        {
          enableHighAccuracy: false,
          // timeout: 5000,
          maximumAge: 60000
        }
      );
      } 
      else {
        console.error('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
      }
    };
    fetchLocation();
  }, []);

  return (
    <Layout>
      <Header isSettingLocation={isSettingLocation}>
        {isSettingLocation ? 
          <SettingLocationHeader>
            <img 
              src={BackIcon} 
              alt="back icon" 
              onClick={() => {handleSettingLocation()}}
            />
            <div>현재 위치</div>
            <div/>
          </SettingLocationHeader>
        :
          <>
            <img 
              src={BackIcon} 
              alt="back icon" 
              onClick={updateIsLocationOpen}
            />
            <button onClick={() => {handleSettingLocation()}}>
              <img src={Scope} alt="scope icon" />
              <div>현재 위치로 설정하기</div>
            </button>
          </>
        }
      </Header>

      {isSettingLocation ? 
        <SettingLocation>
          <KakaoMap mapHeight="72vh" />
          <SettingButton>
            <div className="current-name">{currentLocationName}</div>
            <div className="current-address">{currentLocationDetail}</div>
            <button onClick={handleLocationSet}>
              이 주소로 설정하기
            </button>
          </SettingButton>
        </SettingLocation>
      :
        <LocationsWrapper>
          {locationList.slice(0, 10).map((place, index) => (
            <Location key={index} onClick={() => handleListLocationSet(place)}>
              <div className="name">{place.place_name}</div>
              <div className="address">{place.address_name}</div>
            </Location>  
          ))}
        </LocationsWrapper>
      }
    </Layout>
  );
};