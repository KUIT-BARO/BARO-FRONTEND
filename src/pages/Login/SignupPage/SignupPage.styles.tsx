import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background: linear-gradient(180deg, #5175ff 0%, #cfdae6 100%);
  font-family: "Pretendard", sans-serif;
`;

export const SignupButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 50px;
  background: #5175ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background-color 0.2s;
  &:disabled {
    background: gray;
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background: #3561d8;
  }
`;

// export const ResponsiveContainer = styled.div`
//   @media (max-width: 768px) {
//     ${InputSection}, ${SignupButton} {
//       max-width: 100%;
//     }
//   }
// `;
