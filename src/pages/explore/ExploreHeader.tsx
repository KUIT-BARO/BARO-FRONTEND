import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '@pages/explore/Explore.css';
import InputBar from '@shared/components/inputBar/InputBar';
import { IcWriteBlue } from '@svg/index';

export default function ExploreHeader() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleAddPinClick = () => {
    navigate('/pin/add');
  }

  return(
    <div className={styles.exploreHeader}>
      <InputBar
        leftIcon='search'
        placeholder='장소를 검색하세요'
        value={searchValue}
        onChange={handleInputChange}
      />
      <IcWriteBlue
        className={styles.addPinIcon}
        onClick={handleAddPinClick}
      />
    </div>
  )
}
