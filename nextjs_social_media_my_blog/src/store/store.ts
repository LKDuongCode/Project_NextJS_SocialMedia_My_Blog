import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersReducer";
import postsReducer from "./features/posts/postsReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      posts: postsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
