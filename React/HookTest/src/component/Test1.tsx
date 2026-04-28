import { useEffect, useState } from "react";

const Test1 = () => {
  const [time, setTime] = useState<number>(0);
  useEffect(()=>{
    console.log(`현 time : ${time}`);

    const id = setInterval(() => setTime((t)=>t+1), 1000);
    /* 
    // clean up
    return () => {
      console.log('clean up');
      clearInterval(id);
    };
     */
  
  },[time]);
  
  return(
    <>
      <h1>{time}</h1>
    </>
  );
};

export default Test1;