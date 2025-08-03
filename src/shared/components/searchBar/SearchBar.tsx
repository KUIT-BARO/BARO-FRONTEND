import React from 'react';
import * as styles from '@shared/components/searchBar/SearchBar.css';
import { IcSearch, IcScope } from '@svg/index';

interface SearchBarProps {
  searchIcon?: 'search' | 'scope';
  placeholder?: string;
  onSearch?: (_query: string) => void;
}

export default function SearchBar({
  searchIcon = 'search',
  placeholder,
  onSearch
}: SearchBarProps ) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      if (onSearch) { onSearch(target.value);}
      target.value = '';
    }
  };

  return (
    <div className={styles.searchBarWrapper}>
      {searchIcon === 'search' && <IcSearch className={styles.searchIcon} />}
      {searchIcon === 'scope' && <IcScope className={styles.searchIcon} />}
      <input
        className={styles.searchInput}
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
