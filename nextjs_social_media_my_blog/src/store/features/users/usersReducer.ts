import { User } from "@/interfaces/userType";
import { addToUsers } from "@/services/users/addUsers.service";
import { getUsers } from "@/services/users/getUsers.service";
import {
  lockAnUser,
  unlockAnUser,
} from "@/services/users/lock_unlonk_User.service";
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
      })
      .addCase(addToUsers.fulfilled, (state, action) => {
        //thêm mới user
        state.data = [...state.data, action.payload];
      })
      .addCase(lockAnUser.fulfilled, (state, action) => {
        //khóa user
        let updatedUser = action.payload;
        state.data = state.data.map((user: User) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      })
      .addCase(unlockAnUser.fulfilled, (state, action) => {
        //mở khóa user
        let updatedUser = action.payload;
        state.data = state.data.map((user: User) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      });
  },
});

//xuất
export default usersReducer.reducer;
