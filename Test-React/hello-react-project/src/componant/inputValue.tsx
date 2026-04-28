import { useState } from "react";
import WriteInputData from "./writeInputData";
import PrintValue from "./PrintValue";

const InputData = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const ChangeInput = (changeText:string) => {
    setInputValue(changeText);
  };
  return (<>
{/*     <WriteInputData/>
    <PrintValue/> */}
  </>);
};

export default InputData;