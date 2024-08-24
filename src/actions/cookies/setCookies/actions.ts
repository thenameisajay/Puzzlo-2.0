'use server';

import { cookies } from 'next/headers';

export const setCookiesAccepted = async (userAccepted: boolean) => {
  try {
    cookies().set('PUZZLO-COOKIES-ACCEPTED', userAccepted ? 'true' : 'false');
    console.log('Cookies Accepted: ', userAccepted);

    return;
  } catch (error) {
    console.error('Error setting cookie for IP', error);
    return error;
  }
};
