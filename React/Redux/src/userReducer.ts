import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  name : string;
};

const initialState: UserState = {
  name : '손흥민'
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers : {
    changeName : (state, action:PayloadAction<string>) => { //페이로드 -> 같이 실어서 보내는 애들
      state.name = action.payload; 
    },
  },
});

export const { changeName } = userReducer.actions;
export default userReducer.reducer ;