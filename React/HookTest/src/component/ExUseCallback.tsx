import { useCallback, useState } from "react";

const ExUseCallback = () => {
  const [count, setCount] = useState<number>(0);

  const onClick = useCallback(()=>{
    console.log(`test : useCallback : 버튼 클릭`)
  },[]);

  return(
    <>
      <button onClick={onClick}>클릭 {count}</button>
      <button onClick={()=>setCount(count+1)}>카운트 증가 {count}</button>
    </>
  );
};

export default ExUseCallback;