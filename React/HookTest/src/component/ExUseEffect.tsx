import { useEffect, useState } from "react";

const ExUseEffect = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    document.title = `${count}번 클릭.`;
  },[count])

  return(<>
    <button onClick={()=>setCount((prev)=>(prev)+1)}>
      <p>{count}번 클릭했습니다.</p>
    </button>
  </>);
};

export default ExUseEffect;