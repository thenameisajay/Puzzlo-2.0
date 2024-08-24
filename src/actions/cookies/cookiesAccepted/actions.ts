'use server';

import { cookies } from 'next/headers';

export const isCookiesAccepted = async (): Promise<boolean | undefined> => {
  try {
    const acceptedCookies = cookies().get('PUZZLO-COOKIES-ACCEPTED');
    if (acceptedCookies?.value === 'false') {
      return false;
    } else if (acceptedCookies?.value === 'true') {
      return true;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
