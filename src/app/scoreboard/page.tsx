'use client';

import ErrorComponent from '@/components/error/Component';
import LoadingComponent from '@/components/loading/Component';
import DesktopNav from '@/components/navbars/desktop/Component';
import MobileNav from '@/components/navbars/mobile/Component';
import { api } from '@/trpc/react';

export default function Page() {
  const { data, isPending, isError } =
    api.leaderboard.getLeaderboard.useQuery();

  if (isPending) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  console.info('Leaderboard data:', data);

  return (
    <div className="flex min-h-screen flex-col bg-sky-500 p-6 md:p-12">
      <MobileNav />
      <DesktopNav />
      <div className="flex flex-grow items-center justify-center"></div>
    </div>
  );
}
