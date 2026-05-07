// state 변경
// UseDispatch -> store에 있는
import { useDispatch} from "react-redux";
import { increase } from "./store";
const CounterA = () => {
  const dispatch = useDispatch();
  return(
    <div>
      <button onClick={()=>dispatch(increase())}> <h1>+</h1></button>
    </div>
  );
};
//onClick={()=>dispatch(increase())} 함수를 호출해줘야함

export default CounterA;