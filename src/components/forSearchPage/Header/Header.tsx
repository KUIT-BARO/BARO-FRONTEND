import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderWrapper, InputWrapper, SearchIcon, Input, ReviewButton } from './Header.styles';

import Search from '../../../assets/icons/searchIcon.svg';
import Pencil from '../../../assets/icons/연필.svg'

interface HeaderProps {
  placeholder: string;
  onSearch: (address: string) => void;
}

export default function Header({ placeholder, onSearch }: HeaderProps) {
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const navigate = useNavigate();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(inputValue);
      e.currentTarget.blur();
    }
  };

  return (
    <>
      <HeaderWrapper>
        <InputWrapper>
          <SearchIcon src={Search} alt="Search Icon" />
          <Input 
            type="text" 
            placeholder={!isInputFocused ? placeholder : ""}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
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