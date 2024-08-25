import { useState } from 'react';
import { useEffect } from 'react';
import { type LeaderboardEntry } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import PageHeader from '../header/Component';
import TimerComponent from '../timer/Component';

dayjs.extend(utc);

const pageTitle = 'Leaderboard';

const pageDescription =
  'This board consists of the top 10 players in the game.';

export default function ScoreboardComponent({
  leaderboard,
}: {
  leaderboard: LeaderboardEntry[];
}) {
  const [resetLeaderboardTime, setResetLeaderboardTime] = useState(0);

  useEffect(() => {
    const currentTime = dayjs().utc();

    const nextResetTime = currentTime.add(1, 'day').startOf('day');

    const timeDifference = nextResetTime.diff(currentTime, 'second');

    setResetLeaderboardTime(timeDifference);

    //  Updating the time every second
    const interval = setInterval(() => {
      const now = dayjs().utc();
      const newTimeDifference = nextResetTime.diff(now, 'second');
      setResetLeaderboardTime(newTimeDifference);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log('Leaderboard:', leaderboard);

  const CustomisedTimerComponent = () => {
    return (
      <div className="flex min-w-full flex-col items-center justify-center">
        <h3
          className="text-2xl font-bold  text-gray-700
        "
        >
          Time until next reset:
        </h3>
        <TimerComponent seconds={resetLeaderboardTime} />
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col">
        <PageHeader
          title={pageTitle}
          description={pageDescription}
          className="mb-4"
        />
        <CustomisedTimerComponent />
      </div>
    </>
  );
}
