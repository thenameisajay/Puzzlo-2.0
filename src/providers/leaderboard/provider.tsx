'use client';

import { createContext, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { api } from '@/trpc/react';
import { type Leaderboard } from '@/types/interfaces/leaderboard/types';

interface LeaderBoardContextType {
  data?: Leaderboard | undefined;
  isPending: boolean;
  isError: boolean;
}

const defaultLeaderboardContext: LeaderBoardContextType = {
  data: undefined,
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

  useEffect(() => {
    let isMounted = true;

    const fetchLeaderboard = async () => {
      if (isMounted && data && !isError) {
        console.log('Data found , returning data.');
      }
    };

    void fetchLeaderboard();

    return () => {
      isMounted = false;
    };
  }, [pathname, data, isError]);

  console.info('The Leaderboard Provider:', { data, isPending, isError });
  return (
    <LeaderboardContext.Provider value={{ data, isPending, isError }}>
      {children}
    </LeaderboardContext.Provider>
  );
}

export const useLeaderboard = () => useContext(LeaderboardContext);
