export type User = {
  id: number;
  role: "user" | "admin";
  status: "active" | "suspended" | "banned";
  userName: string;
  name: string;
  email: string;
  avatar: string;
  banner: string;
  bio: string;
  following: Following[];
  followers: Follower[];
  groups: [];
  lastLogin: string; // dd/mm/yyyy
  password: string;
  phoneNumber: string;
  curAddress: {
    city: string;
    country: string;
  };
  comeFrom: {
    country: string;
    city: string;
  };
  create_at: string;
  dob: string; // date of birth
  notifications: NotificationType[];
  profileVisibility: "public" | "private" | "friends";
};

export type Following = {
  id: number;
  follow_at: string;
};

export type Follower = {
  id: number;
  follow_at: string;
};

export type NotificationType = {
  // todo : cần tạo một mảng riêng hoàn chỉnh
  id: number;
  type: "follow" | "comment" | "like" | "admin"; // Loại thông báo
  createdAt: string; // Thời gian thông báo, định dạng ISO hoặc dd/mm/yyyy
  read: boolean; // Trạng thái đã đọc hay chưa
};

// state
export type StateUserType = {
  loading: boolean;
  data: User[];
  error: string | null;
};
