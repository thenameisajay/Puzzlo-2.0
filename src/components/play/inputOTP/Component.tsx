'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

dayjs.extend(utc);

export default function InputOTPComponent({ password }: { password: number }) {
  const [value, setValue] = useState('');
  const [isPasswordLower, setIsPasswordLower] = useState<boolean | null>(null);
  const [correctPassword, setCorrectPassword] = useState<boolean | undefined>(
    undefined,
  );
  // Setting up the variables for the score algorithm
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [tries, setTries] = useState(1);
  const [score, setScore] = useState(0);

  const puzzloCustomStyle =
    '2xl:text-6xl h-16 w-16 text-base text-white md:text-xl lg:h-28 lg:w-28 lg:text-4xl xl:h-32 xl:w-32 bg-white text-yellow-500 ';

  const arrowCustomStyle =
    'animate-pulse text-7xl text-yellow-500 lg:text-8xl ';

  const calculateScore = (tries: number, secondsElapsed: number) => {
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
    const timeTakenForADay = 86400 - secondsPassed;

    const timeTakenForADayScore =
      maxScore * timeTakenForADayWeight * ((1 / 86400) * timeTakenForADay);
    const numberOfTriesScore =
      maxScore *
      numberOfTriesWeight *
      (1 - Math.floor((tries - 1) / 10) * 0.05);
    const timeTakenScore =
      maxScore * timeTakenWeight * (1 - (secondsElapsed / 30) * 0.05);

    return Math.round(
      timeTakenForADayScore + numberOfTriesScore + timeTakenScore,
    );
  };

  const checkForPassword = () => {
    toast.dismiss();
    if (value === password.toString()) {
      // Handle correct password
      console.log('Correct password');
      setIsPasswordLower(null);
      toast.success('You guessed the correct password!');
      setCorrectPassword(true);
      const localScore = calculateScore(tries, secondsElapsed);
      setScore(localScore);
    } else if (value < password.toString()) {
      setTries(tries + 1);
      setIsPasswordLower(true);

      toast.error('Your guess is too low!');
    } else {
      setTries(tries + 1);
      setIsPasswordLower(false);

      toast.error('Your guess is too high!');
    }
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map((v) => v.toString().padStart(2, '0'))
      .join(':');
  };

  useEffect(() => {
    const startTime = Date.now(); // Start the timer immediately when the component mounts

    const intervalId = setInterval(() => {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      setSecondsElapsed(duration);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const Timer = () => {
    return (
      <div
        className="mb-6 font-mono text-6xl font-bold text-yellow-500"
        aria-live="polite"
      >
        {formatTime(secondsElapsed)}
      </div>
    );
  };

  console.log('Password is:', password);
  console.log('Value is:', value);
  console.log('Is password lower:', isPasswordLower);
  console.log('Correct password:', correctPassword);
  console.log('Tries:', tries);
  console.log('Seconds elapsed:', secondsElapsed);
  console.log('Score:', score);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8">
      <Timer />
      <div className=" flex items-center justify-center">
        {isPasswordLower !== null &&
          (isPasswordLower ? (
            <ArrowCircleUp className={arrowCustomStyle} />
          ) : (
            <ArrowCircleDown className={arrowCustomStyle} />
          ))}
      </div>
      <InputOTP
        maxLength={4}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot className={puzzloCustomStyle} index={0} />
          <InputOTPSlot className={puzzloCustomStyle} index={1} />
          <InputOTPSlot className={puzzloCustomStyle} index={2} />
          <InputOTPSlot className={puzzloCustomStyle} index={3} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-xl text-white md:text-3xl xl:text-5xl   ">
        {value === '' ? (
          <>Enter your guessing number...</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
      <div className="flex w-full items-center justify-center">
        <Button
          size={'lg'}
          className="bg-yellow-500 text-lg text-white hover:bg-yellow-600"
          onClick={checkForPassword}
          disabled={correctPassword || value === ''}
        >
          Enter
        </Button>
      </div>
    </div>
  );
}
