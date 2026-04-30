import { useEffect, useState } from 'react';
import '../css/SearchArea.css';
import type { Book, ApiResponse } from '../types/Book';
import SearchBar from './SearchBar';
import BookList from './BookList';
import Pagination from './Pagination';
import useFetch from '../hooks/useFetch';
//const endPoint = 'https://dapi.kakao.com/v3/search/book'; //나중에는 커스텀 훅으로 빼기

const SearchArea = () => {
  const url = 'https://dapi.kakao.com/v3/search/book';
  const apiKey ='KakaoAK cfa090b9be328f65cbabc623cb6998b8';

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const { documents, isEnd } = useFetch<Book>(query, page, url, apiKey)
  
    // 쿼리, 페이지네이션, book[]
  const onChangeQuery = (q:string) => {
    setQuery(q);
    setPage(1);
  };

  const onChangePagePrev = (prev:number) => {
    setPage((prev)=>prev-1)
  }

  const onChangePageNext = (prev:number) => {
    setPage((prev)=>prev+1)
  }

  return(
    <div className='search-area'>
      <SearchBar onChangeQuery={onChangeQuery}/>
      <BookList books={documents}/>
      <Pagination 
        page={page} 
        onChangePagePrev={onChangePagePrev} 
        onChangePageNext={onChangePageNext}
        isEnd={isEnd}
      />
    </div>
  );
};

export default SearchArea;