import { useMemo, useState } from "react";

const ExUseTest2 = () => {
  const [query, setQuery] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const list = ['apple', 'banana','grape','orange'];
  
  const filtered = useMemo(()=>{
    console.log('test : useMomo 실행');
    return list.filter((item)=>item.includes(query));
  },[query]);

  return(
    <>
      <h3>검색</h3>
      <input value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="검색어 입력"/>
      <h3>관련 없는 상태 변경</h3>
      <button onClick={() => setCount(count+1)}>{count}</button>
      <ol>
        {filtered.map((item)=>(
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
};