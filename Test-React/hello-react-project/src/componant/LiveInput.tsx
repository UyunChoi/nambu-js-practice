import { useState } from "react";

interface LiveInputProps {
  onChangeInput : (fnc:string) => void
}

const LiveInput = ({onChangeInput}:LiveInputProps) => {
  const ChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(event.target.value);
  };
  return(
    <div>
      <input type="text" onChange={ChangeInputValue} placeholder="입력하세요."/>
    </div>
  );
};

export default LiveInput;