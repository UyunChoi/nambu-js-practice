import { useRef } from "react";

const ExUseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<number>(0);
  
  const onClickBtn = () => {
    inputRef.current?.focus();
    countRef.current += 1;
  };
  return(
    <>
      <input type="text" ref={inputRef}>{`inputRef: ${inputRef}`}</input>
      <button onClick={onClickBtn}></button>
    </>
  );
};

export default ExUseRef;