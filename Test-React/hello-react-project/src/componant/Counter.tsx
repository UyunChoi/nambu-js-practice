import { useState } from "react";
interface CounterProps {
  clickCount : number;
}

const Counter = ({clickCount}:CounterProps) => {
  const [count, setCount] = useState<number>(0);
  //clickCount = count;
  const addCount = ():void => {
    setCount((prev) => prev +1);
  };
  return(
    <div>
      <p>{`현 count : ${count} (${clickCount})`}</p>
      <button onClick={addCount}>클릭</button>
    </div>
  );
};

export default Counter;