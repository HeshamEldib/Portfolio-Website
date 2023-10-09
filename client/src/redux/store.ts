import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./slices/projectSlices";
import projectByIdSlice from "./slices/projectByIdSlices";
import skillsSlice from "./slices/skillsSlices";
import textSlice from "./slices/textSlices";

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    projectById: projectByIdSlice,
    skills: skillsSlice,
    text: textSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
