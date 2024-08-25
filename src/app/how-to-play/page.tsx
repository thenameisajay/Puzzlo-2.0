'use client';

import ErrorComponent from '@/components/error/Component';
import HowToPlayComponent from '@/components/how-to-play/Component';
import LoadingComponent from '@/components/loading/Component';
import DesktopNav from '@/components/navbars/desktop/Component';
import MobileNav from '@/components/navbars/mobile/Component';
import { useLeaderboard } from '@/providers/leaderboard/provider';

export default function Page() {
  const { data, isPending, isError } = useLeaderboard() || {};

  console.log('Leaderboard Data:', data);
  console.log('isPending:', isPending);
  console.log('isError:', isError);

  if (isPending) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  return (
    <div className="min-h-screen bg-sky-500 p-6 md:p-12">
      <MobileNav />
      <DesktopNav />
      <HowToPlayComponent />
    </div>
  );
}
