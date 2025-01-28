import styled from "styled-components";

export const ReviewWrapper = styled.div`
  background-color: #FFFFFF;
  border-top: 1px solid #EDF1FF;
  border-bottom: 1px solid #EDF1FF;
  padding: 24px 20px;
`;

export const PlaceTitle = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  color: #000000;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  font-family: Pretendard;
  font-size: 14px;
  color: #979797;
`;

export const PlaceDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Location = styled.div`
  margin-top: 5px;
`;

export const BookmarkButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const CommentsWrapper = styled.div`
  margin-top: 18px;
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-scrolling: touch;
  scrollbar-width: none;

  div {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    // word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 233px;
    min-width: 233px;
    height: 58px;
    font-family: Pretendard;
    font-size: 12px;
    line-height: 1.2em;
    color: #444456;
    padding: 12px 16px;
    border-radius: 10px;
    background-color: #EDF1FF;
    vertical-align: middle;
  }
`;

export const CategoriesWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 4px;
  
  div {
    font-family: Pretendard;
    font-size: 12px;
    color: #5175FF;
    padding: 4px 10px;
    border-radius: 10px;
    border: 1.5px solid #5175FF;
  }
`;