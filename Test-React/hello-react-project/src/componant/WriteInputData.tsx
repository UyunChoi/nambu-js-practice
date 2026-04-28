import { useState } from "react";
interface WriteInputDataProps {
  write : (w:string) => void;
}

const WriteInputData = ({write}:WriteInputDataProps) => {
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    write(e.target.value)
  };
  return(
    <>
      <input type="text" onChange={onChangeInput} placeholder="입력"></input>
      <button>입력</button>
    </>
  );
};

export default WriteInputData;