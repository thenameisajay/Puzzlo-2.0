'use client';

import Link from 'next/link';
import { Ghost } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  bg-sky-500 text-foreground">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Game Over - 404
        </h1>
        <div className="flex justify-center space-x-4">
          <Ghost className="h-24 w-24  text-gray-700" />
        </div>
        <p className="mx-auto max-w-[700px] text-lg font-bold text-gray-700 sm:text-xl">
          Oops! Looks like you&apos;ve wandered into an unrendered part of the
          map. Our NPCs couldn&apos;t find the page you were looking for.
        </p>
        <p className="text-lg font-semibold text-primary text-white sm:text-xl">
          Error Code: RESPAWN_POINT_NOT_FOUND
        </p>
      </div>
      <div className="mt-8">
        <Button
          asChild
          size="default"
          className="bg-yellow-500 font-bold text-gray-800 hover:bg-yellow-600 md:text-base"
        >
          <Link href="/">Respawn at Checkpoint</Link>
        </Button>
      </div>
    </div>
  );
}
