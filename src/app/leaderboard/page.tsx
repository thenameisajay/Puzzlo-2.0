'use client';

import ErrorComponent from '@/components/error/Component';
import LeaderboardComponent from '@/components/leaderboard/Component';
import LoadingComponent from '@/components/loading/Component';
import DesktopNav from '@/components/navbars/desktop/Component';
import MobileNav from '@/components/navbars/mobile/Component';
import { api } from '@/trpc/react';

export default function Page() {
  const { data, isPending, isError } =
    api.leaderboard.getLeaderboard.useQuery();

  if (isPending) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  return (
    <div className="flex min-h-screen flex-col bg-sky-500 p-6 md:p-12">
      <MobileNav />
      <DesktopNav />
      <div className="flex flex-grow  justify-center">
        <LeaderboardComponent leaderboard={data} />
      </div>
    </div>
  );
}
