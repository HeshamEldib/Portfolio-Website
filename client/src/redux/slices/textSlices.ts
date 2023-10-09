import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constant";

export const fetchText: any = createAsyncThunk(
  "textSlice/fetchText",
  async () => {
    const res = await fetch(`${URL}/api/text`);
    const data = await res.json();
    return data.data.texts;
  }
);

export interface CounterState {
  text: any[];
}

const initialState: CounterState = {
  text: [],
};

export const skillsSlice = createSlice({
  name: "projectByIdSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchText.fulfilled,
      (state, action: PayloadAction<any>) => {
        // Add user to the state array
        state.text.push(action.payload);
      }
    );
  },
});

// Action creators are generated for each case reducer function

export default skillsSlice.reducer;
