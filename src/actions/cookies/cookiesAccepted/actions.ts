'use server';

import { cookies } from 'next/headers';

export const isCookiesAccepted = async (): Promise<boolean> => {
  try {
    const acceptedCookies = cookies().get('PUZZLO-COOKIES-ACCEPTED');
    if (acceptedCookies?.value === 'false') {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};
