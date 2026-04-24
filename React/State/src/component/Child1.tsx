import React from "react";
//import type {ChangeEvent} from 'react'

interface Child1Props {
  onInputChange : (inputValue:string) => void;
}

const Child1 = ({onInputChange}:Child1Props) => {
  const handleChange = (ce:React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(ce.target.value)
  }
  return(<>
    <input type="text" onChange={handleChange} placeholder="입력하세요"/>
  </>);
};

export default Child1;