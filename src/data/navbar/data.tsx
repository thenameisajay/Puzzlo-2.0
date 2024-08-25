import {
  Checkerboard,
  GameController,
  House,
  Question,
} from '@phosphor-icons/react';
import type { MainNavItem } from '@/types/interfaces/navbar/types';

export const navConfig: MainNavItem[] = [
  {
    icon: <House className="h-5 w-5" />,
    title: 'Home',
    href: '/',
  },
  {
    icon: <Question className="h-5 w-5" />,
    title: 'How to Play',
    href: '/how-to-play',
  },
  {
    icon: <GameController className="h-5 w-5" />,
    title: 'Play',
    href: '/play',
  },
  {
    icon: <Checkerboard className="h-5 w-5" />,
    title: 'Leaderboard',
    href: '/leaderboard',
  },
];
