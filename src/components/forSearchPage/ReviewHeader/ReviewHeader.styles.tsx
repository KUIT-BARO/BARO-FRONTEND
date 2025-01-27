import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 43px 20px 13px 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(221deg) brightness(100%) contrast(102%);
  }

  div {
    font-family: Pretendard;
    font-size: 19px;
    font-weight: 600;
    line-height: 26.6px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #F4F8FB;
  }
`;

export const BackToPlaces = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const AddReview = styled.div`
  cursor: pointer;
`;