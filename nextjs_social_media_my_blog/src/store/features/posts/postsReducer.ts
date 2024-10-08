import { Post } from "@/interfaces/postType";
import { addToPosts } from "@/services/posts/addPosts";
import { getPosts } from "@/services/posts/getPosts.service";
import { hideAPost, showAPost } from "@/services/posts/hideShow_posts.service";
import { createSlice } from "@reduxjs/toolkit";

// khởi tạo
let initPosts: any = {
  loading: false,
  data: [],
  error: null,
};

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const postsReducer = createSlice({
  name: "posts",
  initialState: initPosts,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        // trạng thái chờ lấy dữ liệu
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        //trạng thái lấy dữ liệu thành công

        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        //trạng thái lấy dữ liệu thất bại
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToPosts.fulfilled, (state, action) => {
        //thêm mới
        state.data = [...state.data, action.payload];
      })
      .addCase(hideAPost.fulfilled, (state, action) => {
        //ẩn bài viết
        let updatedPost = action.payload;
        state.data = state.data.map((post: Post) =>
          post.id === updatedPost.id ? updatedPost : post
        );
      })
      .addCase(showAPost.fulfilled, (state, action) => {
        //hiện bài viết
        let updatedPost = action.payload;
        state.data = state.data.map((post: Post) =>
          post.id === updatedPost.id ? updatedPost : post
        );
      });
  },
});

//xuất
export default postsReducer.reducer;
