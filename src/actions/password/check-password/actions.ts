export const checkPassword = (password: number, value: string) => {
  const numValue = Number(value);
  if (numValue === password) {
    return 0;
  } else if (numValue > password) {
    return 1;
  } else {
    return -1;
  }
};
