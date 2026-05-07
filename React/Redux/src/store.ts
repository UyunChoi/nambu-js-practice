import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer : {
    counter : counterReducer,
    user : userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;