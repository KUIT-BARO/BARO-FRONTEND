import styled from "styled-components";

export const UsersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: -20px;
`;
export const UserDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #edf1ff;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  > .left {
    display: flex;
    gap: 16px;
    align-items: center;
    > .user-icon {
      > img {
        width: 36px;
        height: 36px;
      }
    }
    > .user-desc {
      display: flex;
      flex-direction: column;
      gap: 10px;

      font-size: 13px;
      font-weight: 400;

      color: #919191;
      > .name {
        font-size: 14px;
        font-weight: 500;
        color: black;
      }
    }
  }

  > .checkbox {
    cursor: pointer;

    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
`;

// 추가된 팝업 스타일
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Popup = styled.div`
  position: fixed;
  bottom: 5%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 20px 30px;
  border-radius: 8px;
  box-sizing: border-box;
  > .x {
    font-size: 20px;
    color: #d4d4d4;
    display: flex;
    justify-content: flex-end;
  }
  > p {
    display: flex;
    color: #848484;

    font-size: 16px;
    font-weight: 500;

    > .bold {
      color: black;
      font-weight: 600;
    }
  }
`;

export default PopupOverlay;
