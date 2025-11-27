import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  count: number;
}

const initialState: InitialState = {
  count: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
