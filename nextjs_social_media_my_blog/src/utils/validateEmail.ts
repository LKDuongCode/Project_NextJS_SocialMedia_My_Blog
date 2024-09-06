//trả về true false
export const validateEmail = (email: string) => {
  let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return format.test(String(email).toLowerCase());
};
