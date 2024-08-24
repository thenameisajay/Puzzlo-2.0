'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LeaderboardProvider } from '@/providers/leaderboard/provider';
import { UserActivityProvider } from '@/providers/userActivity/provider';
import { TRPCReactProvider } from '@/trpc/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCReactProvider>
      <LeaderboardProvider>
        <UserActivityProvider>{children}</UserActivityProvider>
      </LeaderboardProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </TRPCReactProvider>
  );
};
