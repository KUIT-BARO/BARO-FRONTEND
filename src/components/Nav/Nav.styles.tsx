import styled from "styled-components";

// 공통 스타일 컴포넌트 생성
export const BaseStyle = styled.div<{ color: keyof typeof Color }>`
  width: 100%;
  background-color: ${(props) => Color[props.color]};
`;

export const NavWrapper = styled(BaseStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  height: 44px;
  padding: 30px 20px;
  box-sizing: border-box;

  > img {
    display: inline-block;
    cursor: pointer;
  }
`;

export const PlaceHolder = styled(BaseStyle)`
  height: 44px;
  width: 100%;
  box-sizing: border-box;
`;
export const Color = {
  Blue: "#f4f8fb",
  White: "#ffffff",
};
