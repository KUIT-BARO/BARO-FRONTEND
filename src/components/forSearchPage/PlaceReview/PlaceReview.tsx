import React from "react";

import { ReviewWrapper, PlaceTitle, DetailsWrapper, PlaceDetails, Rating, Location, BookmarkButton, CommentsWrapper, CategoriesWrapper } from "./PlaceReview.styles";

import BlueStar from "../../../assets/icons/BlueStar.svg";
import GrayStar from "../../../assets/icons/GrayStar.svg";
import BlueBookmark from "../../../assets/icons/세이브_blue.svg";
import GrayBookmark from "../../../assets/icons/세이브_gray.svg";

interface PlaceReviewProps {
  bookmark: boolean;
  name: string;
  address: string;
  star: number;
  comments: number;
  comment: string[];
  categories: string[];
};

export default function PlaceReview(props: PlaceReviewProps) {

  const renderStars = (starCount: number) => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<img key={`blue-${i}`} src={BlueStar} alt="star icon" />);
    }
    for (let i = starCount; i < 5; i++) {
      stars.push(<img key={`gray-${i}`} src={GrayStar} alt="star icon" />);
    }
    return stars;
  };

  const [isBookmarked, setIsBookmarked] = React.useState(props.bookmark);
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <ReviewWrapper>
      <PlaceTitle>
        {props.name}
      </PlaceTitle>
      <DetailsWrapper>
        <PlaceDetails>
          <Rating>
            <>{props.star}.0</> 
            <>{renderStars(props.star)}</> 
            <>({props.comments})</>
          </Rating>
          <Location>
            {props.address}
          </Location>
        </PlaceDetails>
        <BookmarkButton onClick={handleBookmark}>
          <img src={isBookmarked ? BlueBookmark : GrayBookmark} alt="bookmark icon" />
        </BookmarkButton>
      </DetailsWrapper>
      <CommentsWrapper>
        {props.comment.map((comment, index) => {
          if (comment.length > 45) {
            return (<div key={index}>{comment.substring(0, 45)}...</div>);
          }
          return (<div key={index}>{comment}</div>);
        })}
      </CommentsWrapper>
      <CategoriesWrapper>
        {props.categories.map((category, index) => (
          <div key={index}>{category}</div>
        ))}
      </CategoriesWrapper>
    </ReviewWrapper>
  );
};