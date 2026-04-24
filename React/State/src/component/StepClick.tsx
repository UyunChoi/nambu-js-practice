import type { ChangeEvent } from 'react'

interface StepClickProps {
  step : number;
  onClickBtn : (stepNum:number) => void;
}

const StepClick = ({step,onClickBtn}:StepClickProps) => {
  const changeNum = () => onClickBtn(step); // step || stepNum
  
  return(<>
    <button className="btn" onClick={changeNum}>
      {step}
    </button>
  </>);
}

export default StepClick;
// 뭘 넘겨줘야 되지 않나??? -> 이벤트

/*     
    <button>-1</button>
    <button>1</button>
    <button>5</button> 
    */


/* 뭐하려고 했지? -> 화면에서 받아올 필요가 없지 -> HTML
const changeNum = (e:React.ChangeEvent<HTMLButtonElement>) => {
onClick(e.target.value); 
*/

// <button className="btn" onClick={changeNum}> //stepClick : props