import styled from "styled-components";

export const PlacesWrapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const PlaceWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 28px 24px 20px 20px;
`;

export const PlaceTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div {
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
  height: 168px;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-scrolling: touch;
  scrollbar-width: none;

  img {
    width: 168px;
    height: 168px;
    // object-fit: cover;
    margin-right: 10px;
    background-color: #C4C4C4;
    border-radius: 8px;
  }
`;