import React, { useState } from 'react';
import starFilled from '../../assets/icons/star_filled.svg';
import starEmpty from '../../assets/icons/star_empty.svg';
import moreIcon from '../../assets/icons/more.svg';
import './PlaceReviews.styles.css';

interface ReviewActionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewActions: React.FC<ReviewActionsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="review-actions-dropdown">
      <button className="action-button">수정하기</button>
      <button className="action-button">삭제하기</button>
    </div>
  );
};

const PlaceReviews = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const dummyReviews = Array(3).fill({
    id: 1,
    name: '스타벅스 건대입구점',
    rating: 5.0,
    reviewCount: 12,
    address: '서울 광진구 화양동 5-47',
    content: '분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요. 창가 자리에서 햇빛을 받으며 책을 읽기 딱 좋았습니다.',
    keywords: ['아기자기한', '아기자기한', '아기자기한']
  });

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <img 
        key={index}
        src={index < 2 ? starFilled : starEmpty}
        alt="star"
        className="star-icon"
      />
    ));
  };

  const handleMoreClick = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };

  return (
    <div className="reviews-list">
      {dummyReviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="review-header">
            <div className="review-title">
              <h2>{review.name}</h2>
              <div className="rating-container">
                <span className="rating">{formatRating(review.rating)}</span>
                <div className="stars">
                  {renderStars(review.rating)}
                </div>
                <span className="review-count">({review.reviewCount})</span>
              </div>
              <p className="address">{review.address}</p>
            </div>
            <div className="more-button-container">
              <button 
                className="more-button"
                onClick={() => handleMoreClick(index)}
              >
                <img src={moreIcon} alt="more" />
              </button>
              <ReviewActions 
                isOpen={activeDropdown === index}
                onClose={() => setActiveDropdown(null)}
              />
            </div>
          </div>
          <p className="review-content">{review.content}</p>
          <div className="keywords-container">
            {review.keywords.map((keyword, kidx) => (
              <span key={kidx} className="keyword">{keyword}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceReviews;