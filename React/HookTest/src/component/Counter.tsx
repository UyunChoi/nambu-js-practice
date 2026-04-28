import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(()=>{
    console.log(`count 변경 : ${count}`);
  },[count]);

  return (
    <button onClick={()=> setCount(count + 1)}>{count}</button>
  );
};
export default Counter;