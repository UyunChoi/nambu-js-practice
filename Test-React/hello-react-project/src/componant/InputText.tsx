import { useState } from "react";
import LiveInput from "./LiveInput";
import ViewInput from "./ViewInput";

// 상태관리, 상태변경로직, 취합
const InputText = () => {
  const [text, settext] = useState<string>('');
  const ChangeTextFnc = (t:string) => {
    settext(t);
  };
  return(
    <>
      <LiveInput onChangeInput={ChangeTextFnc}/>
      <ViewInput viewText={text}/>
    </>
  );
};

export default InputText;