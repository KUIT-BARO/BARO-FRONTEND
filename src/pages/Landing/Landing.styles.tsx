import styled from "styled-components";

export const LandingContainer = styled.div`
  padding-top: 158px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #5175ff 0%,
    #b1c2ff 27%,
    #f7f9ff 40%,
    #cfdae6 74%,
    #5175ff 100%
  );
  color: white;
  text-align: center;
  position: relative;
  min-height: 100vh;
  overflow-y: auto;
`;

export const Content = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: 60vh;
    background-image: url(/src/assets/icons/landingback.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 34px;
`;

export const Iconimg = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 79px;
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 193.8px;
`;

export const ScrollText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const StartButton = styled.button`
  position: fixed;
  bottom: 20px;
  background-color: #5175ff;
  color: white;
  border: none;
  width: 90%;
  aspect-ratio: 362 / 54;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;
  &:hover {
    background-color: #062b5d;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 100px;
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 5px 0;
  text-align: center;
`;

export const SectionBaroTitle = styled.h2`
  margin-top: 12px;
  text-align: center;
  color: #f1f3fd;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 54px */
  letter-spacing: -0.9px;
  font-family: "Pretendard";
`;

export const SectionmainTitle = styled.h2`
  color: #6a7bff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
  margin-bottom: 20px;
`;

export const SectionsubTitle = styled.h2`
  color: #1a1a1a;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.6px;
`;

export const Mockup = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Mockupimg = styled.img``;

export const Logoimg = styled.img``;

export const Scrollimg = styled.img``;
