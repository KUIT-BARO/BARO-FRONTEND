import React from 'react';
import { useNavigate } from 'react-router-dom';
import plusIcon from '../../assets/icons/plus_mypage.svg';
import savedplacesImage from '../../assets/icons/savedplaces.svg';
import './SavedPlaces.styles.css';

const SavedPlaces = () => {
  const navigate = useNavigate();

  const savedPlaces = [
    {
      id: 1,
      title: '비즈니스',
      image: savedplacesImage
    },
    {
      id: 2,
      title: '여가 생활',
      image: savedplacesImage
    },
    {
      id: 3,
      title: '아늑한',
      image: savedplacesImage
    }
  ];

  const handlePlaceClick = (title: string) => {
    // URL에 사용할 때는 한글을 인코딩
    const encodedTitle = encodeURIComponent(title);
    navigate(`/places/${encodedTitle}`);
  };

  const handleAddPlace = () => {
    // TODO: 새로운 장소 추가 로직 구현
  };

  return (
    <div className="saved-places-grid">
      {savedPlaces.map((place) => (
        <div 
          key={place.id} 
          className="place-card"
          onClick={() => handlePlaceClick(place.title)}
          role="button"
          tabIndex={0}
        >
          <img 
            src={place.image} 
            alt={place.title}
          />
          <div className="place-card-overlay" />
          <h3 className="place-title">
            {place.title}
          </h3>
        </div>
      ))}
      
      <button 
        className="add-place-button"
        onClick={handleAddPlace}
      >
        <img src={plusIcon} alt="Add new place" />
      </button>
    </div>
  );
};

export default SavedPlaces;