import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderWrapper, InputWrapper, SearchIcon, Input, ReviewButton } from './Header.styles';

import Search from '../../../assets/icons/searchIcon.svg';
import Pencil from '../../../assets/icons/연필.svg'

export default function Header() {

  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <InputWrapper>
          <SearchIcon src={Search} alt="Search Icon" />
          <Input 
            type="text" 
            placeholder={!isInputFocused ? "건대입구" : ""}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}  
          />
        </InputWrapper>
        <ReviewButton>
          <img 
            src={Pencil} alt="Pencil Icon" 
            onClick={() => navigate('/search/reviewplace')}
          />
        </ReviewButton>
      </HeaderWrapper>
    </>
  );
};