import { DESCREASE, INCREASE, type Action } from "./actions";

export type State = {
  value: number;
}

//리덕스 툴킷 사용전, 원리
const reducer = (state:State = {value:0}, action: Action) => {
  switch(action.type)
    case INCREASE : 
      return {...state, value:state.value+1};
    case DESCREASE : 
      return {...state, value:state.value-1};
    default:
      return state;
};

export default reducer;