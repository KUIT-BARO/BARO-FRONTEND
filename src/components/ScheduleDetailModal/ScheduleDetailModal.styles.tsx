import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div<{ open: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f8fb;
  padding: 24px 20px;
  padding-bottom: calc(env(safe-area-inset-bottom) + 24px);
  z-index: 1001;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s ease-in-out;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: #000;
`;

export const ModalClose = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #000;
  cursor: pointer;
  padding: 0;
`;

export const FormSection = styled.div`
  margin-bottom: 32px;
`;

export const FormLabel = styled.label`
  font-size: 19px;
  font-weight: 600;
  color: black;
  margin-bottom: 8px;
  margin-left: 2px;
  display: block;
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 48px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 16px;
  margin-bottom: 16px;
  background-color: white;
  color: #000;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%23999999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const TimeSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const TimeColumn = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-bottom: 2px solid #c1c1c1;
  padding: 8px 0;
  font-size: 16px;
  box-sizing: border-box;
  color: #000;
  background-color: transparent;
  font-weight: 600;

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #5175ff;
  }
`;

export const LocationWrapper = styled(InputWrapper)``;

export const LocationIcon = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const LocationInput = styled(FormInput)`
  padding-left: 32px;
`;

export const InputCharCount = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #c1c1c1;
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  > button {
    border-radius: 10px !important;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff5151;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;
