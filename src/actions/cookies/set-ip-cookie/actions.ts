'use server';

import { cookies } from 'next/headers';

export const setIPCookie = async (ip: string) => {
  try {
    cookies().set('PUZZLO-SESSION-IP', ip);

    console.log('Session IP: ', ip);
    return;
  } catch (error) {
    console.error('Error setting cookie for IP', error);
    return;
  }
};
