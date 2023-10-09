import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constant";

export const fetchSkills: any = createAsyncThunk(
  "skillsSlice/fetchSkills",
  async () => {
    const res = await fetch(`${URL}/api/skills`);
    const data = await res.json();
    return data.data.skills;
  }
);

export interface CounterState {
  skills: any[];
}

const initialState: CounterState = {
  skills: [],
};

export const skillsSlice = createSlice({
  name: "projectByIdSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchSkills.fulfilled,
      (state, action: PayloadAction<any>) => {
        // Add user to the state array
        state.skills.push(action.payload);
      }
    );
  },
});

// Action creators are generated for each case reducer function

export default skillsSlice.reducer;
