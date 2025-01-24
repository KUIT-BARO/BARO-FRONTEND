import React from 'react';

import { HeaderWrapper, InputWrapper, SearchIcon, Input } from './Header.styles';

import Search from '../../../assets/icons/searchIcon.svg';

export default function Header() {

  const [isInputFocused, setIsInputFocused] = React.useState(false);

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
      </HeaderWrapper>
    </>
  );
};