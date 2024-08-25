import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
export const scoreEngine = (tries: number, secondsElapsed: number) => {
  const nowUtc = dayjs().utc();

  // Extract hours, minutes, and seconds
  const hours = nowUtc.hour();
  const minutes = nowUtc.minute();
  const seconds = nowUtc.second();

  console.log(`Current UTC time: ${hours}h:${minutes}m:${seconds}s`);
  const maxScore = 1000000;
  const timeTakenWeight = 0.3;
  const timeTakenForADayWeight = 0.5;
  const numberOfTriesWeight = 0.2;

  const secondsPassed = hours * 3600 + minutes * 60 + seconds;
  console.log('Seconds Passed:', secondsPassed);
  const timeTakenForADay = 86400 - secondsPassed;

  const timeTakenForADayScore =
    maxScore * timeTakenForADayWeight * ((1 / 86400) * timeTakenForADay);
  const numberOfTriesScore =
    maxScore *
    numberOfTriesWeight *
    Math.max(0, 1 - Math.floor((tries - 1) / 10) * 0.05);
  const timeTakenScore =
    maxScore * timeTakenWeight * Math.max(0, 1 - (secondsElapsed / 30) * 0.1);

  return Math.round(
    timeTakenForADayScore + numberOfTriesScore + timeTakenScore,
  );
};

// Test the function
console.log('Score 1 : ', scoreEngine(100, 10));
console.log('Score 2 : ', scoreEngine(2, 10));
console.log('Score Perfect : ', scoreEngine(1, 1));
console.log('Score 3 : ', scoreEngine(2, 2));
