import styled from "styled-components";
export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px;
  gap: 25px;
  // background: linear-gradient(180deg, #5175ff 0%, #cfdae6 100%);
  background: linear-gradient(
    to bottom,
    #5175ff 22%,
    #a1b3f8 36%,
    #f0f0f0 80%,
    #747474 110%
  );

  font-family: "Pretendard", sans-serif;
  .big-logo {
    position: absolute;
    top: 20%;
    right: 0;
    width: 230px;
    z-index: 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 15px;

  .logo {
    height: 20px;
    margin: 0;
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .logout-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  }

  .alarm-wrapper {
    position: relative;
    cursor: pointer;
    > span {
      position: absolute;
      background-color: red;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      top: -5px;
      right: -5px;
    }
  }
`;
export const Title = styled.div`
  margin: 74px auto 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;

  .name {
    font-size: 36px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .bold {
    font-size: 25px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
  }

  .noteImg {
    width: 148px;
    height: 154px;
    margin: 0 auto;
  }

  .desc {
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
      width: 18px;
    }
  }
`;

export const Container = styled.div`
  background: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 25px;
  box-sizing: border-box;
  margin-top: 68px;
`;

export const Ddays = styled.div`
  font-size: 128px;
  color: white;
  font-weight: 700;
  margin-bottom: 72px;
`;

export const Promises = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  gap: 12px;
  scroll-behavior: smooth;
  position: relative;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨김 */
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;

export const Dot = styled.div`
  width: ${(props) => (props.active ? "24px" : "10px")};
  height: 10px;
  background-color: ${(props) => (props.active ? "#5175FF" : "#D3D3D3")};
  border-radius: 5px;
  transition: all 0.3s ease;
`;

export const PromiseBtn = styled.div`
  height: 121px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;

  > .plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: #5175ff;
    color: white;
    border-radius: 50%;
    > img {
      width: 9px;
    }
  }
`;
