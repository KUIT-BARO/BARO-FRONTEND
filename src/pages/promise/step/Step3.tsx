import React, { useState } from 'react';
import Text from '@shared/components/text/Text';
import * as styles from './Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import type { Step3Props } from '../types/Step';
import InputBar from '@shared/components/inputBar/InputBar';
import KakaoMap from '@shared/components/kakaoMap/KakaoMap';
import usePlaceSearch from '@shared/components/kakaoMap/hooks/usePlaceSearch';
import type { Place } from '@shared/components/kakaoMap/types/latLng';
import { isSamePlace, updatePlaceSelection } from './utils/placeUtils';

interface PlaceListProps {
  title: string;
  places: Place[];
  handlePlaceSelection: (_place: Place) => void;
  errorMessage?: string;
}

const PlaceList = ({ title, places, handlePlaceSelection, errorMessage }: PlaceListProps) => {
  return (
    <div className={styles.placeListWrapper}>
      <Text tag="body_bold_16">{title}</Text>
      <Text tag="body_14" color="red1">
        {errorMessage}
      </Text>

      <div className={styles.placeList}>
        {places.map((place: Place, index) => (
          <div
            key={index}
            className={styles.placeWrapper({ isSelected: place.isSelected || false })}
            onClick={() => handlePlaceSelection(place)}
          >
            <div className={styles.placeNameWrapper}>
              <Text tag="body_14" color={place.isSelected ? 'blue0' : 'black'}>
                {place.place_name}
              </Text>
              <Button
                variant={place.isSelected ? 'enabled' : 'outlined'}
                size="small"
                text={place.isSelected ? '삭제' : '선택'}
                backgroundColor={vars.color.blue0}
                onClick={() => handlePlaceSelection(place)}
              />
            </div>
            <Text tag="body_12" color={place.isSelected ? 'blue0' : 'gray4'}>
              {place.address_name}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Step3({ navigate, suggestedRegion, handleRegionChange }: Step3Props) {
  const [searchPlaceName, setSearchPlaceName] = useState('');
  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const { searchPlace } = usePlaceSearch();

  const handleNextBtn = () => {
    navigate('/promise?step=PROMISE_DEADLINE');
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlaceName(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleKakaoMapCenter(searchPlaceName);
    }
  };

  const handleKakaoMapCenter = async (placeName: string) => {
    const results = await searchPlace(placeName).then(res => res.slice(0, 3));
    const resultsWithSelection = results.map(place => ({
      ...place,
      isSelected: suggestedRegion.some(p => isSamePlace(p, place)),
    }));
    setSearchResults(resultsWithSelection);
  };

  const handlePlaceSelection = (place: Place) => {
    const isAlreadySelected = suggestedRegion.some(p => isSamePlace(p, place));

    if (isAlreadySelected) {
      // 선택 해제
      const updatedPlaces = suggestedRegion.filter(p => !isSamePlace(p, place));
      handleRegionChange(updatedPlaces);
      setSearchResults(prev => updatePlaceSelection(prev, place, false));
    } else if (suggestedRegion.length < 5) {
      // 선택 추가
      const placeWithSelection = { ...place, isSelected: true };
      handleRegionChange([...suggestedRegion, placeWithSelection]);
      setSearchResults(prev => updatePlaceSelection(prev, place, true));
    }
  };

  const isFormValid = () => {
    return suggestedRegion.length > 0 && suggestedRegion.length <= 5;
  };

  return (
    <>
      <div className={styles.stepWrapper}>
        <section className={styles.stepSectionWrapper}>
          <div className={styles.textWrapper}>
            <Text tag="body_bold_25">만나고 싶은 장소를 설정해주세요.</Text>
            <Text tag="body_17" color="gray4">
              친구들과 함께 할 장소를 제안해보세요
            </Text>
          </div>
          <div className={styles.mapWrapper}>
            <InputBar
              placeholder="장소를 검색해주세요."
              leftIcon="search"
              value={searchPlaceName}
              onChange={handleSearchInputChange}
              props={{
                onKeyDown: handleSearchKeyDown,
              }}
            />
            <KakaoMap
              center={
                searchResults.length > 0
                  ? { lat: searchResults[0].lat, lng: searchResults[0].lng }
                  : undefined
              }
            />
          </div>

          <PlaceList
            title="검색 결과"
            places={searchResults}
            handlePlaceSelection={handlePlaceSelection}
            errorMessage={searchResults.length === 0 ? '검색 결과가 없습니다.' : ''}
          />

          <PlaceList
            title="선택된 장소"
            places={suggestedRegion}
            handlePlaceSelection={handlePlaceSelection}
            errorMessage={suggestedRegion.length >= 5 ? '최대 5개까지만 선택할 수 있습니다.' : ''}
          />
        </section>
        <div className={styles.buttonWrapper}>
          <Button
            variant={isFormValid() ? 'enabled' : 'disabled'}
            size="long"
            text="다음"
            onClick={handleNextBtn}
            backgroundColor={vars.color.baroBlue}
          />
        </div>
      </div>
    </>
  );
}
