import React from "react";
import styled from "styled-components";

import KakaoMap from '../../../components/forSearchPage/KakaoMap/KakaoMap';

import BackIcon from '../../../assets/icons/backIcon.svg';
import Scope from '../../../assets/icons/스코프.svg';

export default function AddPinLocation(props) {

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

const Layout = styled.div`
  background-color: #F4F8FB;
`;

const Header = styled.div<{ isSettingLocation?: boolean }>`
  background-color: #F4F8FB;
  padding: ${props => props.isSettingLocation ? '24px 28px 100px 13px' : '24px 28px 0 13px'};
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;

  img {
    cursor: pointer;
  }

  button {
    margin: 30px 8px 15px 8px;
    width: 100%;
    height: 40px;
    background-color: #EAEAEA;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;

    img {
      margin-left: 10px;
      margin-right: 12px;
    }

    div {
      margin-top: 1px;
      color: #C1C1C1;
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: Pretendard;
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 23.8px */
      letter-spacing: -0.425px;
    }  
  }
`;

const LocationsWrapper = styled.div`
  padding-top: 134px;
  width: 100%;
`;

const Location = styled.div`
  border-top: 0.5px;
  border-bottom: 0.5px;
  border-style: solid;
  border-color: #EEEEEE;
  width: 100%;
  height: 85px;
  padding: 18.5px 0 18.5px 20px;
  background-color: #FFFFFF;
  cursor: pointer;

  .name {
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 23.8px */
    letter-spacing: -0.425px;
  }

  .address {
    color: #979797;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.35px;
  }
`;

const SettingLocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Pretendard;
  font-size: 19px;
  color: #000000;
  margin-right: 10px;
`;

const SettingLocation = styled.div`
  margin-top: 68px;
`;

const SettingButton = styled.div`
  padding: 24px 20px 0 20px;
  margin-top: 0px;
  background-color: #FFFFFF;
  border-top: 1px solid #EEEEEE;
  position: fixed;
  width: 100%;

  .current-name {
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 26.6px */
    letter-spacing: -0.475px;
  }

  .current-address {
    color: #979797;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.35px;
  }

  button {
    margin-top: 24px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #5175FF;
    cursor: pointer;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.4px;
  }
`;