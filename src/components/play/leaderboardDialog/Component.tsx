import { useCallback } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api } from '@/trpc/react';
import { type LeaderboardEntryFormTypes } from '@/types/interfaces/leaderboard/types';
import { type UserNameFormType } from '@/types/interfaces/play/userNameForm/types';
import { userNameFormSchema } from '@/types/schema/play/userNameForm/schema';

export default function LeaderboardDialogComponent({
  secondsElapsed,
  showDialog,
  setShowDialog,
  tries,
  setTries,
  score,
  setSecondsElapsed,
  leaderboardID,
}: {
  secondsElapsed: number;
  showDialog: boolean;
  setShowDialog: (showDialog: boolean) => void;
  tries: number;
  setTries: (tries: number) => void;
  score: number;
  setSecondsElapsed: (secondsElapsed: number) => void;
  leaderboardID: number;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UserNameFormType>({
    resolver: zodResolver(userNameFormSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
    },
  });

  const router = useRouter();

  const handleExit = () => {
    setShowDialog(false);

    //Resetign the game
    setTries(0);
    setSecondsElapsed(0);
    router.push('/');
  };

  const { mutate } = api.leaderboard.createLeaderboardEntry.useMutation({
    onSuccess: (data) => {
      toast.dismiss();
      console.log('Leaderboard entry saved successfully:', data);
      toast.success('Leaderboard entry saved successfully');
      router.push('/leaderboard ');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error saving leaderboard entry:', err);
      toast.error('Error saving leaderboard entry');
    },
  });

  const onSubmit: SubmitHandler<UserNameFormType> = useCallback(
    (loginData) => {
      const leaderBoardEntryData: LeaderboardEntryFormTypes = {
        username: loginData.username,
        numberOfTries: tries,
        score: score,
        timeTaken: secondsElapsed,
        leaderboardId: leaderboardID,
      };

      // Save the leaderboard entry
      mutate(leaderBoardEntryData);
    },
    [tries, score, secondsElapsed, leaderboardID, mutate],
  );

  console.log('Watch:', watch('username'));

  return (
    <form method="POST">
      <Dialog open={showDialog}>
        <DialogContent className="border-2 border-yellow-500 bg-sky-500 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-yellow-500 lg:text-3xl">
              Congratulations!
            </DialogTitle>
            <DialogDescription className="text-base text-white">
              You guessed the correct PIN in {tries} tries and your score is{' '}
              {score}! Please enter your username to save your score.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-6">
              <Label
                htmlFor="username"
                className="text-right text-white lg:text-base"
              >
                Username
              </Label>
              <Input
                id="username"
                {...register('username')}
                className="col-span-3 bg-white text-yellow-500 ring-2 ring-yellow-500 focus:ring-2"
              />
              {errors.username && (
                <div className="col-span-4 text-sm text-red-500">
                  {errors.username.message}
                </div>
              )}
            </div>
          </div>
          <DialogFooter className="flex flex-row items-center justify-center space-x-2">
            <Button
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid || isSubmitting}
              className="bg-yellow-500 text-lg text-white hover:bg-yellow-600"
            >
              Save
            </Button>
            <Button
              type="button"
              onClick={handleExit}
              variant="outline"
              className="bg-white text-lg text-yellow-500 hover:bg-sky-100"
            >
              Exit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}
