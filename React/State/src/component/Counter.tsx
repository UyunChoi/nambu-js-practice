import { useState } from "react";

interface CounterProps {
  init : number;
/*   count : number;
  sum : number; */
}

const Counter = ({init}:CounterProps) => {

/*   const handleClick = () => {
    count += 1;
  }
  sum = init + count;
 */

  const [count, setCount] = useState<number>(init);

  const handleClick = (): void => {
    //setCount(count+1);
    setCount(count+1);

    setCount((prev) => prev+1); //콜백 함수로 전달해야하는 이유
  };

  return(<>
    <h1>클릭 카운터</h1>
    <p>현재 클릭 수 : {count}</p>
    <button onClick={handleClick}>클릭하세요</button>
  </>)


};

export default Counter;