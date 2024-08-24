'use client';

import axios from 'axios';

export const getSessionIP = async (): Promise<string> => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    console.log(response.data.ip);
    const ipAddress = response.data.ip as string;

    return ipAddress;
  } catch (e) {
    console.error(e);
    return '0.0.0.0';
  }
};
