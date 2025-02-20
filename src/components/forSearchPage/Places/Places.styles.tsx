import styled from "styled-components";

export const PlacesWrapper = styled.div`
  width: 100%;
  padding-bottom: 82px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const PlaceWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 28px 0 14px 20px;
`;

export const PlaceTitleWrapper = styled.div`
  // display: flex;
  // justify-content: space-between;
  margin: 0px;
  cursor: pointer;

  .title {
    font-family: Pretendard;
    font-size: 22px;
    font-weight: 600;
    line-height: 30.8px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000;
  }

  button {
    border: none;
    background: none;
    transform: rotate(180deg);
    cursor: pointer;
  }

  img {
    filter: invert(96%) sepia(23%) saturate(0%) hue-rotate(236deg) brightness(71%) contrast(122%);
  }
`;

export const Subtitle = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #979797;
`;

export const PlaceImageWrapper = styled.div`
  margin-top: 20px;
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  gap: 1px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-scrolling: touch;
  scrollbar-width: none;
`;

export const PlaceImage = styled.div`
  position: relative;

  img {
    margin-right: 10px;
    border-radius: 8px;
    cursor: pointer;
    vertical-align: middle;
    // filter: brightness(50%);

  renderStars {
    margin-top: 10px;
  }
`;

export const PlaceInfo = styled.div<{ is168?: boolean }>`
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  margin: ${props => props.is168 ? '47px auto 0 29px' : '82px auto 0 114px'};
  z-index: 1;
`;

export const PlaceLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  font-family: Pretendard;
  font-size: 16px;
  color: #FFFFFF;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const StarRating = styled.div`
  gap: 0px;

  span {
    color: gray;
    font-size: 14px;
    margin-right: 3px;
  }

  img {
    margin: 0 2px;
    cursor: default;
  }
`;

export const Bookmark = styled.div`
  margin: 12px 0 0 32px;

  img {
    width: 16px;
    height: 16px;
    cursor: default;
    border-radius: 0;
    margin-right: 3px;
  }

  span {
    color: gray;
    font-size: 14px;
  }
`;