import { useState } from "react";
import StepPrint from "./StepPrint";
import StepClick from "./StepClick";

const Step = () => {
  const [count, setCount] = useState<number>(0);
  const onChangeStep = (step:number) => setCount((prev)=>prev+step);
  return(<>
    <StepPrint current={count}/>
    <StepClick step={-1} onClickBtn={onChangeStep}/> 
    <StepClick step={1} onClickBtn={onChangeStep}/> 
    <StepClick step={5} onClickBtn={onChangeStep}/> 
  </>);
}

export default Step;

//(1)
// 클릭
// 계산 (-> 버튼에 따라) // 부모
// 출력 

//(2)
//step 마다 따로 하거나?

/* 내가 제대로 넘기고 있는게 맞나? -> 이게 중요한건데
  return(<>
    <StepClick step ={onChangeStep}/>
    <StepPrint ={count}/>
  </>); 
*/

// 내가 하려던 것과 차이
// 왜 차이가 나는지


// 어떤게 부모고 자식인지
// 자식간의 통신x