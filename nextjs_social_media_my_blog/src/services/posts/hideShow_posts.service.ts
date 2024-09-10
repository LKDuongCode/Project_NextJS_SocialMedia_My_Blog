import baseURL from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//hàm khóa
export const hideAPost: any = createAsyncThunk(
  "posts/hideAPost",
  async (id: number) => {
    let response = await baseURL.patch(`/posts/${id}`, {
      display: false,
    });
    return response.data;
  }
);

export const showAPost: any = createAsyncThunk(
  "posts/showAPost",
  async (id: number) => {
    let response = await baseURL.patch(`/posts/${id}`, {
      display: true,
    });
    return response.data;
  }
);
