export const generateRandomPassword = async () => {
  const min = 0;
  const max = 9999;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const final = randomNum.toString().padStart(4, '0');
  return Number(final);
};
