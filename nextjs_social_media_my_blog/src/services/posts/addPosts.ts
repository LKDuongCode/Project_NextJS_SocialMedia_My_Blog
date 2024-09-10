import { createAsyncThunk } from "@reduxjs/toolkit";

import baseURL from "@/api";
import { Post } from "@/interfaces/postType";

//hàm thêm vào mảng users
export const addToPosts: any = createAsyncThunk(
  "posts/addToPosts",
  async (post: Post) => {
    let response = await baseURL.post("/posts", post);
    return response.data;
  }
);
