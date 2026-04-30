import { useRef } from 'react';
import '../css/SearchBar.css';

interface SearchBarProps {
  onChangeQuery : (q:string) => void;
}

const SearchBar = ({onChangeQuery}:SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearchClick = () => {
    if(!inputRef.current) return;
    onChangeQuery(inputRef.current.value)
  };
  return(
    <div className='search-bar'>
      <input
        type='text'
        placeholder='검색어를 입력하세요.'
        ref ={inputRef}
      />
      <button onClick={handleSearchClick}>검색</button>
    </div>
  );
};

export default SearchBar;