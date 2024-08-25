'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getSessionIP } from '@/actions/session/session-ip/actions';
import { api } from '@/trpc/react';
import { type UserActivity } from '@/types/interfaces/userActivity/types';

const defaultUserActivity: UserActivity = {
  visitor_ip: '',
  action_name: '',
  page_name: '',
  created_at: new Date(),
};

const UserActivityContext = createContext<UserActivity>(defaultUserActivity);

export function UserActivityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [userActivity, setUserActivity] =
    useState<UserActivity>(defaultUserActivity);

  // Initialize the mutation hook
  const { mutate } = api.userActivity.create.useMutation({
    onSuccess: (data) => {
      console.log('User activity saved successfully:', data);
    },
    onError: (err) => {
      console.error('Error saving user activity:', err);
    },
  });

  useEffect(() => {
    let isMounted = true;

    const pageVisit = async () => {
      try {
        const visitor_ip = await getSessionIP();
        const action_name = 'page_view';

        const created_at = new Date();

        const newUserActivity: UserActivity = {
          visitor_ip,
          action_name,
          page_name: pathname,
          created_at,
        };

        if (isMounted) {
          mutate(newUserActivity);

          setUserActivity(newUserActivity);
        }
      } catch (error) {
        console.error('Error preparing user activity:', error);
      }
    };

    void pageVisit();

    return () => {
      isMounted = false;
    };
  }, [pathname, mutate]);

  return (
    <UserActivityContext.Provider value={userActivity}>
      {children}
    </UserActivityContext.Provider>
  );
}

export const useUserActivity = () => useContext(UserActivityContext);
