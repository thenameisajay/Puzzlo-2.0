'use client';

import ErrorComponent from '@/components/error/Component';
import LoadingComponent from '@/components/loading/Component';
import DesktopNav from '@/components/navbars/desktop/Component';
import MobileNav from '@/components/navbars/mobile/Component';
import PlayComponent from '@/components/play/Component';
import { useLeaderboard } from '@/providers/leaderboard/provider';

export default function Page() {
  const { data, isPending, isError } = useLeaderboard() || {};

  console.log('Leaderboard Data:', data);
  console.log('isPending:', isPending);
  console.log('isError:', isError);

  if (isPending) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  const password = data?.password || 0;

  const leaderboardID = data?.id || 0;

  return (
    <div className="flex min-h-screen flex-col bg-sky-500 p-6 md:p-12">
      <MobileNav />
      <DesktopNav />
      <div className="flex flex-grow items-center justify-center">
        <PlayComponent password={password} leaderboardID={leaderboardID} />
      </div>
    </div>
  );
}
