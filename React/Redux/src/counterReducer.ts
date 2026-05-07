import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name : 'counter',
  initialState : {value:0},
  reducers : {
    increase : (state) => {state.value += 1},
    descrease : (state) => {state.value -= 1}
  }
});

export const { increase, descrease } =counterReducer.actions;
//export const store = configureStore({reducer:counterSlice.reducer}); -> 합쳐서 하나로
export default counterReducer.reducer;