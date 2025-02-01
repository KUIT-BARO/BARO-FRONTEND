import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import backIcon from "../../assets/icons/backIcon.svg";
import starFilled from "../../assets/icons/star_filled.svg";
import starEmpty from "../../assets/icons/star_empty.svg";
import bookmarkBlue from "../../assets/icons/bookmark_blue.svg";

import Navigation from "../../components/Navigation/Navigation";
import "./SavedPlacesDetail.styles.css";

const SavedPlacesDetail = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  // URL 디코딩하여 원래 카테고리명 복원
  const decodedCategory = decodeURIComponent(category || "");

  const dummyPlaces = Array(12).fill({
    id: 1,
    name: "스타벅스 건대입구점",
    rating: 5.0,
    reviewCount: 12,
    address: "서울 광진구 화양동 5-47",
  });

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <img
          key={index}
          src={index < 2 ? starFilled : starEmpty}
          alt="star"
          className="star-icon"
        />
      ));
  };

  const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };

  return (
    <div className="places-detail-container">
      <header className="places-detail-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <img src={backIcon} alt="back" />
        </button>
        <h1>{decodedCategory}</h1>
      </header>

      <div className="places-list">
        {dummyPlaces.map((place, index) => (
          <div key={index} className="place-item">
            <div className="place-info">
              <h2>{place.name}</h2>
              <div className="rating-container">
                <span className="rating">{formatRating(place.rating)}</span>
                <div className="stars">{renderStars(place.rating)}</div>
                <span className="review-count">({place.reviewCount})</span>
              </div>
              <p className="address">{place.address}</p>
            </div>
            <button className="bookmark-button">
              <img src={bookmarkBlue} alt="bookmark" />
            </button>
          </div>
        ))}
      </div>

      <Navigation />
    </div>
  );
};

export default SavedPlacesDetail;
