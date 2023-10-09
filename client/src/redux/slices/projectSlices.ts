import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constant";

export const fetchProjects: any = createAsyncThunk(
  "projectsSlice/fetchProjects",
  async () => {
    const res = await fetch(`${URL}/api/projects`);
    const data = await res.json();
    return data.data.projects;
  }
);

export interface CounterState {
  projects: any[];
}

const initialState: CounterState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchProjects.fulfilled,
      (state, action: PayloadAction<any>) => {
        // Add user to the state array
        state.projects.push(action.payload);
      }
    );
  },
});

// Action creators are generated for each case reducer function

export default projectsSlice.reducer;
