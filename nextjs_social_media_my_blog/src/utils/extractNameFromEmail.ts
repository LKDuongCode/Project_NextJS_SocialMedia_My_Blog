export function extractNameFromEmail(email: string): string {
  let name = email.split("@")[0];
  return name;
} /// hàm lấy tên từ gmail
