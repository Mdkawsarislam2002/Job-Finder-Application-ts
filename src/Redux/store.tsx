import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./feature/All_Jobs/Jobs";

const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
  },
});

export default store;
