'use server';

import CryptoJS from 'crypto-js';

const secretKey = process.env.ENCRYPTION_KEY;

export const encryptPassword = async (password: number): Promise<string> => {
  if (!secretKey) {
    throw new Error('Encryption key is not defined');
  }
  const passwordString = password.toString();
  const encrypted = CryptoJS.AES.encrypt(passwordString, secretKey).toString();
  return encrypted;
};
