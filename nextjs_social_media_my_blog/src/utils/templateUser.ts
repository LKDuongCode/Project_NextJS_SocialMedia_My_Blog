import { User } from "@/interfaces/userType";

export let userTemplate: User = {
  id: 0,
  role: "user",
  status: "active",
  userName: "",
  name: "",
  email: "",
  avatar: "",
  banner: "",
  bio: "",
  fav: [],
  following: [],
  followers: [],
  groups: [],
  lastLogin: "", // dd/mm/yyyy
  password: "",
  phoneNumber: "",
  curAddress: {
    city: "",
    country: "",
  },
  comeFrom: {
    country: "",
    city: "",
  },
  create_at: "",
  dob: "", // date of birth
  notifications: [],
  profileVisibility: "public",
};
