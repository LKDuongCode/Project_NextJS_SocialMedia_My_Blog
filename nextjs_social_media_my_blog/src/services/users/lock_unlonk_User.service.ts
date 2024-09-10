import baseURL from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//hàm khóa
export const lockAnUser: any = createAsyncThunk(
  "users/lockAnUser",
  async (id: number) => {
    let response = await baseURL.patch(`/users/${id}`, {
      status: "banned",
    });
    return response.data;
  }
);

export const unlockAnUser: any = createAsyncThunk(
  "users/unlockAnUser",
  async (id: number) => {
    let response = await baseURL.patch(`/users/${id}`, {
      status: "active",
    });
    return response.data;
  }
);
