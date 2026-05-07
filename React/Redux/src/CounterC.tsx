// state 변경
// UseDispatch -> store에 있는
import { useDispatch, useSelector} from "react-redux";
import { increase, descrease } from "./counterReducer";
import { changeName } from "./userReducer";
import type { RootState } from "./store";
const CounterC = () => {
  const count = useSelector((state:RootState) => state.counter.value); //useSelectoer를 통해서
  //const count = useSelector((state: {value.number}) => state.counter.value) // stor에서 가지고 오도록 변경함 
  const name = useSelector((state:RootState) => state.user.name);

  const dispatch = useDispatch();
  
  return(
    <div>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increase())}> <h1>+</h1> </button>
      <button onClick={()=>dispatch(descrease())}> <h1>-</h1> </button>
      <button></button>
      <button></button>
    </div>
  );
};
//onClick={()=>dispatch(increase())} 함수를 호출해줘야함

export default CounterC;