export const validatePassword = (password: string) => {
  // Kiểm tra độ dài tối thiểu
  if (password.length < 6) {
    return false;
  }

  // Kiểm tra chứa ít nhất một chữ cái
  const hasLetter = /[a-zA-Z]/.test(password);

  // Kiểm tra chứa ít nhất một chữ số
  const hasDigit = /[0-9]/.test(password);

  // Kiểm tra chứa ít nhất một ký tự đặc biệt (không phải dấu cách)
  const hasSpecialChar = /[^a-zA-Z0-9\s]/.test(password);

  return hasLetter && hasDigit && hasSpecialChar;
};
