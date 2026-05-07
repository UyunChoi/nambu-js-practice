import reducer
import { createStore } from "redux"

export const store = create(reducer);

//컴포넌트에서 여기에 있는 것들을 불러 씀
