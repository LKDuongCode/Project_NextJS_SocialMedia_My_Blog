import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/interfaces/userType";
import baseURL from "@/api";

//hàm thêm vào mảng users
export const addToUsers: any = createAsyncThunk(
  "users/addToUsers",
  async (user: User) => {
    let response = await baseURL.post("/users", user);
    return response.data;
  }
);
