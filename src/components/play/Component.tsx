import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { checkPassword } from '@/actions/checkPassword/actions';
import { calculateScore } from '@/actions/scoreEngine/actions';
import TimerComponent from '@/components/timer/Component';
import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import LeaderboardDialogComponent from './leaderboardDialog/Component';

dayjs.extend(utc);

const puzzloCustomStyle = `2xl:text-6xl h-16 w-16 text-base text-white md:text-xl lg:h-28 lg:w-28 lg:text-4xl xl:h-32 xl:w-32 bg-white text-yellow-500 
    focus:ring-2 col-span-3 bg-white text-yellow-500 ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-yellow-500 active:ring-2 active:ring-yellow-500
    `;

const arrowCustomStyle = 'animate-pulse text-7xl text-yellow-500 lg:text-8xl ';

export default function PlayComponent({
  password,
  leaderboardID,
}: {
  password: number;
  leaderboardID: number;
}) {
  const [value, setValue] = useState('');
  const [isPasswordHigher, setIsPasswordHigher] = useState<boolean | null>(
    null,
  );
  const [correctPassword, setCorrectPassword] = useState<boolean | undefined>(
    undefined,
  );
  const [showDialog, setShowDialog] = useState(false);

  // Setting up the variables for the score algorithm
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [tries, setTries] = useState(1);
  const [score, setScore] = useState(0);

  const celebrationClick = () => {
    console.log('Celebration click is activated');
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#66d9ff', '#ffffff', '#fff7a3', '#ff7f50'];

    const frame = () => {
      void confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });

      void confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  // Wrap validatePinEntry in useCallback to avoid changing its reference
  const validatePinEntry = useCallback(() => {
    toast.dismiss();
    const verifyPassword = checkPassword(password, value);
    if (verifyPassword === 0) {
      setCorrectPassword(true);
      setScore(calculateScore(secondsElapsed, tries));
      celebrationClick();
      setShowDialog(true);
    } else if (verifyPassword === 1) {
      setTries(tries + 1);
      setIsPasswordHigher(false);
      setValue('');
      toast.error('Try a lower number');
    } else {
      setTries(tries + 1);
      setValue('');
      setIsPasswordHigher(true);
      toast.error('Try a higher number');
    }
  }, [password, value, secondsElapsed, tries]);

  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTime = Date.now(); // Start the timer immediately when the component mounts

    timerId.current = setInterval(() => {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      setSecondsElapsed(duration);
    }, 1000);

    // Clean up the interval  when the component unmounts
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        validatePinEntry();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [validatePinEntry]);

  console.log('Password is:', password);
  console.log('Value is:', value);
  console.log('Is password lower:', isPasswordHigher);
  console.log('Correct password:', correctPassword);
  console.log('Tries:', tries);
  console.log('Seconds elapsed:', secondsElapsed);
  console.log('Score:', score);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8">
      <TimerComponent seconds={secondsElapsed} />
      <div className=" flex items-center justify-center">
        {isPasswordHigher !== null &&
          (isPasswordHigher ? (
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
          type="button"
          size={'lg'}
          className="bg-yellow-500 text-lg text-white hover:bg-yellow-600"
          onClick={validatePinEntry}
          disabled={correctPassword || value === ''}
        >
          Enter
        </Button>
      </div>
      <LeaderboardDialogComponent
        secondsElapsed={secondsElapsed}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        tries={tries}
        score={score}
        setTries={setTries}
        setSecondsElapsed={setSecondsElapsed}
        leaderboardID={leaderboardID}
      />
    </div>
  );
}
