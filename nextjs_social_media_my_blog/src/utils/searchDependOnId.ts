import { User } from "@/interfaces/userType";
// tìm kiếm 1 user theo id
export const searchUserById = (id: number, users: User[]) => {
  const user = users.find((user) => user.id === id);
  if (user) return user;
  else "không tìm thấy user";
};

// lọc một mảng users theo từ khóa
export const searchUsersByName = (searchTerm: string, users: User[]) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return users.filter((user) =>
    user.name.toLowerCase().includes(lowerCaseSearchTerm)
  );
};
