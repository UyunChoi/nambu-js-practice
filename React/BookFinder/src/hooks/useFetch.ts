import type { ApiResponse } from "../types/Book";
import { useEffect, useState } from "react";




const useFetch = <T>(query:string, page:number, url:string, apiKey:string) => {
  const [documents, setDocuments] = useState<T[]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  
  useEffect(()=>{
    if(!query) return;
    
    const fetchBooks = async() => {
      try {
        const encodedQuery = encodeURIComponent(query); //나중에는 커스텀 훅으로 빼기 -> userFetch
        const endPoint = `${url}?query=${encodedQuery}&page=${page}`
        const response = await fetch(endPoint, {headers: {Authorization : apiKey}}); // .evn
        //네트워크 통신
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiResponse<T> = await response.json(); // json() -> promise 반환
        setDocuments(data.documents);
        setIsEnd(data.meta.is_end);
      } catch (error) {
        console.log(`검색 중 오류`,error);
      }
    };
    fetchBooks();
  },[query, page, url, apiKey]);

  return { documents, isEnd }; // 상태로 관리하는 것들을 리턴
};

export default useFetch;