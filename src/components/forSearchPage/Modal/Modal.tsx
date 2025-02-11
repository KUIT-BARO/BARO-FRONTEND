import React from "react";

import { ModalWrapper, ModalHeader, ModalCloseButton, SetToCurrentLocation, ModalContents,
  Content, LocationName, LocationAddress,
  SettingLocation, SettingLocationContents, SettingButtonWrapper, LocationTitle, LocationDetail, SettingButton
} from "./Modal.styles";

import KakaoMap from '../KakaoMap/KakaoMap';

import BackIcon from '../../../assets/icons/backIcon.svg';
import Scope from '../../../assets/icons/스코프.svg';

export default function Modal(props) {

  function updateisModalOpen() {
    props.updateisModalOpen(false);
  };

  const handleLocationSet = () => {
    props.setSelectedLocation(currentLocationName);
    props.setSelectedPosition({
      lat: currentLocation.lat,
      lng: currentLocation.lng,
      radius: 50
    });
    updateisModalOpen();
  };
  const handleListLocationSet = (place: any) => {
    props.setSelectedLocation(place.place_name);
    props.setSelectedPosition({
      lat: place.y,
      lng: place.x,
      radius: 50
    });
    updateisModalOpen();
  };

  const [isSettingLocation, setIsSettingLocation] = React.useState(false);
  const handleSettingLocation = () => {
    setIsSettingLocation(!isSettingLocation);
  };

  const [currentLocationName, setCurrentLocationName] = React.useState<string>("");
  const [currentLocationDetail, setCurrentLocationDetail] = React.useState<string>("");
  const [currentLocation, setCurrentLocation] = React.useState<{ lat: number; lng: number; }>({ lat: 33.450701, lng: 126.570667 });

  const [locationList, setLocationList] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (navigator.geolocation) {
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
      }, (error) => { console.error('위치 정보를 가져오는데 실패했습니다:', error); });
    } 
    else {
      console.error('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }
  }, []);

  return (
    <ModalWrapper>
      <ModalHeader isSettingLocation={isSettingLocation}>
        {!isSettingLocation && <>
          <ModalCloseButton onClick={updateisModalOpen}>
            <img src={BackIcon} alt="back icon" />
          </ModalCloseButton>
          <SetToCurrentLocation onClick={() => {handleSettingLocation()}}>
            <img src={Scope} alt="scope icon" />
            <div>현재 위치로 설정하기</div>
          </SetToCurrentLocation>
        </>}
        {isSettingLocation && 
          <SettingLocation>
            <img src={BackIcon} alt="back icon" onClick={() => {handleSettingLocation()}}/>
            <div>현재 위치</div>
            <div></div>
          </SettingLocation>
        }
      </ModalHeader>
      {!isSettingLocation && <ModalContents>
        {locationList.slice(0, 10).map((place, index) => (
          <Content key={index} onClick={() => handleListLocationSet(place)}>
            <LocationName>{place.place_name}</LocationName>
            <LocationAddress>{place.address_name}</LocationAddress>
          </Content>  
        ))}
      </ModalContents>}
      {isSettingLocation && <SettingLocationContents>
        <KakaoMap mapHeight="72vh" />
        <SettingButtonWrapper>
          <LocationTitle>{currentLocationName}</LocationTitle>
          <LocationDetail>{currentLocationDetail}</LocationDetail>
          <SettingButton onClick={handleLocationSet}>
            이 주소로 설정하기
          </SettingButton>
        </SettingButtonWrapper>
      </SettingLocationContents>}
    </ModalWrapper>
  );
};