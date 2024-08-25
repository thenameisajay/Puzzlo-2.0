'use server';

import CryptoJS from 'crypto-js';

const secretKey = process.env.ENCRYPTION_KEY;
export const decryptPassword = async (
  encryptedPassword: string,
): Promise<number | undefined> => {
  if (!secretKey) {
    console.error('No secret key found');
    return undefined;
  }
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  try {
    const password = Number(decrypted);
    return password;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
