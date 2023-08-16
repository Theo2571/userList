import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./UserSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSliceReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
