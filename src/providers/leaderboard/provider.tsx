'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { decryptPassword } from '@/actions/password/decrypt-password/actions';
import { api } from '@/trpc/react';
import { type Leaderboard } from '@/types/interfaces/leaderboard/types';

interface LeaderBoardContextType {
  newData?: Leaderboard | undefined;
  isPending: boolean;
  isError: boolean;
}

const defaultLeaderboardContext: LeaderBoardContextType = {
  newData: undefined,
  isPending: false,
  isError: false,
};

const LeaderboardContext = createContext<LeaderBoardContextType | undefined>(
  defaultLeaderboardContext,
);

export function LeaderboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data, isPending, isError } =
    api.leaderboard.ensureDailyLeaderboard.useQuery();
  const [newData, setNewData] = useState<Leaderboard | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;

    const fetchLeaderboard = async () => {
      if (isMounted && data && !isError) {
        console.log('Data found , returning data.');

        const encryptedPassword = data.password;
        const decryptedPassword: number | undefined = await decryptPassword(
          encryptedPassword ?? '',
        );

        const updatedData = {
          ...data,
          password: decryptedPassword ?? 0,
        };

        if (isMounted) {
          setNewData(updatedData);
        }

        console.info('The Leaderboard Provider:', {
          updatedData,
          isPending,
          isError,
        });
      }
    };

    void fetchLeaderboard();

    return () => {
      isMounted = false;
    };
  }, [pathname, data, isError, isPending]);

  console.info('The Leaderboard Provider:', { newData, isPending, isError });

  return (
    <LeaderboardContext.Provider value={{ newData, isPending, isError }}>
      {children}
    </LeaderboardContext.Provider>
  );
}

export const useLeaderboard = () => useContext(LeaderboardContext);
