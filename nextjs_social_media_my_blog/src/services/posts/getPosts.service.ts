import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "@/api/index";

//hàm lấy data
export const getPosts: any = createAsyncThunk("posts/getPosts", async () => {
  let response = await baseURL.get("/posts");
  return response.data;
});
