import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "@/api/index";

//hàm lấy data
export const getUsers: any = createAsyncThunk("users/getUsers", async () => {
  let response = await baseURL.get("/users");
  return response.data;
});
