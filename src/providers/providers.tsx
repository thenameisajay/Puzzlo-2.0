'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserActivityProvider } from '@/providers/userActivity/provider';
import { TRPCReactProvider } from '@/trpc/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCReactProvider>
      <UserActivityProvider>{children}</UserActivityProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </TRPCReactProvider>
  );
};
