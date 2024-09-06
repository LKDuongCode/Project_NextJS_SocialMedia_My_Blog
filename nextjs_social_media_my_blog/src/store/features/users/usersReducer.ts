import { getUsers } from "@/services/users/getUsers.service";
import { createSlice } from "@reduxjs/toolkit";

// khởi tạo
let initUsers: any = {
  loading: false,
  data: [],
  error: null,
};

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const usersReducer = createSlice({
  name: "users",
  initialState: initUsers,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        // trạng thái chờ lấy dữ liệu
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        //trạng thái lấy dữ liệu thành công

        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        //trạng thái lấy dữ liệu thất bại
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//xuất
export default usersReducer.reducer;
