import { useReducer } from "react";

type Action = { type : 'INC' } | {type : 'DEC'}

const CountReducer = (current:number, action:Action):number => {
  if(action.type === 'INC'){
    return current + 1;
  } else if(action.type === 'DEC') {
    return current - 1;
  }
  return current;
};

const Counter = () => {
  const [count, dispatch] = useReducer(CountReducer,0);

  const increase = ():void => {
    dispatch({type:'INC'});
  };

  const descrease = ():void => {
    dispatch({type: 'DEC'});
  };
  return (
    <>
      <p>{`count : ${count}`}</p>
      <button onClick={increase}>+1</button>
      <button onClick={descrease}>-1</button>
    </>
  );
};
export {Counter};