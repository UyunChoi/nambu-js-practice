import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [inputValue, setInputVale] = useState<string>('');
  const handleInputChange = (value:string) => {
    setInputVale(value);
  }
  return (<>
    <h1>State 올리기</h1>
    <Child1 onInputChange={handleInputChange}></Child1>
    <Child2 value={inputValue}></Child2>
  </>);
};
export default Parent;