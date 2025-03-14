import styled from "styled-components";

export const Layout = styled.div`
  @media (min-width: 568px) {
    width: 476px;
    height: 182px;
  }
  width: 352px;
  height: 184px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #D7DEF7;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 10px 10px 0 0;
  background: ${props => 
    props.color === 'blue' ? '#EDF1FF' :
    props.color === 'yellow' ? '#FFFBDE' :
    props.color === 'red' ? '#F9D7D8' : '#EDF1FF'
  };
  height: 64px;
  width: 100%;
  padding: 20px;

  color: #000;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: -0.5px;

  img {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0 0 28px;
  color: var(--baro_black, #17171B);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;

  .info, .location, .date {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const Status = styled.div<{ color: string }>`
  display: flex;
  justify-content: flex-end;
  width: 46px;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-top: -29px;
  margin-left: auto;
  margin-right: 20px;
  z-index: 2;
  border-radius: 100px;

  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;

  background: ${props => 
    props.color === 'blue' ? '#5175FF' :
    props.color === 'yellow' ? '#FFBB00' :
    props.color === 'red' ? '#FF6467' : ''
  };
`;