import { Spinner } from '@phosphor-icons/react';

export default function LoadingComponent() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-sky-500">
      <div className="flex flex-col items-center space-y-4">
        <Spinner className="h-12 w-12 animate-spin text-white md:h-24 md:w-24" />
        <p className="text-lg font-semibold text-white md:text-4xl">
          Loading...
        </p>
      </div>
    </div>
  );
}
