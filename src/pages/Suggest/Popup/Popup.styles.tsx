import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
  background-color: white;
  border-radius: 16px 16px 0 0;
  padding: 40px 20px 20px 20px;
  gap: 10px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  background-color: #f4f8fb;
  border-radius: 10px;
  padding: 25px 20px;
  box-sizing: border-box;
`;

export const InfoTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const ButtonColumn = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
