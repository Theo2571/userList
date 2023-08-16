import axios from "axios";
import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserItem } from "../types/interface";
const BASE_URL = "https://devapi.almurut.com/api/test/racers/";

const initialState = {
  users: {},
  results: [],
  color: "",
  name: "",
  speed: null,
  time: null,
} as unknown as UserItem;
export const getUsers: any = createAsyncThunk(
  "users/getUsers",
  async (page: number = 1) => {
    const res = await axios.get(`${BASE_URL}?page=${page}`, {});
    return res.data;
  },
);
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state: any, action) => {
      state.users = action.payload;
      state.results = action.payload.results;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state: any) => {
      state.loading = false;
    });
  },
});
export const userSliceReducer = userSlice.reducer;
