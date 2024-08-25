export const checkPassword = (password: number, value: string) => {
  if (value === password.toString()) {
    return 0;
  } else if (value > password.toString()) {
    return 1;
  } else {
    return -1;
  }
};
