import { useRouter } from "next/router";
import React, { useState } from "react";
import style from './searchbar-layout.module.css'

export default function SearchBarLayout({children}: {children: React.ReactNode}) {
  const [searchWord, setSearchWord] = useState('')
  const onChangSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord (e.target.value);
  }
  const router = useRouter();
  const onSubmit = () => {
    if( !searchWord || router.query.q === searchWord ) return;
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input 
          type="text" 
          placeholder="검색어를 입력하시오..." 
          value={searchWord}
          onChange={onChangSearch}/>
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}