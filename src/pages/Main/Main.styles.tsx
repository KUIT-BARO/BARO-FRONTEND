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
  background: linear-gradient(180deg, #5175ff 0%, #cfdae6 100%);
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
  margin-bottom: 15px;
  .logo {
    height: 20px;
    margin: 0;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  .bold {
    font-size: 25px;
    font-weight: 700;
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
  gap: 25px;
  box-sizing: border-box;
  margin-top: 40px;
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
