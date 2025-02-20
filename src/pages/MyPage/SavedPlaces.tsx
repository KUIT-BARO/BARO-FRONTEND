import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import plusIcon from '../../assets/icons/plus_mypage.svg';
import savedplacesImage from '../../assets/icons/savedplaces.svg';
import './SavedPlaces.styles.css';

interface SavedPlace {
  keywordId: number;
  keyword: string;
}

interface UserResponse {
  status: number;
  code: number;
  message: string;
  data: {
    user: {
      nickname: string;
      userId: number;
      userProfile: string;
    };
    schedules: Array<{
      name: string;
      dayOfWeek: string;
      timeStart: string;
      timeEnd: string;
      place: string;
    }>;
    savedPlaces: SavedPlace[];
    myReviews: Array<{
      placeId: number;
      name: string;
      note: string;
      score: number;
      latitude: number;
      longitude: number;
      Keywords: string[];
    }>;
  };
}

const SavedPlaces = () => {
  const navigate = useNavigate();
  const [savedPlaces, setSavedPlaces] = useState<SavedPlace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        
        // 세션 ID 가져오기 (localStorage나 쿠키에서 가져오는 방식에 따라 수정)
        const sessionId = localStorage.getItem('JSESSIONID');
        
        if (!sessionId) {
          console.log('세션 정보가 없습니다. 임시 데이터를 사용합니다.');
          // 임시 데이터 사용 (개발용)
          setSavedPlaces([
            {
              keywordId: 1,
              keyword: '비즈니스'
            },
            {
              keywordId: 2,
              keyword: '여가 생활'
            },
            {
              keywordId: 3,
              keyword: '아늑한'
            }
          ]);
          setLoading(false);
          return;
        }

        const response = await axios.get<UserResponse>('/users/my', {
          headers: {
            JSESSIONID: sessionId
          }
        });

        if (response.data.code === 20001) {
          setSavedPlaces(response.data.data.savedPlaces.map(place => ({
            keywordId: place.keywordId,
            keyword: place.keyword
          })));
        } else {
          setError(`API 오류: ${response.data.message}`);
        }
      } catch (err) {
        console.error('사용자 데이터 조회 실패:', err);
        // 개발 환경에서는 임시 데이터 사용
        setSavedPlaces([
          {
            keywordId: 1,
            keyword: '비즈니스'
          },
          {
            keywordId: 2,
            keyword: '여가 생활'
          },
          {
            keywordId: 3,
            keyword: '아늑한'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handlePlaceClick = (title: string) => {
    // URL에 사용할 때는 한글을 인코딩
    const encodedTitle = encodeURIComponent(title);
    navigate(`/places/${encodedTitle}`);
  };

  const handleAddPlace = () => {
    navigate('/places/add');
  };

  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="saved-places-grid">
      {savedPlaces.length > 0 ? (
        savedPlaces.map((place) => (
          <div 
            key={place.keywordId} 
            className="place-card"
            onClick={() => handlePlaceClick(place.keyword)}
            role="button"
            tabIndex={0}
          >
            <img 
              src={savedplacesImage} 
              alt={place.keyword}
            />
            <div className="place-card-overlay" />
            <h3 className="place-title">
              {place.keyword}
            </h3>
          </div>
        ))
      ) : (
        <div className="no-places-message">
          저장된 장소가 없습니다.
        </div>
      )}
      
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