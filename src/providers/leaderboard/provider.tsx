'use client';

import { createContext, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { api } from '@/trpc/react';
import { type Leaderboard } from '@/types/interfaces/leaderboard/types';

const defaultLeaderboard: Leaderboard = {
  leaderboards: [],
  date: new Date(),
  password: 0,
};

const LeaderboardContext = createContext<Leaderboard | undefined>(
  defaultLeaderboard,
);

export function LeaderboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const { data, isPending, isError } =
    api.check.ensureDailyLeaderboard.useQuery();

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
    <LeaderboardContext.Provider value={defaultLeaderboard}>
      {children}
    </LeaderboardContext.Provider>
  );
}

export const useLeaderboard = () => useContext(LeaderboardContext);
