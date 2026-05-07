// state 변경
// UseDispatch -> store에 있는
import { useDispatch} from "react-redux";
import { increase, descrease } from "./counterReducer";
const CounterA = () => {
  //useSelectoer를 통해서
  const dispatch = useDispatch();
  return(
    <div>
      <button onClick={()=>dispatch(increase())}> <h1>+</h1></button>
    </div>
  );
};
//onClick={()=>dispatch(increase())} 함수를 호출해줘야함

export default CounterA;