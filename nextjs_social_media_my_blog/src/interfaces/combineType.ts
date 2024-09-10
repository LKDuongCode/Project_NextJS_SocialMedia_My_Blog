import { StatePostType } from "./postType";
import { StateUserType } from "./userType";

// type chung
export interface CombineType {
  users: StateUserType;
  posts: StatePostType;
}
