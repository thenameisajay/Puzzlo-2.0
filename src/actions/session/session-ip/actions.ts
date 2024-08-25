'use client';

import axios from 'axios';
import { isCookiesAccepted } from '@/actions/cookies/cookies-accepted/actions';
import { setIPCookie } from '@/actions/cookies/set-ip-cookie/actions';

export const getSessionIP = async (): Promise<string> => {
  try {
    const acceptedCookies = await isCookiesAccepted();

    if (acceptedCookies === false) {
      const defaultIp = '0.0.0.0';
      await setIPCookie(defaultIp);
      return defaultIp;
    }

    const response = await axios.get('https://api.ipify.org?format=json');
    console.log(response.data.ip);
    await setIPCookie(response.data.ip as string);
    const ipAddress = response.data.ip as string;

    return ipAddress;
  } catch (e) {
    console.error(e);
    return '0.0.0.0';
  }
};
