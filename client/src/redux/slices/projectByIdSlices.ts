import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjectById: any = createAsyncThunk(
  "projectsByIdSlice/fetchProjectById",
  async (projectId: string) => {
    const res = await fetch(`http://localhost:5000/api/projects/${projectId}`);
    const data = await res.json();
    return data.data.project;
  }
);

export interface CounterState {
  project: any[];
}

const initialState: CounterState = {
  project: [],
};

export const projectByIdSlice = createSlice({
  name: "projectByIdSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchProjectById.fulfilled,
      (state, action: PayloadAction<any>) => {
        // Add user to the state array
        state.project.push(action.payload);
      }
    );
  },
});

// Action creators are generated for each case reducer function

export default projectByIdSlice.reducer;
