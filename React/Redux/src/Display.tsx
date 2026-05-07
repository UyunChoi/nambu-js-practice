import { useSelector } from "react-redux";

// store에 있는 벨류값을 하나 가져옮
const Display = () => {
  const count = useSelector((state:{value:number})=>state.value);
  
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Display;