// state 변경
// UseDispatch -> store에 있는
import { useDispatch} from "react-redux";
import { descrease } from "./actions";
const CounterB = () => {
  const dispatch = useDispatch();
  return(
    <div>
      <button onClick={()=>dispatch(descrease())}> <h1>+</h1></button>
    </div>
  );
};
//onClick={()=>dispatch(increase())} 함수를 호출해줘야함

export default CounterB;