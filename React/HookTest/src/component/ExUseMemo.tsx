import { useMemo } from "react";

type Props = {
  num : number
};

const ExUserMemo = ({num}:Props) => {
  const expensiveCalc = (n:number) => {
    console.log()
    return num*2;
  };
  const memorizedValue = useMemo(()=>expensiveCalc(num), [num]);
  return (
    <div>{memorizedValue}</div>
  );
};
export default ExUserMemo;