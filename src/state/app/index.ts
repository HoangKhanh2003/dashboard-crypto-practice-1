import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "src/types/app";
import { initialAppState } from "./initialState";

const initialState: AppState = initialAppState;

export const actSetVisibleModalDetailToken =
  (visible: boolean) => async (dispatch: any) => {
    console.log("ok");
    dispatch(setVisibleModalDetailToken(visible));
  };

export const AppSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setVisibleModalDetailToken: (state, action) => {
      const payload = action?.payload;
      state.visibleModalDetailToken = payload;
      return state;
    },
  },
  extraReducers: (builder) => {},
});

export const { setVisibleModalDetailToken } = AppSlice.actions;

export default AppSlice.reducer;
