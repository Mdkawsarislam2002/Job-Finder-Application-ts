import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../utils/axiosInstance";

export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  const response = await AxiosInstance.get("/jobs");
  return response.data;
});
