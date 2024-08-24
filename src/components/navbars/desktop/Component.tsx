'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navConfig } from '@/data/navbar/data';
import { cn } from '@/lib/utils';

export default function DesktopNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const path = pathname.split('/')[1];

  return (
    <nav
      className={cn(
        'mb-4 hidden w-full flex-wrap items-center justify-center space-x-4 border-b border-yellow-500 py-2 md:flex lg:space-x-6',
        className,
      )}
      {...props}
    >
      {navConfig.map(
        (item) =>
          item.href && (
            <Link
              href={item.href}
              key={item.href}
              className={
                `flex items-center justify-center rounded-full bg-yellow-500 p-3 px-6 text-sm font-bold text-gray-800 transition-colors
                  hover:text-white
                ` + (path === item.href.split('/')[1] && '  text-white')
              }
            >
              <div className="flex w-full flex-row space-x-1">
                <div>{item.icon && item.icon}</div> <div>{item.title}</div>
              </div>
            </Link>
          ),
      )}
    </nav>
  );
}
